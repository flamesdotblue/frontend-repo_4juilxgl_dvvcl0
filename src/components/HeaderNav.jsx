import React from 'react';
import { Search, User, Heart, ShoppingCart, Menu } from 'lucide-react';

const TopUtilityBar = () => (
  <div className="w-full bg-amber-50 text-amber-900 text-xs sm:text-sm">
    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a href="#track" className="hover:underline">Track Your Order</a>
        <span className="hidden sm:inline">|</span>
        <a href="#stores" className="hover:underline hidden sm:inline">Find a Store</a>
      </div>
      <a href="#help" className="hover:underline">Need Help?</a>
    </div>
  </div>
);

const MainHeader = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50"
            aria-label="Open Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <a href="#" className="text-2xl font-semibold tracking-tight">
            <span className="text-amber-600">Mithai</span> Mahal
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#shop" className="hover:text-amber-700">Shop</a>
            <a href="#gifting" className="hover:text-amber-700">Gifting</a>
            <a href="#about" className="hover:text-amber-700">About Us</a>
            <a href="#contact" className="hover:text-amber-700">Contact</a>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 hidden sm:inline-flex" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-2">
            <a href="#shop" className="py-2">Shop</a>
            <a href="#gifting" className="py-2">Gifting</a>
            <a href="#about" className="py-2">About Us</a>
            <a href="#contact" className="py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default function HeaderNav() {
  return (
    <div className="w-full">
      <TopUtilityBar />
      <MainHeader />
    </div>
  );
}
