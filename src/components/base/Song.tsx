import { FC } from 'react';

export const Song: FC<{
  id: string;
  url: string;
  name: string;
  image: string;
  artist: string;
  likesCount: number;
  onClick: (id: string) => void;
}> = ({ id, url, name, artist, likesCount, image, onClick }) => {
  const handleClick = () => onClick(id);
  return (
    <li
      className="p-4 border-white mb-1 bg-secondary shadow-md cursor-pointer hover:bg-opacity-80"
      onClick={handleClick}
    >
      <div className="flex items-start">
        <img className="w-32" src={image} alt={`thumbnail for song: ${name}`} />
        <div className="ml-4 ">
          <h2 className="font-thin">{name}</h2>
          <small>{url}</small>
          <p>{`likes: ${likesCount}`}</p>
        </div>
      </div>
    </li>
  );
};
