// @/hooks/use-toast.ts
"use client";

import { useState, useEffect } from "react";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any; // Allow additional props
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description, action, ...props }: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9); // Simple unique ID
    setToasts((currentToasts) => [...currentToasts, { id, title, description, action, ...props }]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((currentToasts) => currentToasts.slice(1));
      }, 5000); // Toasts disappear after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return {
    toast,
    toasts,
  };
}