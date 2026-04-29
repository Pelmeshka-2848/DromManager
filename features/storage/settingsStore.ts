import { create } from 'zustand';

interface SettingsState {
  safeMode: boolean;
  setSafeMode: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  safeMode: true,
  setSafeMode: (value) => set({ safeMode: value })
}));
