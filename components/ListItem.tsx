'use client';

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href,
}) => {
  const router = useRouter();

  const onClick = () => {
    // Add authentication logic here if needed
    router.push(href);
  };

  return (
    <Button
      onClick={onClick}
      className="group relative flex justify-between items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 pr-4 py-7"
    >
      {/* Image Section */}
      <div className="relative w-12 h-12">
        <Image
          className="object-cover"
          fill
          src={image}
          alt={`${name} image`}
        />
      </div>

      {/* Name Section */}
      <div className="flex-1">
        <p className="text-white text-base font-medium">{name}</p>
      </div>

      {/* Play Button */}
      <div className="opacity-0 transition-all duration-300 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </Button>
  );
};

export default ListItem;


