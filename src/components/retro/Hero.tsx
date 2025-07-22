import { Sparkles, Star, Zap, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 sticker sticker-pink float">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-40 right-20 sticker sticker-yellow float-delay">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-20 sticker sticker-mint float">
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute top-60 left-1/4 sticker sticker-purple float-delay">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-40 right-1/3 sticker sticker-pink float">
          <Star className="w-6 h-6" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        {/* Main Title */}
        <div className="relative mb-8">
          <h1 className="font-retro text-8xl md:text-9xl lg:text-[12rem] leading-none mb-4">
            <span className="text-foreground drop-shadow-lg">PORT</span>
            <span className="relative">
              <span className="text-foreground drop-shadow-lg">FOLi</span>
              <div className="absolute -top-4 -right-8 sticker sticker-pink rotate-12 text-2xl">
                ★
              </div>
            </span>
            <span className="text-foreground drop-shadow-lg">O</span>
          </h1>
          
          <div className="relative inline-block">
            <h2 className="font-script text-6xl md:text-7xl text-primary mb-8">
              2025
            </h2>
            <div className="absolute -top-2 -right-4 sticker sticker-yellow text-sm rotate-12">
              NEW!
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative bg-white/80 rounded-3xl p-8 shadow-float backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-script text-foreground leading-relaxed">
              Hi, I'm{" "}
              <span className="text-primary font-bold sparkle">Alina</span> — I
              bring funny characters and vintage charm to life!
            </p>
            <div className="absolute -bottom-3 -right-3 sticker sticker-mint text-sm">
              😊
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-full font-retro text-xl hover-bounce shadow-sticker transition-bounce">
            <span>View My Work</span>
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              ✨
            </div>
          </button>
          
          <button className="group relative bg-white/90 text-foreground px-8 py-4 rounded-full font-retro text-xl hover-bounce shadow-float transition-bounce border-2 border-primary/20">
            <span>Let's Chat!</span>
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              💬
            </div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="font-script text-sm text-muted-foreground mb-2">
              Scroll for more
            </span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;