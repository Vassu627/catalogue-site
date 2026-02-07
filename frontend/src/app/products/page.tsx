export default function Products() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Product Catalogue
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our range of high-quality solar and power solutions designed
          for homes, businesses and industrial needs.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div
            key={i}
            className="group backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300"
          >
            {/* ICON CIRCLE */}
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-linear-to-r from-green-400 to-blue-500 text-black font-bold text-xl">
              ⚡
            </div>

            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

            <p className="text-gray-300 mb-4">{p.desc}</p>

            <button className="text-green-400 group-hover:text-green-300 cursor-pointer">
              Request Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const products = [
  {
    title: "Solar Panels",
    desc: "High-efficiency mono & poly panels with strong durability and long-term performance.",
  },
  {
    title: "Solar Inverters",
    desc: "On-grid, off-grid and hybrid inverters with smart monitoring features.",
  },
  {
    title: "Lithium Batteries",
    desc: "Advanced LiFePO4 batteries with long lifecycle and fast charging.",
  },
  {
    title: "UPS Systems",
    desc: "Reliable power backup systems for homes, offices and industries.",
  },
  {
    title: "Tubular Batteries",
    desc: "Deep-cycle batteries ideal for consistent backup power.",
  },
  {
    title: "Solar Street Lights",
    desc: "Energy-efficient lighting solutions for outdoor and public spaces.",
  },
];
