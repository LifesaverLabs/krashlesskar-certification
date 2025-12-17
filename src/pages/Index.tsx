import { Construction, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="p-6 rounded-2xl color-cycle text-primary-foreground">
                <Construction className="h-16 w-16" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 rounded-full bg-ev-yellow text-foreground">
                <Zap className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Under Construction
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            We're slowly building something great for the{" "}
            <span className="font-semibold text-[hsl(var(--safety-orange))]">Automated Krashless Kar</span>
            {" "}and{" "}
            <span className="font-semibold text-[hsl(var(--ev-green))]">Human Crashless Car</span>
            {" "}Calmunity.
          </p>
          
          <div className="p-6 rounded-xl bg-secondary/50 border border-border mb-8">
            <p className="text-muted-foreground mb-4">
              In the meantime, check out our EV Charging Cooperation initiative:
            </p>
            <Button asChild className="ev-gradient text-primary-foreground hover:opacity-90 transition-opacity">
              <Link to="/evtransition/chargingcooperation" className="inline-flex items-center gap-2">
                EV Charging Cooperation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Promoting calm, cooperative, crash-free driving
          </p>
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} KrashlessKar.org — Keep the electrons flowing ⚡</p>
      </footer>
    </div>
  );
};

export default Index;
