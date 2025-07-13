import { Heart, Users, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-6">
              About Margarita's Kitchen
            </h2>
            <div className="w-24 h-1 bg-chili-red mx-auto rounded-full"></div>
          </div>
          
          {/* Story content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-spice-brown/80 leading-relaxed">
                What started as a personal craving turned into an obsession, crafting the perfect balance of heat, savoriness, and deep umami.
              </p>
              
              <p className="text-lg text-spice-brown/80 leading-relaxed">
                After countless test batches and late-night kitchen experiments, this is the result—a chili oil that's punchy, rich, and packed with flavor. Handmade in small batches, each jar is a labor of love, using only the finest garlic and carefully selected chilies. It is not tradition—it is craft.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-chili-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-spice-brown mb-2">Made with Love</h3>
                  <p className="text-spice-brown/70">Every jar is handcrafted in small batches using high-quality ingredients.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-spice-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-spice-brown mb-2">Recipe Crafted</h3>
                  <p className="text-spice-brown/70">A treasured recipe from Zamboanga City, adapted for modern kitchens while preserving authentic flavors.</p>
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