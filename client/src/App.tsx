import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { FinalLanding } from "@/pages/FinalLanding";
import { BodycarePage } from "@/pages/BodycarePage";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={FinalLanding} />
      <Route path="/bodycare" component={BodycarePage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
