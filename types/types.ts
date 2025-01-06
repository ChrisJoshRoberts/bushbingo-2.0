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

export interface AnimalCardProps {
  title: string;
  image: ImageSourcePropType;
  points: number;
  category: string;
  status: string;
  diet: string;
  lifespan: string;
}

export interface SectionTitleProps {
  title: string;
}