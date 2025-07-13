import { Flame, Utensils, Sparkles, Star } from "lucide-react";

export const ProductSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-6">
              The <span className="text-chili-red">Sauce</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our signature Chinese garlic chili sauce—where fire meets flavor in perfect harmony
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product description */}
            <div>
              <h3 className="text-3xl font-bold text-spice-brown mb-6">
                Handcrafted Chinese Garlic Chili Sauce
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This isn't just another hot sauce. It's a carefully balanced symphony of roasted garlic, premium chilies, and aromatic spices that transforms every meal into an extraordinary experience.
              </p>
              
              {/* Flavor profile */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-chili-red" />
                  <span className="text-spice-brown font-medium">Perfect heat level—warming, not overwhelming</span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-golden" />
                  <span className="text-spice-brown font-medium">Rich umami depth from fermented black beans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                  <span className="text-spice-brown font-medium">Fresh garlic bite that lingers pleasantly</span>
                </div>
              </div>
              
              {/* Uses */}
              <div className="bg-golden-light p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-spice-brown mb-4">Perfect for:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-spice-brown/80">
                  <div>• Stir-fries & noodles</div>
                  <div>• Dumplings & dim sum</div>
                  <div>• Grilled meats</div>
                  <div>• Eggs & rice bowls</div>
                  <div>• Pizza & pasta</div>
                  <div>• Marinades & dips</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial/Quote */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium text-spice-brown mb-4 leading-relaxed">
                  "I've been searching for an authentic Chinese chili sauce like this for years. The balance of heat, garlic, and umami is absolutely perfect. It's become a staple in my kitchen!"
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — Jeffrey Y., Food Blogger
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};