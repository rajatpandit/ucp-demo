export interface Price {
  amount: number;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: Price;
  original_price?: Price;
  images: string[];
  category: string;
  attributes: Record<string, string | number | boolean>;
  merchant_id: string;
}

export interface Merchant {
  id: string;
  name: string;
  description: string;
  logo: string;
  tags: string[];
  rating: number;
  location: string;
  manifest_url: string;
}

export interface MerchantManifest {
  ucp_version: "1.0";
  merchant: Merchant;
  catalog: Product[];
  serviceability: {
    regions: string[];
    delivery_time_hours: number;
  };
}

export interface RegistryResponse {
  merchants: MerchantSummary[];
}

export interface MerchantSummary {
  id: string;
  name: string;
  tags: string[];
  manifest_url: string;
}
