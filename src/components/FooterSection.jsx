import React from 'react';
import { Star, Instagram, Facebook } from 'lucide-react';

const Testimonial = ({ quote, name }) => (
  <div className="min-w-[260px] max-w-sm bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
    <div className="flex items-center gap-1 text-amber-500 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
    <p className="text-gray-700">“{quote}”</p>
    <div className="mt-3 text-sm text-gray-500">— {name}</div>
  </div>
);

export default function FooterSection() {
  const testimonials = [
    { quote: 'Incredibly fresh and authentic. My family loved the motichoor laddoos!', name: 'Aditi S.' },
    { quote: 'Fast delivery and beautiful packaging. Perfect for gifting.', name: 'Rahul K.' },
    { quote: 'Sugar-free kaju katli is a game changer. Tastes amazing!', name: 'Meera V.' },
  ];

  return (
    <footer className="bg-amber-50/50 border-t border-gray-100">
      {/* Our Story teaser */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1625944521294-fc4f0e7bf4b2?q=80&w=2062&auto=format&fit=crop"
            alt="Our kitchen"
            className="w-full h-64 md:h-80 object-cover rounded-2xl border border-gray-100"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">A Legacy of Purity</h3>
            <p className="text-gray-700 mt-3">
              Since 1980, we have followed time-honoured recipes and meticulous hygiene to craft mithai that brings people together. Every batch is prepared fresh with premium ingredients and pure ghee.
            </p>
            <a href="#story" className="inline-block mt-5 text-amber-700 font-medium hover:underline">Read Our Story</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <h3 className="text-xl md:text-2xl font-semibold">From Our Customers</h3>
        <div className="mt-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 pr-4">
            {testimonials.map((t, idx) => (
              <Testimonial key={idx} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <div className="bg-white border-t border-gray-100">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold">Get 10% Off Your First Order</h4>
              <p className="text-gray-600 mt-1">Join our family for exclusive offers and updates on new arrivals.</p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button type="submit" className="px-5 py-2.5 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-medium">Subscribe</button>
            </form>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-base font-semibold mb-3">Shop</div>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:underline">All Sweets</a></li>
                <li><a href="#" className="hover:underline">Bestsellers</a></li>
                <li><a href="#" className="hover:underline">New Arrivals</a></li>
                <li><a href="#" className="hover:underline">Gifting & Hampers</a></li>
              </ul>
            </div>
            <div>
              <div className="text-base font-semibold mb-3">Help</div>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <div className="text-base font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Our Process</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-base font-semibold mb-3">Connect</div>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4 text-gray-600">
                <div>Accepted: Visa, Mastercard, UPI</div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-500">
            © {new Date().getFullYear()} Mithai Mahal. All rights reserved.
          </div>
        </section>
      </div>
    </footer>
  );
}
