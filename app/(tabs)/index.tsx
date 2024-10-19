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
  const Y_POSITION = useRef(new Animated.Value(0)).current;
  const toggleUp = () => setUp((prev) => !prev);

  const moveUp = () => {
    Animated.timing(Y_POSITION, {
      toValue: up ? 300 : -300,
      useNativeDriver: true,
      duration: 500,
      easing: Easing.cubic,
    }).start(toggleUp);
  };

  const opacity = Y_POSITION.interpolate({
    inputRange: [-300,-100, 100, 300],
    outputRange: [1, 0, 0, 1],
  });

  console.log(opacity);
  Y_POSITION.addListener(() => {
    console.log("Animated State: ", Y_POSITION);
  });
  console.log("Component State: ", Y_POSITION);

  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
          style={{
            opacity,
            transform: [{ translateY: Y_POSITION }],
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
