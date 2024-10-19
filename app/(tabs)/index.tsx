import { useRef, useState } from "react";
import { Animated, Easing, Pressable, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled.View`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function HomeScreen() {
  const [up, setUp] = useState(false);
  const POSITION = useRef(new Animated.ValueXY({ x: 0, y: 300 })).current;
  const toggleUp = () => setUp((prev) => !prev);

  const moveUp = () => {
    Animated.timing(POSITION, {
      toValue: up ? 300 : -300,
      useNativeDriver: false,
      duration: 3000,
      easing: Easing.cubic,
    }).start(toggleUp);
  };

  // const opacity = POSITION.interpolate({
  //   inputRange: [-300, -100, 100, 300],
  //   outputRange: [1, 0, 0, 1],
  // });

  const rotation = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["-360deg", "360deg"],
  });

  const borderRadius = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: [100, 0],
  });

  const bgColor = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["rgb(255, 99, 71)", "rgb(71, 166, 255)"],
  });

  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
          style={{
            borderRadius,
            backgroundColor: bgColor,
            // opacity,
            transform: [{ rotateY: rotation }, { translateY: POSITION.y }],
          }}
        />
      </Pressable>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
