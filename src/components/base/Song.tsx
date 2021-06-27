import { FC } from 'react';

export const Song: FC<{
  id: string;
  url: string;
  name: string;
  artist: string;
  likesCount: number;
  onClick: (id: string) => void;
}> = ({ id, url, name, artist, likesCount, onClick }) => {
  const handleClick = () => onClick(id);
  return (
    <li
      className="p-4 border-white mb-1 bg-secondary shadow-md cursor-pointer hover:bg-opacity-80"
      onClick={handleClick}
    >
      <p>
        <span>{name}</span> - <span>{artist}</span>
      </p>
      <small>{url}</small>
      <p>{`likes: ${likesCount}`}</p>
    </li>
  );
};
