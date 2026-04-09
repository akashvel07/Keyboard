import React from 'react';

const products = [
  {
    id: 1,
    name: "QuikFINGERS Lethal-GK1",
    description: "Lethal Moves. Ruthless Wins.",
    specs: "Tri-mode: Type-C Wired + BT + 2.4GHz USB Receiver",
    price: "MRP ₹ 9999",
    image: "/products/gk1.png",
  },
  {
    id: 2,
    name: "Macho-MK1",
    description: "Dominate the Desk",
    specs: "Wired + Full-sized + Linear Switches",
    price: "MRP ₹ 5299",
    image: "/products/macho.png",
  },
  {
    id: 3,
    name: "Savage-MK2",
    description: "Hear the Click. Feel the Power.",
    specs: "Wired + 65% Compact Layout",
    price: "MRP ₹ 4999",
    image: "/products/savage.png",
  },
  {
    id: 4,
    name: "BT-Freedom",
    description: "Type - Anywhere, Anytime with Any Device",
    specs: "Wireless Bluetooth / Compact",
    price: "MRP ₹ 1199",
    image: "/products/bt_freedom.png",
  },
  {
    id: 5,
    name: "ButterClicks",
    description: "Irresistibly Smooth Experience!",
    specs: "Wired Keyboard / Slim",
    price: "MRP ₹ 899",
    image: "/products/bt_freedom.png", // Placeholder
  },
  {
    id: 6,
    name: "WonderClicks K9",
    description: "Feel the Wonder in every Click!",
    specs: "Wired Keyboard / RGB",
    price: "MRP ₹ 799",
    image: "/products/gk1.png", // Placeholder
  },
];

export default function ProductGrid() {
  return (
    <section className="product-section py-24 px-8 md:px-16" style={{ backgroundColor: "var(--product-bg)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white uppercase mb-2">Keyboards</h2>
          <nav className="text-sm text-white/60 font-medium">
            Home / Computer Peripherals / <span className="text-white">Keyboards</span>
          </nav>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              {/* Image Container */}
              <div 
                className="aspect-[4/3] w-full rounded-xs flex items-center justify-center overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: "var(--product-card-bg)" }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-[85%] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Info */}
              <div className="text-center text-white space-y-1">
                <h3 className="text-lg font-bold leading-tight">{product.name}</h3>
                <p className="text-sm text-white/80 font-medium">{product.description}</p>
                <div className="pt-1">
                  <p className="text-[12px] text-white/60 leading-normal uppercase tracking-wider">{product.specs}</p>
                  <p className="text-[13px] font-bold mt-1">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
