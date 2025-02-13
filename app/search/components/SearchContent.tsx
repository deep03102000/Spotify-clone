"use client";

import React, { useState, useEffect } from "react";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import SearchContentSkeleton from "@/components/SearchContentSkeleton";
import useOnPlay from "@/hooks/useOnPlay";


interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onPlay = useOnPlay(songs)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulates a loading delay for better UX

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SearchContentSkeleton />;
  }

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-5 text-neutral-500">
        No songs found!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-start gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string)=> onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
