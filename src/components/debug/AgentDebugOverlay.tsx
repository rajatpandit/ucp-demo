"use client";

import { useAgentStore } from '@/lib/store/agent-store';
import { X, Terminal, ChevronUp, ChevronDown, Activity, Trash2, Move } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AgentDebugOverlay() {
  const { logs, isOverlayOpen, toggleOverlay, clearLogs } = useAgentStore();
  const bottomRef = useRef<HTMLDivElement>(null);
  
  // Draggable State
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false); // Track if user has manually moved it

  // Initialize position on mount (top-right corner to avoid covering search center)
  useEffect(() => {
    // Only set initial position on client side
    const initialX = window.innerWidth - 620; // 600px width + 20px padding
    const initialY = 20;
    setPosition({ x: Math.max(20, initialX), y: initialY });
  }, []);

  useEffect(() => {
    if (isOverlayOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOverlayOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    setHasMoved(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isOverlayOpen) {
    return (
      <button
        onClick={toggleOverlay}
        className="fixed bottom-4 right-4 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-50 ring-2 ring-primary/50"
      >
        <Activity className="w-6 h-6 animate-pulse" />
      </button>
    );
  }

  return (
    <div 
      className="fixed w-[600px] max-w-[90vw] bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 z-50 flex flex-col overflow-hidden font-mono text-xs transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        maxHeight: '80vh', // Prevent overflowing window vertically
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      {/* Header - Draggable Target */}
      <div 
        className="flex items-center justify-between p-3 border-b border-gray-800 bg-gray-950/50 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 text-primary font-bold">
          <Terminal className="w-4 h-4" />
          <span>AGENT NEURAL LINK</span>
          <span className="text-gray-600 font-normal ml-2 text-[10px]">
            {isDragging ? '(Moving...)' : '(Drag to move)'}
          </span>
        </div>
        <div className="flex items-center gap-2" onMouseDown={(e) => e.stopPropagation()}>
           <button onClick={clearLogs} className="text-gray-500 hover:text-red-400 p-1" title="Clear Logs">
            <Trash2 className="w-4 h-4" />
          </button>
          <button onClick={toggleOverlay} className="text-gray-400 hover:text-white p-1" title="Minimize">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Logs Area - Independent Scroll */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent bg-black/20">
        {logs.length === 0 && (
          <div className="text-gray-600 italic text-center mt-20">
            Scanning for agent activity...
          </div>
        )}
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3 group animate-in fade-in slide-in-from-bottom-2 duration-300 border-b border-white/5 pb-1">
            <span className="text-gray-500 min-w-[60px] opacity-70">{log.timestamp}</span>
            <div className="flex-1 break-words">
              <span className={`font-bold mr-2 ${getSourceColor(log.source)}`}>
                [{log.source}]
              </span>
              <span className={`${getTypeColor(log.type)}`}>
                {log.message}
              </span>
              {log.details && (
                <pre className="mt-1 text-[10px] text-gray-500 bg-black/40 p-2 rounded overflow-x-auto border border-gray-800">
                  {JSON.stringify(log.details, null, 2)}
                </pre>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

function getSourceColor(source: string) {
  switch (source) {
    case 'ORCHESTRATOR': return 'text-purple-400';
    case 'DISCOVERY': return 'text-blue-400';
    case 'TRANSACTION': return 'text-green-400';
    case 'NETWORK': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case 'error': return 'text-red-400';
    case 'success': return 'text-green-300';
    case 'warning': return 'text-yellow-300';
    default: return 'text-gray-300';
  }
}
