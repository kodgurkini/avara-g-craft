import { create } from 'zustand';

interface AppCardState {
  appName: string;
  symbolColor: string;
  symbolShape: number;
  size: 'small' | 'medium' | 'large';
  
  setAppName: (name: string) => void;
  setSymbolColor: (color: string) => void;
  setSymbolShape: (shape: number) => void;
  setSize: (size: 'small' | 'medium' | 'large') => void;
}

export const useAppCardStore = create<AppCardState>()((set) => ({
  appName: 'App Name',
  symbolColor: '#6E56CF',
  symbolShape: 0,
  size: 'large',
  
  setAppName: (name) => set({ appName: name.slice(0, 16) }),
  setSymbolColor: (color) => {
    document.documentElement.style.setProperty('--symbol-color', color);
    set({ symbolColor: color });
  },
  setSymbolShape: (shape) => set({ symbolShape: shape }),
  setSize: (size) => set({ size }),
}));