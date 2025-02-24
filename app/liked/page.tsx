import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import LikedContent from "@/components/LikedContent";
import Skeleton from "@/components/Skeleton";
import Image from "next/image";
import React, { Suspense } from "react";

export const revalidate = 0;

const Liked = async () => {
  const songsPromise = getLikedSongs(); // Fetch songs as a promise

  return (
    <div className="text-white bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      {/* Use Skeleton as the fallback */}
      <Suspense fallback={<Skeleton />}>
        <Content songsPromise={songsPromise} />
      </Suspense>
      
    </div>
  );
};

export default Liked;

// Separate the content into a component to use with Suspense
const Content = async ({ songsPromise }: { songsPromise: Promise<any> }) => {
  const songs = await songsPromise;

  return (
    <>
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-20 w-20 mt-7">
              <Image
                fill
                src="/images/liked.png"
                className="object-cover"
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="text-gray-300 hidden md:block font-semibold text-base">
                Playlist
              </p>
              <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-7xl">
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </>
  );
};
