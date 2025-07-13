import { Instagram, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-spice-brown text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Margarita's Kitchen</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Bringing authentic Chinese flavors and family traditions to your table, one jar at a time.
              </p>
            </div>
            {/* Empty center column for spacing */}
            <div></div>
            {/* Social (right) */}
            <div className="md:col-start-3 md:col-end-4 md:text-right">
              <h4 className="text-lg font-semibold mb-4">Follow Our Journey</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.instagram.com/marga.ritakitchen/" 
                  className="flex md:justify-end items-center gap-3 text-primary-foreground/80 hover:text-golden transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @marga.ritakitchen
                </a>
                <p className="text-sm text-primary-foreground/60 md:text-right">
                  Behind-the-scenes moments, recipe inspiration, and more!
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-chili-red fill-current" />
              </div>
              <div className="text-sm text-primary-foreground/60">
                © 2025 Margarita's Kitchen. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};