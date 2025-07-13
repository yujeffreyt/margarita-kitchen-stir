import { Heart, Users, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-6">
              Meet Margarita
            </h2>
            <div className="w-24 h-1 bg-chili-red mx-auto rounded-full"></div>
          </div>
          
          {/* Story content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-spice-brown/80 leading-relaxed">
                Growing up in my grandmother's kitchen in Sichuan, I learned that the secret to unforgettable food isn't just in the recipe—it's in the love you pour into every jar.
              </p>
              
              <p className="text-lg text-spice-brown/80 leading-relaxed">
                After years of perfecting my grandmother's traditional chili sauce recipe, I'm finally ready to share this piece of my heritage with you. Each batch is handcrafted in small quantities, using only the finest garlic and carefully selected chilies.
              </p>
              
              <blockquote className="border-l-4 border-chili-red pl-6 py-4 bg-golden-light rounded-r-lg">
                <p className="text-lg font-medium text-spice-brown italic">
                  "Food is how we show love, preserve memories, and build community. This sauce carries three generations of tradition."
                </p>
                <footer className="text-sm text-spice-brown/70 mt-2">— Margarita Chen</footer>
              </blockquote>
            </div>
            
            {/* Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-chili-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-spice-brown mb-2">Made with Love</h3>
                  <p className="text-spice-brown/70">Every jar is handcrafted in small batches using time-honored techniques passed down through generations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-spice-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-spice-brown mb-2">Family Recipe</h3>
                  <p className="text-spice-brown/70">A treasured family recipe from Sichuan province, adapted for modern kitchens while preserving authentic flavors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-spice-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-spice-brown mb-2">Premium Quality</h3>
                  <p className="text-spice-brown/70">Only the finest ingredients make it into our sauce—no shortcuts, no compromises, just pure flavor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};