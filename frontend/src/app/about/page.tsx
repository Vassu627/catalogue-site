export default function About() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* HERO */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Powering a Greener Tomorrow
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          We deliver reliable and innovative solar energy solutions that help
          homes and businesses reduce electricity costs and embrace
          sustainability.
        </p>
      </div>

      {/* STORY SPLIT LAYOUT */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Story</h2>

          <p className="text-gray-300">
            Founded with a vision to make renewable energy accessible, our
            company has grown into a trusted provider of solar panels,
            inverters, batteries and complete power solutions across India.
          </p>

          <p className="text-gray-300">
            We combine technology, quality manufacturing and strong dealer
            partnerships to deliver dependable energy solutions.
          </p>
        </div>

        {/* Glass Card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-400">
            What We Stand For
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Clean & renewable energy</li>
            <li>✔ Long-lasting product quality</li>
            <li>✔ Strong after-sales support</li>
            <li>✔ Nationwide dealer network</li>
          </ul>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-10 mb-24">
        <div className="relative p-10 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-300">
            To accelerate the adoption of solar energy by delivering reliable,
            affordable and innovative power solutions.
          </p>
        </div>

        <div className="relative p-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-300">
            To become a leading clean energy brand that contributes to a
            sustainable and energy-secure future.
          </p>
        </div>
      </div>

      {/* STATS — MODERN STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          ["15+", "Years Experience"],
          ["5000+", "Installations"],
          ["500+", "Dealers"],
          ["25+", "Cities Served"],
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-3xl font-bold text-green-400">{item[0]}</h3>
            <p className="text-gray-300 mt-2">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
