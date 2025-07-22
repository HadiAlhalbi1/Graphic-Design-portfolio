import { Instagram, Mail, Linkedin, ExternalLink, Heart, Star, Coffee } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      name: "Instagram",
      handle: "@by_alina_sh",
      url: "https://instagram.com/by_alina_sh",
      icon: Instagram,
      color: "sticker-pink",
      emoji: "📷",
    },
    {
      name: "Email",
      handle: "alinashulgouskaya@gmail.com",
      url: "mailto:alinashulgouskaya@gmail.com",
      icon: Mail,
      color: "sticker-yellow",
      emoji: "📧",
    },
    {
      name: "LinkedIn",
      handle: "Alina Shulhouskaya",
      url: "https://linkedin.com/in/alinashulhouskaya",
      icon: Linkedin,
      color: "sticker-mint",
      emoji: "💼",
    },
    {
      name: "Behance",
      handle: "/alinashulhouskaya",
      url: "https://behance.net/alinashulhouskaya",
      icon: ExternalLink,
      color: "sticker-purple",
      emoji: "🎨",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-primary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 sticker sticker-yellow float">
          <Coffee className="w-5 h-5" />
        </div>
        <div className="absolute bottom-32 right-16 sticker sticker-mint float-delay">
          <Heart className="w-5 h-5" />
        </div>
        <div className="absolute top-1/2 left-20 sticker sticker-purple float">
          <Star className="w-5 h-5" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-retro text-6xl md:text-7xl text-foreground mb-4">
            Let's Connect!
          </h2>
          <div className="inline-block relative">
            <p className="font-script text-3xl text-primary">
              Ready to create something amazing?
            </p>
            <div className="absolute -top-2 -right-4 sticker sticker-pink text-sm rotate-12">
              ✨
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : "_self"}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <div className="bg-white/90 rounded-3xl p-8 shadow-float backdrop-blur-sm hover-bounce transition-bounce relative overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className={`sticker ${link.color} mr-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-retro text-2xl text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="font-script text-muted-foreground group-hover:text-primary/80 transition-colors">
                      {link.handle}
                    </p>
                  </div>
                  <div className="text-3xl group-hover:animate-bounce">
                    {link.emoji}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                
                <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="sticker sticker-yellow text-xs">
                    Click me!
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Fun CTA Section */}
        <div className="text-center">
          <div className="bg-white/90 rounded-3xl p-8 shadow-float backdrop-blur-sm relative inline-block">
            <p className="font-script text-2xl text-foreground mb-4">
              Got a cool project in mind?
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Let's bring your ideas to life with some retro magic! ✨
            </p>
            
            <div className="flex justify-center gap-4">
              <button className="group bg-primary text-primary-foreground px-6 py-3 rounded-full font-retro hover-bounce shadow-sticker">
                <span>Start a Project</span>
                <div className="inline-block ml-2 group-hover:animate-bounce">
                  🚀
                </div>
              </button>
              
              <button className="group bg-accent text-accent-foreground px-6 py-3 rounded-full font-retro hover-bounce shadow-sticker">
                <span>Just Say Hi</span>
                <div className="inline-block ml-2 group-hover:animate-bounce">
                  👋
                </div>
              </button>
            </div>

            <div className="absolute -top-3 -left-3 sticker sticker-mint text-sm">
              Let's Chat!
            </div>
          </div>
        </div>

        {/* Footer Sticker */}
        <div className="mt-16 text-center">
          <div className="inline-block sticker sticker-purple hover-glow">
            <span className="font-script text-lg">Take your vitamins! 💊</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;