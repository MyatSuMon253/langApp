import { useEffect, useState } from "react";
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
  const [intervalId, setIntervalId] = useState<any>(null);

  const moveUp = () => {
    const id = setInterval(() => setY((prev) => prev + 1), 1);
    console.log(id)
    setIntervalId(id);
  };

  useEffect(() => {
    if (y >= 200) {
      clearInterval(intervalId);
    }
  }, [y, intervalId]);

  console.log("rendering");
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
