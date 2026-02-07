type ProductCardProps = {
  title: string;
  description: string;
};

export default function ProductCard({ title, description }: ProductCardProps) {
  return (
    <div className="bg-[#1E293B] p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-gray-300">{description}</p>

      <button className="mt-4 bg-green-500 px-4 py-2 rounded cursor-pointer">
        Get Best Price
      </button>
    </div>
  );
}
