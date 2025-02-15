"use client";

import React, { useState, useEffect } from "react";
import { Song } from "@/types";
import SongItem from "./SongItem";
import PageContentSkeleton from "./PageContentSkeleton";
import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps {
  songs: Song[]  // Allow null for initial loading state
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const [isLoading, setIsLoading] = useState(true);

  const onPlay = useOnPlay(songs)
  useEffect(() => {
    if (songs !== null) {
      setIsLoading(false);
    }
  }, [songs]);

  
  if (isLoading) {
    return <PageContentSkeleton />;
  }

  if (songs && songs.length === 0) {
    return (
      <div className="mt-4 text-neutral-400 text-lg">
        Sorry, no songs available...
      </div>
    );
  }

  return (
    <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-8">
      {songs.map((item) => (
        <SongItem key={item.id} onClick={(id: string) => onPlay(id)} data={item} />
      ))}
    </div>
  );
};

export default PageContent;
