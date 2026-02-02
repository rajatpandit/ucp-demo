"use client";

import { useState } from 'react';
import { Product } from '@/lib/ucp-schema';
import { ProductGrid } from '@/components/consumer/ProductGrid';
import { ChatInterface } from '@/components/consumer/ChatInterface';
import { OmniScoutAgent } from '@/lib/agent-logic/omni-scout';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setHasSearched(true);
    setProducts([]); // Clear previous results

    try {
      // Instantiate agent (pure client-side logic for demo)
      const agent = new OmniScoutAgent();
      const results = await agent.findProducts(query);
      setProducts(results);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className={`transition-all duration-700 ease-in-out flex flex-col items-center w-full max-w-4xl ${hasSearched ? 'mt-0 mb-8' : 'mt-[20vh] mb-12'}`}>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4 text-center tracking-tight">
          Style <span className="text-primary">Omni-Scout</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl text-center max-w-lg mb-8 font-light">
          Experience the Universal Commerce Protocol. <br/>
          Your AI agent negotiates with the world, so you don't have to.
        </p>

        <ChatInterface onSearch={handleSearch} isSearching={isSearching} />
      </div>

      {/* Results Section */}
      <div className={`w-full max-w-7xl transition-opacity duration-1000 ${hasSearched ? 'opacity-100' : 'opacity-0'}`}>
        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-forwards">
            <div className="flex items-center gap-4 mb-6 px-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Agent Findings
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <ProductGrid products={products} />
          </div>
        )}
      </div>
    </main>
  );
}
