import { create } from "zustand";

type Notification = {
  id: string;
  message: string;
  type: "permanent" | "temporary";
};

type NotificationStore = {
  notifications: Notification[];
  addNotification: (message: string, type: "permanent" | "temporary") => void;
  removeNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (message, type) => {
    const newNotification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
    };

    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    // Auto-remove temporary notifications after 5 seconds
    if (type === "temporary") {
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter(
            (notif) => notif.id !== newNotification.id
          ),
        }));
      }, 5000);
    }
  },
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notif) => notif.id !== id),
    })),
}));
