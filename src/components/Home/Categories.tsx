
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  name: string;
  image: string;
  count: number;
}

// Sample category data
const categories: CategoryProps[] = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1253&q=80',
    count: 32
  },
  {
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    count: 45
  },
  {
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1615800002234-05c4d488696c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    count: 27
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584185977687-d768a9af41f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1316&q=80',
    count: 18
  }
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">Explore</div>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link to={`/categories/${category.name.toLowerCase()}`} key={category.name} className="group animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="overflow-hidden rounded-lg border border-border/40 bg-background hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-display text-lg md:text-xl font-medium">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.count} products</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
