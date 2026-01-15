import { Award, Terminal, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "12/2025",
    topics: ["Assets, Threats & Vulnerabilities", "Python Automation", "Networks", "Risk Management", "Detection & Response", "Linux & SQL"]
  },
  {
    title: "SIEM 101",
    issuer: "LetsDefend",
    date: "01/2026",
    topics: ["SIEM Basics", "Installation & Configuration"]
  },
  {
    title: "TryHackMe — SOC Level 1 Path",
    issuer: "TryHackMe",
    date: "12/2025",
    topics: ["Alert Triage", "Log Analysis", "Incident Response Workflow"]
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-card/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> certs --verify
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              <CardContent className="p-6">
                {/* Badge Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{cert.title}</h3>
                <p className="text-sm text-primary font-mono mb-4">{cert.issuer}</p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="px-2 py-0.5 text-xs bg-secondary/50 text-muted-foreground rounded border border-border/50"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
