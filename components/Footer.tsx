import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20 site-padding">
      <div className="w-full">
        {/* Large Display Brand Name */}
        <div className="mb-20 overflow-hidden">
          <h2 className="text-[12vw] font-bold tracking-tighter leading-none opacity-5 select-none pointer-events-none uppercase">
            Akxshv
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5A623] rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                  <path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 15h8" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight uppercase">Akxshv</span>
            </div>
            <p className="text-zinc-400 max-w-xs leading-relaxed">
              Engineering the next generation of sensory experiences. Precision, performance, and aesthetic excellence.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:border-[#F5A623] hover:text-[#F5A623] transition-all group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:border-[#F5A623] hover:text-[#F5A623] transition-all group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:border-[#F5A623] hover:text-[#F5A623] transition-all group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#F5A623]">Shop</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Mechanical Keyboards</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Custom Keycaps</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Switch Kits</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Desk Mats</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#F5A623]">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Software Downloads</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#F5A623]">Newsletter</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Join the collective. Get early access to drops and updates.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="email@example.com"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500 font-medium uppercase tracking-widest">
          <div className="flex gap-8">
            <p>© {currentYear} Akxshv Inc.</p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2">
            <span>Designed in Bangalore</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
