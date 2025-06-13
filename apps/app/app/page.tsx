import { Card } from "@heroui/card";

const squares = Array.from({ length: 24 });

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-6 sm:grid-cols-4">
      {squares.map((_, idx) => (
        <Card
          key={idx}
          className="bg-blue-500 aspect-square flex items-center justify-center text-white text-xl font-bold rounded shadow"
        >
          {idx + 1}
        </Card>
      ))}
    </div>
  );
}
