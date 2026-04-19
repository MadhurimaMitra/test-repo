import { createContext, useContext, useState } from "react";

export type CartItem = {
  id: number;
  category: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number, category: string) => void;
  updateQuantity: (id: number, category: string, qty: number) => void;
  totalCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.category === item.category
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.category === item.category
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeItem(id: number, category: string) {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.category === category))
    );
  }

  function updateQuantity(id: number, category: string, qty: number) {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.category === category ? { ...i, quantity: qty } : i
      )
    );
  }

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, totalCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
