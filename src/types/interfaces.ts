export interface ISong {
  id: string;
  url: string;
  type: string;
  duration: string;
  image: string;
  user: IUser;
  likes: ILike[];
}

export interface IUser {
  id: string;
  name: string;
}

export interface ILike {
  id: string;
  user: IUser;
  song: ISong;
}
