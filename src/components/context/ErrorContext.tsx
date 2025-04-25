import { create } from 'zustand';

export const useErrorStore = create((set:any) => ({
  message: "",
  priority: "",
  code: "",
  setError: (message:any, code:any, priority:any,) => set({ message,code, priority }),
  clearError: () => set({ message: "", priority: "", code: "" }),
}));