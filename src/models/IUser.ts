export interface IUser {
    _id: string;
    username: string;
    email: string;
    profilePicture: string | null;
    followers: string[];
    followings: string[];
    city: string | null;
    desciption: string | null;
  }
  