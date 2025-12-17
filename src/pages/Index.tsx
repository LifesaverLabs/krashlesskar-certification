import { Zap, ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import l1Hechsher from "@/assets/krashless-kar-l1-hechsher.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <img 
                src={l1Hechsher} 
                alt="Krashless Kar Level 1 Certification - Safer than Human 80th Percentile" 
                className="w-64 md:w-80 h-auto rounded-xl shadow-lg"
              />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Krashless Kar™ Certification
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Lending a hand to{" "}
              <span className="font-semibold text-[hsl(var(--safety-orange))]">Automated Krashless Kar</span>
              {" "}adoption by certifying driverless vehicles that achieve{" "}
              <span className="font-semibold text-[hsl(var(--ev-green))]">"krashless"</span>
              {" "}levels of fully autonomous operation.
            </p>
          </div>

          {/* What is a Hechsher Section */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border mb-8">
            <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Shield className="h-6 w-6 text-[hsl(var(--ev-green))]" />
              A Civic Safety Hechsher
            </h2>
            <p className="text-muted-foreground mb-4">
              A <strong className="text-foreground">hechsher</strong> (Hebrew: הכשר) is a certification mark indicating that a product meets specific standards—traditionally used in kosher food certification to show rabbinical approval.
            </p>
            <p className="text-muted-foreground mb-4">
              We're applying this concept <strong className="text-foreground">civically, under civic religion</strong>—the shared values and sacred commitments a society holds toward the common good. Just as religious certification marks provide trust and accountability, the <strong className="text-foreground">Krashless Kar™ hechsher</strong> serves as a civic covenant: certifying that a driverless vehicle has demonstrated statistically validated safety performance exceeding rigorous benchmarks, and that we collectively hold autonomous vehicle safety as a sacred civic duty.
            </p>
          </div>

          {/* Certification Levels */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border mb-8">
            <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-[hsl(var(--ev-teal))]" />
              Certification Levels
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">Level 1.0 — Entry Certification</h3>
                <p className="text-muted-foreground">
                  Performance in full autonomy exceeding the <strong className="text-foreground">80th percentile of defensive human drivers</strong>. This is our starting point—demonstrating that the autonomous system is safer than 80% of careful, defensive human drivers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">Logarithmic Progression</h3>
                <p className="text-muted-foreground">
                  Higher certification levels progress <strong className="text-foreground">logarithmically</strong>, scaling toward "five nines" (99.999%) safety and reliability measured by <strong className="text-foreground">Mean Time To Krash (MTTK)</strong>. Each level represents an order of magnitude improvement in crash avoidance.
                </p>
              </div>
            </div>
          </div>

          {/* Call for Professionals */}
          <div className="p-6 rounded-xl bg-[hsl(var(--ev-green))]/10 border border-[hsl(var(--ev-green))]/30 mb-8">
            <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Users className="h-6 w-6 text-[hsl(var(--ev-green))]" />
              Seeking Qualified Stewards
            </h2>
            <p className="text-muted-foreground mb-4">
              We're looking for <strong className="text-foreground">professionals with adequate statistical training and competency in autonomous vehicle safety assessment</strong> who may want to take over maintenance of this certification program.
            </p>
            <p className="text-muted-foreground">
              The ideal steward will be <strong className="text-foreground">stubborn about enforcing and escalating standards</strong> under this mark—ensuring that the Krashless Kar™ hechsher maintains its integrity and continues to raise the bar for autonomous vehicle safety.
            </p>
          </div>

          {/* EV Charging Link */}
          <div className="p-6 rounded-xl bg-secondary/50 border border-border mb-8 text-center">
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
          
          <p className="text-sm text-muted-foreground text-center">
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
