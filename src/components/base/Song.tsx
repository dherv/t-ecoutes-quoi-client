import React, { FC } from 'react';
import { PlayIcon } from '@heroicons/react/solid';

export const Song: FC<{
  id: string;
  url: string;
  name: string;
  image: string;
  artist: string;
  likesCount: number;
  onClick: (id: string) => void;
}> = React.memo(({ id, url, name, artist, likesCount, image, onClick }) => {
  const handleClick = () => onClick(id);
  console.log("Song renders", {
    id,
    url,
    name,
    artist,
    likesCount,
    image,
    onClick,
  });
  return (
    <li
      className="p-4 border-white mb-1 bg-secondary shadow-md cursor-pointer hover:bg-opacity-80"
      onClick={handleClick}
    >
      <div className="flex items-start">
        <img
          className="w-32 max-h-32"
          src={image}
          alt={`thumbnail for song: ${name}`}
        />
        <div className="flex w-full justify-between items-start ml-4 ">
          <div>
            <h2 className="font-thin">{name}</h2>
            <small>{url}</small>
            <p>{`likes: ${likesCount}`}</p>
          </div>
          <div className="self-center h-10 w-10">
            <PlayIcon className=" h-10 w-10 text-gray-500 " />
          </div>
        </div>
      </div>
    </li>
  );
});
