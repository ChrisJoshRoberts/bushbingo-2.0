import { ImageSourcePropType } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export interface NavIconProps {
  title: string,
  image: JSX.Element;
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

export interface NavBarProps {
    scrollY: number;
    navigation: BottomTabBarProps["navigation"];
    state: BottomTabBarProps["state"];
}