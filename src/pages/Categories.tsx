
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

interface CategoryProps {
  name: string;
  image: string;
  count: number;
  description: string;
}

// Extended category data
const categories: CategoryProps[] = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1253&q=80',
    count: 32,
    description: 'Cutting-edge technology and premium audio-visual equipment for the discerning tech enthusiast.'
  },
  {
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    count: 45,
    description: 'Timeless apparel crafted with premium fabrics and minimalist design principles.'
  },
  {
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1615800002234-05c4d488696c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    count: 27,
    description: 'Elevate your living space with our curated collection of minimalist home accessories.'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584185977687-d768a9af41f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1316&q=80',
    count: 18,
    description: 'Meticulously crafted accessories that add the perfect finishing touch to any look.'
  },
  {
    name: 'Furniture',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    count: 15,
    description: 'Thoughtfully designed furniture that balances form and function for modern living.'
  },
  {
    name: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745adc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    count: 23,
    description: 'Premium culinary tools and artisanal kitchenware for the home chef and design enthusiast.'
  },
  {
    name: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    count: 14,
    description: 'Sculptural lighting solutions that serve as both functional elements and artistic statements.'
  },
  {
    name: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80',
    count: 20,
    description: 'Thoughtfully sourced wellness products that nurture mind, body, and spirit.'
  }
];

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">Collections</div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">Shop by Category</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections designed with meticulous attention to detail and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                to={`/categories/${category.name.toLowerCase()}`} 
                key={category.name} 
                className="group animate-slide-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-lg border border-border/40 bg-background hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative aspect-[16/9]">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="font-display text-lg md:text-xl font-medium mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{category.count} products</span>
                        <span className="text-xs font-medium group-hover:underline">Shop Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
