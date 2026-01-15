import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold text-foreground">Doney Biju John</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-3 h-3 text-destructive inline" /> for cybersecurity
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
