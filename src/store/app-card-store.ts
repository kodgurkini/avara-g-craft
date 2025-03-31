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
  randomize: () => void;
}

export const useAppCardStore = create<AppCardState>()((set, get) => ({
  appName: 'App Name',
  symbolColor: '#7ac5ff',
  symbolShape: 0,
  size: 'large',
  
  setAppName: (name) => set({ appName: name.slice(0, 16) }),
  setSymbolColor: (color) => {
    document.documentElement.style.setProperty('--symbol-color', color);
    set({ symbolColor: color });
  },
  setSymbolShape: (shape) => set({ symbolShape: shape }),
  setSize: (size) => set({ size }),
  randomize: () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const currentShape = get().symbolShape;
    let randomShape;
    do {
      randomShape = Math.floor(Math.random() * 4);
    } while (randomShape === currentShape);
    
    document.documentElement.style.setProperty('--symbol-color', randomColor);
    set({ symbolColor: randomColor, symbolShape: randomShape });
  },
}));