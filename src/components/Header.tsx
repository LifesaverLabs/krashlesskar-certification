import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg ev-gradient text-primary-foreground">
            <Zap className="h-5 w-5" />
          </div>
          <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            KrashlessKar.org
          </span>
        </Link>
        <nav>
          <Link 
            to="/evtransition/chargingcooperation" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            EV Charging Cooperation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
