import { create } from 'zustand';

export interface AgentLog {
  id: string;
  timestamp: string;
  source: 'ORCHESTRATOR' | 'DISCOVERY' | 'TRANSACTION' | 'NETWORK' | 'SYSTEM';
  message: string;
  details?: any;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface AgentState {
  logs: AgentLog[];
  isOverlayOpen: boolean;
  addLog: (log: Omit<AgentLog, 'id' | 'timestamp'>) => void;
  toggleOverlay: () => void;
  clearLogs: () => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  logs: [],
  isOverlayOpen: true, // Open by default for the demo
  addLog: (log) =>
    set((state) => ({
      logs: [
        ...state.logs,
        {
          ...log,
          id: Math.random().toString(36).substring(7),
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    })),
  toggleOverlay: () => set((state) => ({ isOverlayOpen: !state.isOverlayOpen })),
  clearLogs: () => set({ logs: [] }),
}));
