import { ImageSourcePropType } from 'react-native';

export interface NavIconProps {
  title: string,
  image: ImageSourcePropType;
}

export interface CardButtonProps {
  title: string;
}

export interface GamesCardProps {
  title: string;
  status: string;
  image : string;
}

export interface ParkCardProps {
  title: string;
  image: string;
  location: string;
}