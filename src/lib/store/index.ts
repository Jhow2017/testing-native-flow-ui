import { create } from 'zustand';
import { Theme } from '../themes/types';

interface StoreState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const useStore = create<StoreState>((set) => ({
    theme: {} as Theme,
    setTheme: (theme: Theme) => set({ theme }),
}));

export { useStore };
