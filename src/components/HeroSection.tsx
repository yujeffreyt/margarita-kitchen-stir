import { Button } from "@/components/ui/button";
import heroImage from "@/assets/chilioil.png";
import { ChefHat, Flame } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center 60%" // Moves image down
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-spice-brown/80 via-chili-red/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex justify-start items-center min-h-screen">
        <div className="max-w-3xl text-left">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 bg-warm-cream/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <ChefHat className="w-4 h-4 text-chili-red" />
            <span className="text-sm font-medium text-spice-brown">Small Batch • Big Flavor</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight text-left">
            Margarita's
            <span className="block text-golden">Kitchen</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up leading-relaxed text-left">
            Where authentic Chinese flavors meet 
            <span className="text-white font-semibold"> homemade passion</span>. 
            Introducing our signature chili garlic oil.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up text-left">
            <Button 
              size="lg" 
              className="bg-chili-red hover:bg-chili-red-dark text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-warm transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Flame className="w-5 h-5 mr-2" />
              Be the First to Taste It
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};