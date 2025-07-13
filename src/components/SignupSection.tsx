import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate signup
    setIsSubmitted(true);
    toast({
      title: "You're on the list! 🌶️",
      description: "We'll notify you as soon as our first batch is ready.",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-chili-red to-chili-red-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <Bell className="w-16 h-16 text-golden mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Be the first to know when our signature garlic chili sauce drops. 
              Plus, get exclusive recipes and cooking tips from Margarita's kitchen.
            </p>
          </div>
          
          {/* Signup form */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 py-4 text-lg rounded-full bg-primary-foreground border-0 focus:ring-2 focus:ring-golden"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-golden hover:bg-golden/90 text-spice-brown font-semibold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  Notify Me When It Drops! 🔥
                </Button>
              </form>
            ) : (
              <div className="bg-primary-foreground/20 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/30">
                <CheckCircle className="w-16 h-16 text-golden mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">Welcome to the family!</h3>
                <p className="text-primary-foreground/90">
                  You'll be the first to know when our chili sauce is ready to spice up your life.
                </p>
              </div>
            )}
          </div>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Early Access</h4>
              <p className="text-primary-foreground/80 text-sm">Be among the first 100 to taste our inaugural batch</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Exclusive Recipes</h4>
              <p className="text-primary-foreground/80 text-sm">Get Margarita's secret recipes and cooking tips</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Special Pricing</h4>
              <p className="text-primary-foreground/80 text-sm">Subscriber-only discounts on future releases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};