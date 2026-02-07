import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0F172A] text-white min-h-screen flex flex-col">
        <Navbar />

        {/* This grows and pushes footer down */}
        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
