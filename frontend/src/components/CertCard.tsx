type CertCardProps = {
  title: string;
  year: string;
};

export default function CertCard({ title, year }: CertCardProps) {
  return (
    <div className="bg-[#1E293B] p-6 rounded-lg">
      <div className="text-sm text-gray-400 mb-2">{year}</div>

      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}
