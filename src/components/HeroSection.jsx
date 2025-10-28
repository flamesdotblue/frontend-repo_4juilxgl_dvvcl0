import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Leaf } from 'lucide-react';

const ValueBar = () => (
  <div className="bg-white/80 backdrop-blur border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
      <div className="flex items-center gap-2"><Leaf className="w-5 h-5 text-amber-600" /><span>Freshly Made Daily</span></div>
      <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-amber-600" /><span>Pan-India Delivery</span></div>
      <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-600" /><span>Authentic Recipes</span></div>
      <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-600" /><span>Secure Payments</span></div>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-transparent to-white pointer-events-none" />
        <img
          src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2062&auto=format&fit=crop"
          alt="Authentic Indian sweets"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-xl bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-sm">
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                The Taste of Tradition. Delivered.
              </h1>
              <p className="mt-3 text-gray-700 md:text-lg">
                Handcrafted mithai made fresh every day—perfect for celebrations, gifting, and everyday indulgence.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#diwali" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-md">
                  Shop Diwali Collection <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#all" className="inline-flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-900 px-5 py-2.5 rounded-md">
                  Shop All Sweets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust / value bar */}
      <ValueBar />
    </section>
  );
}
