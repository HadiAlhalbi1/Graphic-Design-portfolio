import { Brush, Monitor, Layers, Zap, Sparkles, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Skills",
      icon: Brush,
      items: [
        { name: "Digital Illustration", level: 95 },
        { name: "Character Design", level: 92 },
        { name: "Branding", level: 88 },
        { name: "Motion Graphics", level: 85 },
        { name: "UI/UX", level: 80 },
        { name: "3D", level: 75 },
      ],
    },
    {
      title: "Software",
      icon: Monitor,
      items: [
        { name: "Adobe Illustrator", level: 95 },
        { name: "Adobe Photoshop", level: 90 },
        { name: "Procreate", level: 88 },
        { name: "Blender", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Procreate Animation", level: 82 },
      ],
    },
  ];

  const languages = [
    { name: "English", level: "Upper-Intermediate" },
    { name: "Belarusian", level: "Native" },
    { name: "Polish", level: "Fluent" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-accent/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-retro text-6xl md:text-7xl text-foreground mb-4">
            Skills & Software
          </h2>
          <div className="inline-block relative">
            <p className="font-script text-2xl text-primary">
              What I'm great at
            </p>
            <div className="absolute -top-2 -right-4 sticker sticker-mint text-sm rotate-12">
              ⭐
            </div>
          </div>

          {/* Floating decorations */}
          <div className="absolute top-0 left-1/4 sticker sticker-purple float">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute top-12 right-1/4 sticker sticker-yellow float-delay">
            <Star className="w-4 h-4" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/90 rounded-3xl p-8 shadow-float backdrop-blur-sm relative hover-bounce"
            >
              <div className="flex items-center mb-8">
                <div className="sticker sticker-pink mr-4">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-retro text-3xl text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, index) => (
                  <div key={item.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-primary font-bold">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 ease-out relative"
                        style={{ 
                          width: `${item.level}%`,
                          animationDelay: `${index * 0.1}s` 
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`absolute -bottom-3 -right-3 sticker ${
                categoryIndex === 0 ? 'sticker-yellow' : 'sticker-mint'
              } text-sm`}>
                💪
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-gradient-to-br from-secondary/20 to-warning/10 rounded-3xl p-8 shadow-float relative">
          <div className="flex items-center mb-8">
            <div className="sticker sticker-purple mr-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-retro text-3xl text-foreground">Languages</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className="bg-white/90 rounded-2xl p-6 text-center hover-bounce shadow-sticker"
              >
                <div className="text-2xl mb-2">
                  {index === 0 && "🇺🇸"}
                  {index === 1 && "🇧🇾"}
                  {index === 2 && "🇵🇱"}
                </div>
                <h4 className="font-retro text-xl text-foreground mb-2">
                  {lang.name}
                </h4>
                <span className="font-script text-primary">{lang.level}</span>
              </div>
            ))}
          </div>

          <div className="absolute -top-3 -left-3 sticker sticker-pink text-sm">
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;