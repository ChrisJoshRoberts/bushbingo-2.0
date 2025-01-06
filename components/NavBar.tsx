import { StyleSheet, TouchableOpacity, View } from "react-native";
import NavIcon from "./NavIcon";
import { LayoutDashboard, Eye, MessageCircleMore, UserRound } from "lucide-react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import PlusButton from "./buttons/PlusButton";

const NavBar = (props: BottomTabBarProps) => {
  const routes = props.state.routes;

  return (
    <View style={styles.navContainer}>
      {/* Render the first two routes */}
      {routes.slice(0, 2).map((route, index) => {
        const isFocused = props.state.index === index;
        const icon = route.name === "Home"
          ? <LayoutDashboard size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />
          : <Eye size={24} color={isFocused ? "#8BC652" : "#fff"} strokeWidth={isFocused ? 1.5 : 1} fill={isFocused ? "#8BC652" : "#003324"} stroke={isFocused ? "#003324" : "#fff"} />;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => {
              props.navigation.navigate(route.name);
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
        const isFocused = props.state.index === index + 2; // Adjust index for the slice
        const icon = route.name === "Messages"
          ? <MessageCircleMore size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />
          : <UserRound size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => {
              console.log(route.name);
              props.navigation.navigate(route.name);
            }}
          >
            <NavIcon title={route.name} image={icon} />
          </TouchableOpacity>
        );
      })}
    </View>
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
