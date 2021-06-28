export interface ISong {
  id: string;
  url: string;
  name: string;
  artist: string;
  type: string;
  duration: string;
  image: string;
  user: IUser;
  likes: ILike[];
}

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface ILike {
  id: string;
  user: IUser;
  song: ISong;
}
