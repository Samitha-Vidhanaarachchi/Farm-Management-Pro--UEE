import React, { Component, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Success = () => {
  return (
    <View style={styles.centerView}>
      <Image
        source={require("../assets/a.gif")}
        style={{ height: 80, width: 80 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default Success;
