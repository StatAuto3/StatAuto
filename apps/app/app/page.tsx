import { apiPath } from "@/config/api.path";
import { Stables } from "@/types/stables.type";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image"
import NextLink from "next/link"

export default async function Home() {
  let data = await fetch(apiPath + 'stables?query=0');
  let { stables } = await data.json() as {stables: Array<Stables>};

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-6 sm:grid-cols-4">
      {stables.map((stable, idx) => (
        <Card isFooterBlurred className="border-none" radius="lg" key={idx + stable.id}>
          <Image
              alt={stable.name}
              className="object-cover"
              height={200}
              src="https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-06.jpg"
              width={200}
          />
            <CardFooter
              className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
              as={NextLink}
              href={`/stable/${stable.id}`}
            >
              <p className="text-tiny text-white/80">{stable.name}</p>
            </CardFooter>
          </Card>
      ))}
    </div>
  );
}
