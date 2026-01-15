import { Shield, Terminal, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Terminal-style intro */}
          <div className="font-mono text-sm text-primary flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span className="opacity-70">~/security$</span>
            <span className="animate-pulse">_</span>
          </div>

          {/* Name with glow effect */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Doney Biju </span>
              <span className="text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">John</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-primary animate-pulse-glow" />
              <p className="text-xl md:text-2xl font-mono text-muted-foreground">
                Security Operations Analyst
              </p>
              <Shield className="w-6 h-6 text-primary animate-pulse-glow" />
            </div>
          </div>

          {/* Summary */}
          <p className="max-w-3xl text-muted-foreground text-lg leading-relaxed">
            Entry-level SOC candidate with hands-on experience in alert triage, log analysis, 
            and incident documentation. Proficient in TCP/IP, DNS, HTTP(S), Wireshark, Linux CLI, 
            and Python/SQL for investigations and automation.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono">
            <a 
              href="mailto:doneybiju@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              doneybiju@gmail.com
            </a>
            <a 
              href="tel:+37061792782" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +370 61792782
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Kaunas, Lithuania
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="font-mono shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="w-4 h-4 mr-2" />
              View Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-mono border-primary/50 hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
