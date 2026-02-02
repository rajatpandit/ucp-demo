"use client";

import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ChatInterfaceProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

export function ChatInterface({ onSearch, isSearching }: ChatInterfaceProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const suggestions = [
    "Find a summer wedding outfit in Tuscany",
    "Show me luxury sneakers under $300",
    "I need a velvet accessory for a gala"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-30 blur transition-opacity"></div>
        <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-100 p-2 pr-2 overflow-hidden">
          <div className="pl-4 pr-2 text-primary">
            <Sparkles className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isSearching}
            placeholder="Ask your Personal Style Scout..."
            className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 font-medium h-12"
          />
          <button
            type="submit"
            disabled={isSearching || !query.trim()}
            className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSearching ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5 ml-0.5" />
            )}
          </button>
        </div>
      </form>
      
      {!isSearching && (
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => {
                setQuery(s);
                onSearch(s);
              }}
              className="text-xs bg-white border border-gray-200 hover:border-primary/50 hover:text-primary px-3 py-1.5 rounded-full text-gray-500 transition-colors shadow-sm"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
