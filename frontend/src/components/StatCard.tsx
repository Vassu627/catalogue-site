type StatCardProps = {
  count: string;
  label: string;
};

export default function StatCard({ count, label }: StatCardProps) {
  return (
    <div className="bg-[#1E293B] p-6 rounded-lg text-center">
      <h3 className="text-3xl font-bold text-green-400">{count}</h3>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}
