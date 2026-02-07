import StatCard from "../components/StatCard";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Premium Solar Solutions</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Harness the power of the sun with our advanced solar products —
          inverters, batteries, UPS systems and more, built for homes and
          businesses across India.
        </p>
        <Link href="/products">
          <button className="px-6 py-3 bg-green-500 rounded-lg font-semibold cursor-pointer">
            View Products
          </button>
        </Link>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-8 pb-12">
        <StatCard count="15+" label="Years Experience" />
        <StatCard count="5000+" label="Happy Customers" />
        <StatCard count="500+" label="Dealers Nationwide" />
        <StatCard count="50+" label="Product Range" />
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-8 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Explore Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard
            title="Solar Panels"
            description="High-efficiency photovoltaic panels"
          />
          <ProductCard
            title="Solar Inverters"
            description="Smart inverters for optimal energy conversion"
          />
          <ProductCard
            title="Lithium Batteries"
            description="Next-gen lithium storage for modern energy"
          />
        </div>
      </section>
    </main>
  );
}
