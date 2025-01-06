import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import NavIcon from "./NavIcon";
import { LayoutDashboard, Eye, MessageCircleMore, UserRound } from "lucide-react-native";
import PlusButton from "./buttons/PlusButton";
import { NavBarProps } from "../types/types";
import { useEffect, useRef } from "react";


const NavBar = ({state, navigation, scrollY}: NavBarProps) => {
  const routes = state.routes;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the NavBar based on the scroll position
    Animated.timing(translateY, {
      toValue: scrollY > 50 ? 100 : 0, // Hide the NavBar after scrolling down 50px
      duration: 70,
      useNativeDriver: true,
    }).start();
  }, [scrollY]);


  return (
    <Animated.View style={[styles.navContainer, {transform: [{translateY}]}]}>
      {/* Render the first two routes */}
      {routes.slice(0, 2).map((route, index) => {
        const isFocused = state.index === index;
        const icon = route.name === "Home"
          ? <LayoutDashboard size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />
          : <Eye size={24} color={isFocused ? "#8BC652" : "#fff"} strokeWidth={isFocused ? 1.5 : 1} fill={isFocused ? "#8BC652" : "#003324"} stroke={isFocused ? "#003324" : "#fff"} />;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => {
              navigation.navigate(route.name);
            }}
          >
            <NavIcon title={route.name} image={icon} />
          </TouchableOpacity>
        );
      })}

      {/* Render the central PlusButton */}
      <PlusButton />

      {/* Render the last two routes */}
      {routes.slice(2).map((route, index) => {
        const isFocused = state.index === index + 2; // Adjust index for the slice
        const icon = route.name === "Messages"
          ? <MessageCircleMore size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />
          : <UserRound size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => {
              console.log(route.name);
              navigation.navigate(route.name);
            }}
          >
            <NavIcon title={route.name} image={icon} />
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navContainer: {
    paddingHorizontal: 8,
    position: "absolute",
    left: 10,
    bottom: 24,
    height: 70,
    backgroundColor: "#003324",
    alignItems: "center",
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
  },
});
