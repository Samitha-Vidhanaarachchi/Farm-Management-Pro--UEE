import React, { Component, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Error = () => {
  return (
    <View style={styles.centerView}>
      <Image
        source={require("../assets/error.gif")}
        style={{ height: 70, width: 70 }}
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

export default Error;
