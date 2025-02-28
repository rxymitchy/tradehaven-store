
import React from 'react';

// Sample testimonial data
const testimonials = [
  {
    quote: "TradeHaven's selection of products is exceptional. The quality exceeds expectations, and their customer service is unmatched.",
    author: "Sarah Johnson",
    position: "Interior Designer",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    quote: "Shopping at TradeHaven has transformed my home. Their aesthetic and attention to detail is remarkable.",
    author: "Michael Chen",
    position: "Architect",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    quote: "I'm continually impressed by the curation of products. Every purchase feels special and thoughtfully designed.",
    author: "Emma Rodriguez",
    position: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=3"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">Testimonials</div>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background p-6 md:p-8 rounded-lg border border-border/40 hover:shadow-lg transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                </div>
                <div className="mt-auto flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
