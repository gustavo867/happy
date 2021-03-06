import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  title: string;
  color?: string;
  absolute?: boolean;
  onPress?: ((pointerInside: boolean) => void) | undefined;
  disabled?: boolean;
}

const ButtonNext: React.FC<Props> = ({
  color = "#15c3d6",
  title,
  absolute = false,
  onPress,
  disabled = true,
}) => {
  return (
    <RectButton
      enabled={disabled}
      style={[
        !absolute ? styles.nextButton : styles.nextButtonAbsolute,
        {
          backgroundColor: disabled === false ? "#83DBE5" : color,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.nextButtonText}>{title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#3CDC8C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 22,
  },

  nextButtonAbsolute: {
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,

    position: "absolute",
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#FFF",
  },
});

export default ButtonNext;
