import CertCard from "../../components/CertCard";

export default function Certifications() {
  return (
    <main className="px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Dealer Certificates & Awards
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <CertCard title="ISO 9001:2015 Certified" year="2024" />
        <CertCard title="Excellence Award" year="2024" />
        <CertCard title="Authorized Dealer Network" year="2024" />
        <CertCard title="BIS Certification" year="2024" />
        <CertCard title="Top Manufacturer Award" year="2023" />
        <CertCard title="15 Years of Excellence" year="2024" />
      </div>
    </main>
  );
}
