import { Briefcase, Calendar, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "Extramus",
    period: "07/2025 - 10/2025",
    responsibilities: [
      "Supported security assessments and access reviews; documented findings and remediation actions",
      "Investigated suspicious access/events and escalated with clear incident notes and timelines",
      "Assisted with improving security controls/policies and tracking adherence with stakeholders",
      "Contributed to security tooling evaluation and produced recommendations based on requirements"
    ]
  },
  {
    title: "Cybersecurity Analyst (Forage)",
    company: "Tata",
    period: "05/2025 - 06/2025",
    responsibilities: [
      "Performed SIEM-style alert triage on simulated phishing, suspicious logins, and malware indicators",
      "Wrote incident documentation: impact, evidence, containment suggestions, and escalation messages"
    ]
  },
  {
    title: "Shuffler",
    company: "Evolution",
    period: "10/2024 - 06/2025",
    responsibilities: [
      "Followed strict SOPs and quality standards in a fast-paced, shift-based environment",
      "Escalated issues quickly and communicated clearly in English across a multicultural team",
      "Monitored the floor environment, identified issues quickly, and escalated to shift managers"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> experience --history
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-primary font-mono">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-secondary/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
