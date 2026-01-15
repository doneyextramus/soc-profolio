import { Terminal, Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "doneybiju@gmail.com",
    href: "mailto:doneybiju@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+370 61792782",
    href: "tel:+37061792782"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kaunas, Lithuania",
    href: null
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "portfolio-website-3uo.pages.dev",
    href: "https://portfolio-website-3uo.pages.dev"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> contact --connect
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal Style Contact Card */}
          <Card className="bg-card/80 border-border/50 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-secondary/30 px-4 py-3 border-b border-border/50 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-5/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">contact_info.sh</span>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactLinks.map((link) => (
                  <div 
                    key={link.label}
                    className="group"
                  >
                    {link.href ? (
                      <a 
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{link.label}</p>
                          <p className="text-foreground font-medium">{link.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 border border-border/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{link.label}</p>
                          <p className="text-foreground font-medium">{link.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-6 border-t border-border/50">
                <p className="text-muted-foreground mb-4 font-mono text-sm">
                  <span className="text-primary">~/</span> Ready to secure your digital assets? Let's connect!
                </p>
                <Button 
                  size="lg"
                  className="font-mono shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
                  asChild
                >
                  <a href="mailto:doneybiju@gmail.com">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
