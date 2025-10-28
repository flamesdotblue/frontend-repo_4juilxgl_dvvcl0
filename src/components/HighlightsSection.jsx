import React from 'react';
import { Star } from 'lucide-react';

const categories = [
  { title: 'Classic Ladoos', img: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec4e?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Rich Barfis', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Kaju Delights', img: 'https://images.unsplash.com/photo-1604908813540-8e92a2a691e9?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Festive Hampers', img: 'https://images.unsplash.com/photo-1603816711301-6babd2a9c9b2?q=80&w=1400&auto=format&fit=crop' },
];

const bestsellers = [
  { name: 'Motichoor Ladoo', price: '₹449', img: 'https://images.unsplash.com/photo-1631515243208-3f3c739f6345?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Kaju Katli', price: '₹699', img: 'https://images.unsplash.com/photo-1625944529468-17e1921f25b6?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Rasgulla', price: '₹349', img: 'https://images.unsplash.com/photo-1643066328746-48f2ed1a6ed6?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Besan Barfi', price: '₹399', img: 'https://images.unsplash.com/photo-1625944519361-7438f0099b55?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Gulab Jamun', price: '₹399', img: 'https://images.unsplash.com/photo-1604908554490-5a7353e60cac?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Peda', price: '₹379', img: 'https://images.unsplash.com/photo-1625944524016-3528639872e1?q=80&w=1400&auto=format&fit=crop' },
];

const CategoryCard = ({ title, img }) => (
  <a href="#" className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-100">
    <img src={img} alt={title} className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
    <div className="absolute bottom-3 left-3 text-white font-medium">{title}</div>
  </a>
);

const ProductCard = ({ name, price, img }) => (
  <div className="min-w-[200px] max-w-[220px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
    <img src={img} alt={name} className="w-full h-40 object-cover" />
    <div className="p-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium truncate" title={name}>{name}</h4>
        <div className="flex items-center gap-0.5 text-amber-500 text-xs">
          <Star className="w-4 h-4 fill-current" />
          <span>4.8</span>
        </div>
      </div>
      <div className="mt-1 text-amber-700 font-semibold">{price}</div>
      <button className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white text-sm py-2 rounded-md">Add to Cart</button>
    </div>
  </div>
);

export default function HighlightsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Shop by Category */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Browse Our Collection</h2>
          <p className="text-gray-600 mt-1">Find your favorites by type, occasion, or indulgence.</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </div>

        {/* Bestsellers */}
        <div className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Our Bestsellers</h3>
              <p className="text-gray-600 mt-1">Loved by thousands of sweet lovers across India.</p>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto no-scrollbar">
            <div className="flex gap-4 pr-4">
              {bestsellers.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* Featured collection banner */}
        <div className="mt-12 relative rounded-2xl overflow-hidden border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1604908177067-5b636b1b4b0c?q=80&w=2062&auto=format&fit=crop"
            alt="Sugar-free collection"
            className="w-full h-56 md:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Pure Indulgence, Guilt-Free</h3>
              <p className="text-white/90 mt-1 max-w-xl">Discover our sugar-free mithai made with premium ingredients without compromising on taste.</p>
              <a href="#sugarfree" className="inline-block mt-4 bg-white text-amber-700 font-medium px-4 py-2 rounded-md hover:bg-amber-50">Shop Sugar-Free</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
