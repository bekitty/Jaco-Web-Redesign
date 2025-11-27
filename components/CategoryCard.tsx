import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-2">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-jaco-card border border-white/5 shadow-lg group-hover:shadow-jaco-primary/20 transition-all duration-300 group-hover:-translate-y-1">
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      <div>
        <h3 className="font-bold text-white text-sm group-hover:text-jaco-primary truncate transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-jaco-muted flex items-center gap-1">
          {new Intl.NumberFormat('en-US', { notation: "compact" }).format(category.totalViewers)} viewers
        </p>
        <div className="flex gap-1 mt-1">
          {category.tags.slice(0, 1).map(tag => (
             <span key={tag} className="text-[10px] bg-jaco-card text-jaco-muted px-1.5 py-0.5 rounded-full">
             {tag}
           </span>
          ))}
        </div>
      </div>
    </div>
  );
};