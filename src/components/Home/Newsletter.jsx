
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl bg-primary text-primary-foreground">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_30%)]"></div>
          
          <div className="relative py-12 md:py-20 px-6 md:px-12 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-md mx-auto">
                Subscribe to get special offers, exclusive discounts, and updates on our newest products.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit"
                  className="h-12 px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full btn-hover-effect"
                >
                  Subscribe
                </Button>
              </form>
              
              <p className="text-xs text-primary-foreground/70 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
