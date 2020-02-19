import React from 'react'
import { Button } from "react-native";
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { Menu } from '../Menu';

type RootStackParamList = {
  Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = (props: Props) => {
  const {navigate} = props.navigation;
  
  return (
    Object.keys(Menu).filter(menu => menu !== 'Home').map(menu => (
      <Button
        key={menu}
        title={`Go to ${menu}`}
        onPress={() => navigate(menu)}
      />
    ))
  );
}

export default HomeScreen