import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { FinalLanding } from "@/pages/FinalLanding";
import { BodycarePage } from "@/pages/BodycarePage";
import { GiftSetsPage } from "@/pages/GiftSetsPage";
import { GroomingPage } from "@/pages/GroomingPage";
import { HaircarePage } from "@/pages/HaircarePage";
import { ShopPage } from "@/pages/ShopPage";
import { SkincarePage } from "@/pages/SkincarePage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { LoginPage } from "@/pages/LoginPage";
import { CartProvider } from "@/context/CartContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={FinalLanding} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/bodycare" component={BodycarePage} />
      <Route path="/skincare" component={SkincarePage} />
      <Route path="/grooming" component={GroomingPage} />
      <Route path="/haircare" component={HaircarePage} />
      <Route path="/giftsets" component={GiftSetsPage} />
      <Route path="/product/:category/:id" component={ProductDetailPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Router />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
