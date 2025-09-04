import { create } from 'zustand';

interface ErrorState {
  message: string;
  priority: string;
  code: string;
  timestamp: number;
  setError: (message: string, code: string, priority: string) => void;
  clearError: () => void;
  isCriticalError: () => boolean;
}

export const useErrorStore = create<ErrorState>((set, get) => ({
  message: "",
  priority: "",
  code: "",
  timestamp: 0,
  setError: (message: string, code: string, priority: string) =>
    set({
      message,
      code,
      priority,
      timestamp: Date.now()
    }),
  clearError: () =>
    set({
      message: "",
      priority: "",
      code: "",
      timestamp: 0
    }),
  isCriticalError: () => {
    const { priority } = get();
    return priority === "high" || priority === "not-found" || priority === "not-authorized";
  }
}));


