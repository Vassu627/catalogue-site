import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-[#020617]">
      <h1 className="text-xl font-bold text-green-400">Green Power</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
