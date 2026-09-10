import React, { createContext, useContext, useState, useEffect } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  route: string; // 'home', 'services', 'about', 'faqs', 'contact', 'calculator', 'admin-portal', 'login_modal' or custom
  enabled: boolean;
  order: number;
  isDropdown?: boolean;
  isSpecialButton?: boolean;
  isSystemAdmin?: boolean;
  customUrl?: string;
}

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { id: 'home', label: 'Home', route: 'home', enabled: true, order: 1 },
  { id: 'services', label: 'Services', route: 'services', enabled: true, order: 2, isDropdown: true },
  { id: 'about', label: 'About Us', route: 'about', enabled: true, order: 3 },
  { id: 'faqs', label: 'FAQs', route: 'faqs', enabled: true, order: 4 },
  { id: 'contact', label: 'Contact Us', route: 'contact', enabled: true, order: 5 },
  { id: 'login', label: 'Login / Register', route: 'login_modal', enabled: true, order: 6, isSpecialButton: true }
];

interface NavigationContextType {
  menuItems: MenuItem[];
  updateMenuItem: (id: string, updated: Partial<MenuItem>) => void;
  moveMenuItem: (id: string, direction: 'up' | 'down') => void;
  setMenuItemOrder: (id: string, newOrder: number) => void;
  toggleMenuItemEnabled: (id: string) => void;
  addMenuItem: (item: { label: string; route: string; customUrl?: string }) => void;
  deleteMenuItem: (id: string) => void;
  resetToDefaultMenu: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('nexus_admin_header_menu');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.filter((item: MenuItem) => item.id !== 'admin' && item.route !== 'admin-portal');
          return cleaned.sort((a, b) => a.order - b.order);
        }
      } catch (e) {
        console.warn('Failed to parse saved header menu', e);
      }
    }
    return DEFAULT_MENU_ITEMS;
  });

  useEffect(() => {
    localStorage.setItem('nexus_admin_header_menu', JSON.stringify(menuItems));
  }, [menuItems]);

  const updateMenuItem = (id: string, updated: Partial<MenuItem>) => {
    setMenuItems(prev => {
      const next = prev.map(item => item.id === id ? { ...item, ...updated } : item);
      return next.sort((a, b) => a.order - b.order);
    });
  };

  const toggleMenuItemEnabled = (id: string) => {
    setMenuItems(prev => prev.map(item => item.id === id ? { ...item, enabled: !item.enabled } : item));
  };

  const moveMenuItem = (id: string, direction: 'up' | 'down') => {
    setMenuItems(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex(item => item.id === id);
      if (index === -1) return prev;

      if (direction === 'up' && index > 0) {
        const tempOrder = sorted[index].order;
        sorted[index].order = sorted[index - 1].order;
        sorted[index - 1].order = tempOrder;
      } else if (direction === 'down' && index < sorted.length - 1) {
        const tempOrder = sorted[index].order;
        sorted[index].order = sorted[index + 1].order;
        sorted[index + 1].order = tempOrder;
      }

      // Re-index cleanly 1..N
      return sorted.sort((a, b) => a.order - b.order).map((item, i) => ({ ...item, order: i + 1 }));
    });
  };

  const setMenuItemOrder = (id: string, newOrder: number) => {
    setMenuItems(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const targetIndex = sorted.findIndex(item => item.id === id);
      if (targetIndex === -1) return prev;

      const [removed] = sorted.splice(targetIndex, 1);
      const insertAt = Math.max(0, Math.min(newOrder - 1, sorted.length));
      sorted.splice(insertAt, 0, removed);

      return sorted.map((item, i) => ({ ...item, order: i + 1 }));
    });
  };

  const addMenuItem = (itemData: { label: string; route: string; customUrl?: string }) => {
    setMenuItems(prev => {
      const nextOrder = prev.length + 1;
      const newItem: MenuItem = {
        id: `custom_${Date.now()}`,
        label: itemData.label,
        route: itemData.route,
        customUrl: itemData.customUrl,
        enabled: true,
        order: nextOrder
      };
      return [...prev, newItem].sort((a, b) => a.order - b.order);
    });
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => {
      const filtered = prev.filter(item => item.id !== id);
      return filtered.map((item, i) => ({ ...item, order: i + 1 }));
    });
  };

  const resetToDefaultMenu = () => {
    setMenuItems(DEFAULT_MENU_ITEMS);
    localStorage.removeItem('nexus_admin_header_menu');
  };

  return (
    <NavigationContext.Provider
      value={{
        menuItems: [...menuItems].sort((a, b) => a.order - b.order),
        updateMenuItem,
        moveMenuItem,
        setMenuItemOrder,
        toggleMenuItemEnabled,
        addMenuItem,
        deleteMenuItem,
        resetToDefaultMenu
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
