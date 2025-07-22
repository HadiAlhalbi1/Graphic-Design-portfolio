import { MapPin, Coffee, Palette, Smile } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-retro text-6xl md:text-7xl text-foreground mb-4">
            Hello!
          </h2>
          <div className="inline-block relative">
            <p className="font-script text-3xl text-primary">
              My name is Alina
            </p>
            <div className="absolute -top-2 -right-4 sticker sticker-yellow text-sm rotate-12">
              ⚡
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="relative bg-white p-4 rounded-lg shadow-float transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src="/img/profile_pic.jpg"
                alt="Alina Shulhouskaya"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-lg font-script text-sm transform -rotate-12">
                That's me! 📸
              </div>
            </div>
            
            {/* Decorative stickers around photo */}
            <div className="absolute -top-4 -left-4 sticker sticker-pink float">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-6 left-8 sticker sticker-mint float-delay">
              <Palette className="w-5 h-5" />
            </div>
            <div className="absolute top-12 -right-6 sticker sticker-purple float">
              <Smile className="w-5 h-5" />
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-white/90 rounded-3xl p-8 shadow-float backdrop-blur-sm relative">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I'm an <span className="text-primary font-bold">illustrator and graphic designer</span> with a 
                passion for creating whimsical funny characters. Drawing inspiration from the 
                vibrant and nostalgic era of the 70's & 80's, my artwork reflects a delightful 
                blend of <span className="text-accent font-semibold">humor and creativity</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mb-6">
                With a strong foundation in both traditional and digital mediums, I excel in 
                creating <span className="text-warning font-semibold">vibrant and engaging visuals</span> that 
                capture the essence of bygone eras.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="font-script">Based somewhere awesome</span>
              </div>

              <div className="absolute -top-3 -right-3 sticker sticker-yellow text-xs">
                Good Vibes
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-6 text-center hover-bounce">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-script text-sm">
                  alinashulgouskaya@gmail.com
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-6 text-center hover-bounce">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-script text-sm">
                  @by_alina_sh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;