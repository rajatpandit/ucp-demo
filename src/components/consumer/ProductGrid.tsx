"use client";

import { Product } from '@/lib/ucp-schema';
import { ShoppingBag, Star, Info, Code2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-gray-400">
        <ShoppingBag className="w-12 h-12 mb-4 opacity-50" />
        <p>No products found. Ask the agent to find something!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[420px] w-full perspective-1000 group">
      <div 
        className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side (Consumer View) */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center p-6">
             {/* Using standard img for SVG icons safely, or Next/Image */}
             <img 
               src={product.images[0]} 
               alt={product.name}
               className="h-full w-full object-contain opacity-90 transition-transform group-hover:scale-105"
             />
             <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
               {product.price.currency} {product.price.amount}
             </div>
             <button 
                onClick={() => setIsFlipped(true)}
                className="absolute bottom-3 right-3 p-2 bg-gray-900/10 hover:bg-gray-900/20 text-gray-700 rounded-full backdrop-blur transition-all"
                title="Inspect UCP Manifest"
             >
               <Code2 className="w-4 h-4" />
             </button>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.category}</span>
                <h3 className="font-serif text-lg font-medium leading-tight mt-1">{product.name}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{product.description}</p>
            <div className="flex items-center justify-between border-t border-gray-50 pt-3">
              <span className="text-xs text-gray-400 font-mono">By {product.merchant_id}</span>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Back Side (Developer / Protocol View) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-900 rounded-xl shadow-xl overflow-hidden text-left p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-2">
            <span className="text-primary font-mono text-xs font-bold">UCP MANIFEST FRAGMENT</span>
             <button 
                onClick={() => setIsFlipped(false)}
                className="text-gray-400 hover:text-white"
             >
               <Info className="w-4 h-4" />
             </button>
          </div>
          <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-600">
            <pre className="text-[10px] sm:text-xs font-mono text-green-400 whitespace-pre-wrap">
              {JSON.stringify(product, null, 2)}
            </pre>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-700 text-[10px] text-gray-500 font-mono">
            Origin: {product.merchant_id}.json<br/>
            Hash: {product.id.split('-')[1]}...
          </div>
        </div>
      </div>
    </div>
  );
}
