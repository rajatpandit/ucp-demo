import { useAgentStore } from '../store/agent-store';
import { MerchantManifest, Product, RegistryResponse } from '../ucp-schema';

export class OmniScoutAgent {
  private addLog = useAgentStore.getState().addLog;

  async findProducts(query: string): Promise<Product[]> {
    this.log('ORCHESTRATOR', `Received intent: "${query}"`, 'info');

    // Step 1: Registry Discovery
    this.log('DISCOVERY', 'Broadcasting query to UCP Registry...', 'info');
    const registry = await this.fetchRegistry();
    if (!registry) return [];

    // Step 2: Manifest Retrieval
    this.log('DISCOVERY', `Found ${registry.merchants.length} candidate merchants. Fetching manifests...`, 'info');
    const manifests = await this.fetchManifests(registry.merchants);
    
    // Step 3: Local Filtering (The "Brain")
    this.log('ORCHESTRATOR', 'Analyzing catalogs for relevance...', 'info');
    const results = this.filterProducts(manifests, query);
    
    this.log('ORCHESTRATOR', `Optimization complete. Found ${results.length} matches.`, 'success');
    return results;
  }

  private async fetchRegistry(): Promise<RegistryResponse | null> {
    try {
      const start = performance.now();
      const res = await fetch('/api/ucp/registry');
      const data = await res.json();
      const duration = Math.round(performance.now() - start);
      
      this.log('NETWORK', `GET /api/ucp/registry [200 OK] ${duration}ms`, 'warning', data);
      return data;
    } catch (e) {
      this.log('NETWORK', `Registry Lookup Failed: ${e}`, 'error');
      return null;
    }
  }

  private async fetchManifests(merchants: any[]): Promise<MerchantManifest[]> {
    const manifests: MerchantManifest[] = [];
    
    // Parallel fetch
    const promises = merchants.map(async (m) => {
      this.log('DISCOVERY', `Deep-linking to ${m.name} (${m.manifest_url})...`, 'info');
      try {
        const start = performance.now();
        const res = await fetch(m.manifest_url);
        const data = await res.json();
        const duration = Math.round(performance.now() - start);
        
        this.log('NETWORK', `GET ${m.manifest_url} [200 OK] ${duration}ms`, 'warning');
        manifests.push(data);
      } catch (e) {
        this.log('NETWORK', `Failed to fetch manifest for ${m.name}`, 'error');
      }
    });

    await Promise.all(promises);
    return manifests;
  }

  private filterProducts(manifests: MerchantManifest[], query: string): Product[] {
    const products: Product[] = [];
    const normalizedQuery = query.toLowerCase();

    // Naive keyword matching for the demo
    // In a real agent, this would be LLM-based semantic search
    const keywords = normalizedQuery.split(' ').filter(word => word.length > 3);

    manifests.forEach(m => {
      m.catalog.forEach(p => {
        const text = `${p.name} ${p.description} ${p.category} ${JSON.stringify(p.attributes)}`.toLowerCase();
        
        // Match if any keyword is present (very permissive for demo)
        // or if query is empty (show all)
        const match = keywords.some(k => text.includes(k)) || keywords.length === 0;

        if (match) {
          products.push(p);
        }
      });
    });

    return products;
  }

  private log(source: any, message: string, type: any = 'info', details?: any) {
    this.addLog({ source, message, type, details });
  }
}
