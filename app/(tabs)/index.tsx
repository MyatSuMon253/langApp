import { useState } from "react";
import { StyleSheet } from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled.TouchableOpacity`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

export default function HomeScreen() {
  const [y, setY] = useState(0);
  const moveUp = () => setInterval(() => setY((prev) => prev + 1), 500);

  return (
    <Container>
      <Box
        onPress={moveUp}
        style={{
          transform: [{ translateY: y }],
        }}
      />
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
