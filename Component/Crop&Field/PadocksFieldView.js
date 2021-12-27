import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions,
  CheckBox,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class PadocksFieldView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      modalStateDelete: false,
    };
  }
  managetrash = () => {
    console.log("modalstate : " + this.state.modalState);

    if (this.state.modalState === true) {
      this.setState({
        modalState: false,
      });
    } else if (this.state.modalState === false) {
      this.setState({
        modalState: true,
      });
    }
  };

  managetrashdelete = () => {
    console.log("modalstate : " + this.state.modalState);

    this.setState({
      modalState: false,
      modalStateDelete: true,
    });
  };

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ height: " 100%", width: "100%" }}
      >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#0E6655",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "green",
                marginLeft: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
                style={{ marginTop: 30 }}
              >
                <FontAwesome5
                  name="bars"
                  size={24}
                  color="#000000"
                ></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 4,
                // backgroundColor: "purple",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  marginTop: 30,

                  fontWeight: "bold",
                }}
              >
                Land & Crop Management
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: "pink",
              }}
            ></View>
          </View>
        </View>

        <View style={{ flex: 9 }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex:4 }}>
             {/* category card start------------------------------------------------------------------------------------------------------------------- */}

             <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.0)",
                  marginTop: 60,
                  paddingVertical: 18,
                  paddingHorizontal: 20,
                  borderRadius: 23,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("NewFieldViewDrawer");
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      paddingVertical: 5,
                      borderTopColor: "black",
                      paddingHorizontal: 3,
                      borderRadius: 23,
                      width: 350,
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#0E6655",
                        paddingVertical: 30,
                        borderTopColor: "black",
                        paddingHorizontal: 30,
                        borderRadius: 23,
                        width: 340,
                        borderWidth: 1,
                        borderColor: "white",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            flex: 10,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 26,
                              color: "white",
                            }}
                          >
                             Add Field/ Paddock
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    position: "absolute",

                    alignItems: "center",
                    right: 30,
                    bottom: 90,
                  }}
                >
                  <Image
                    source={require("../../assets/catPaddy.png")}
                    style={{ height: 80, width: 80 }}
                  />
                </View>
              </View>

              {/* category card------------------------------------------------------------------------------------------------------------------- */}
              {/* comment */}

               {/* category card start------------------------------------------------------------------------------------------------------------------- */}

               <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.0)",
                  marginTop: 40,
                  paddingVertical: 18,
                  paddingHorizontal: 20,
                  borderRadius: 23,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("CroporFieldEventViewDrawer");
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      paddingVertical: 5,
                      borderTopColor: "black",
                      paddingHorizontal: 3,
                      borderRadius: 23,
                      width: 350,
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#0E6655",
                        paddingVertical: 30,
                        borderTopColor: "black",
                        paddingHorizontal: 30,
                        borderRadius: 23,
                        width: 340,
                        borderWidth: 1,
                        borderColor: "white",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            flex: 10,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 26,
                              color: "white",
                            }}
                          >
                             Add Crop / Field Event
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    position: "absolute",

                    alignItems: "center",
                    right: 20,
                    bottom: 80,
                  }}
                >
                  <Image
                    source={require("../../assets/catTask.png")}
                    style={{ height: 100, width: 100 }}
                  />
                </View>
              </View>

              {/* category card------------------------------------------------------------------------------------------------------------------- */}
              {/* comment */}

          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#689F38",
    backgroundColor: "#ffffff",
    marginTop: 15,
  },
});
