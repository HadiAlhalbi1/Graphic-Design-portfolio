import { Briefcase, GraduationCap, Calendar, MapPin, Building, Sparkles } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      company: "Freelance Illustrator / Graphic Designer",
      period: "Since 2015",
      location: "Remote",
      type: "Freelance",
      description: "Creating custom illustrations, character designs, and branding materials for various clients worldwide.",
    },
    {
      company: "SHEIN X",
      role: "Print Designer",
      period: "Since March 2023",
      location: "Remote",
      type: "Contract",
      description: "Developing trendy print designs for fast fashion collections, focusing on youth-oriented graphics.",
    },
    {
      company: "Tool/UpWork",
      role: "Character Designer",
      period: "January 2023 - April 2023",
      location: "Remote",
      type: "Project",
      description: "Specialized in character creation and development for digital platforms and applications.",
    },
    {
      company: "Warner Bros",
      role: "Print Designer",
      period: "Since December 2023",
      location: "Remote",
      type: "Contract",
      description: "Creating official merchandise designs and promotional materials for entertainment properties.",
    },
    {
      company: "Creative Market",
      role: "Illustrator",
      period: "Since 2018",
      location: "Remote",
      type: "Marketplace",
      description: "Publishing and selling digital illustrations, character packs, and design assets.",
    },
    {
      company: "Charts+Darts design agency",
      role: "Illustrator",
      period: "October 2022 - January 2023",
      location: "Remote",
      type: "Agency",
      description: "Collaborated on various client projects, creating custom illustrations and visual content.",
    },
  ];

  const education = [
    {
      degree: "Graphic Designer",
      school: "Vitebsk State Technological University",
      period: "2010 - 2015",
      description: "Comprehensive design education covering traditional and digital design principles.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-warning/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-retro text-6xl md:text-7xl text-foreground mb-4">
            Resume
          </h2>
          <div className="inline-block relative">
            <p className="font-script text-2xl text-primary">
              My creative journey
            </p>
            <div className="absolute -top-2 -right-4 sticker sticker-yellow text-sm rotate-12">
              📝
            </div>
          </div>

          <div className="absolute top-0 right-1/4 sticker sticker-mint float">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 rounded-3xl p-8 shadow-float backdrop-blur-sm relative h-fit">
              <div className="flex items-center mb-8">
                <div className="sticker sticker-purple mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-retro text-3xl text-foreground">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl p-6">
                    <h4 className="font-retro text-xl text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="font-script text-lg text-primary mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-sm text-foreground/80">{edu.description}</p>
                  </div>
                </div>
              ))}

              <div className="absolute -bottom-3 -right-3 sticker sticker-pink text-sm">
                🎓
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 rounded-3xl p-8 shadow-float backdrop-blur-sm relative">
              <div className="flex items-center mb-8">
                <div className="sticker sticker-mint mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-retro text-3xl text-foreground">Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline connector */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-4 top-16 w-0.5 h-20 bg-gradient-to-b from-primary to-accent"></div>
                    )}
                    
                    <div className="flex gap-6">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-sticker">
                        <Building className="w-4 h-4 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-gradient-to-br from-muted/30 to-background rounded-2xl p-6 hover-bounce">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h4 className="font-retro text-xl text-foreground">
                            {exp.company}
                          </h4>
                          {exp.role && (
                            <span className="sticker sticker-yellow text-xs">
                              {exp.role}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <span className="sticker sticker-purple text-xs">
                            {exp.type}
                          </span>
                        </div>

                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-3 -right-3 sticker sticker-yellow text-sm">
                💼
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Years Experience", emoji: "🎨" },
            { number: "500+", label: "Happy Clients", emoji: "😊" },
            { number: "1000+", label: "Characters Created", emoji: "🎭" },
            { number: "∞", label: "Creative Ideas", emoji: "💡" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl p-6 text-center hover-bounce shadow-sticker"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="font-retro text-2xl text-primary mb-1">
                {stat.number}
              </div>
              <div className="font-script text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;