import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  AppRegistry,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
  Platform,
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "react-native-raw-bottom-sheet";
import Animated from "react-native-reanimated";
// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

class AddAnimalView extends Component {
  bs = React.createRef();
  fall = new Animated.View(1);

  constructor(props) {
    super(props);
    this.state = {
      date: "2016-05-15",
      modalState: false,
      image: "https://img.icons8.com/officel/2x/add-image.png",
    };
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri,
      });
    }
  };

  takekImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("aaaaa" + result.uri);

    if (!result.cancelled) {
      this.setState({
        image: result.uri,
      });
    }
  };

  manageSave = () => {
    console.log("modalstate : " + this.state.modalState);
    this.setState({
      image: "https://img.icons8.com/officel/2x/add-image.png",
    });
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

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
    var radio_props = [
      { label: " Male     ", value: 0 },
      { label: " Female ", value: 1 },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5 }}>
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
                flex: 1,
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
                My Animals
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: "pink",
              }}
            ></View>
          </View>

          <View
            style={{
              flex: 1,

              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "#689F38",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: "#0E6655",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Add Animal Details
              </Text>
            </View>
          </View>
        </View>
        {/* Modals are in this section */}

        <View>
          <Modal transparent={true} visible={this.state.modalState}>
            <View
              style={{
                backgroundColor: "#000000aa",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ffffff",
                  paddingVertical: 20,
                  borderTopColor: "black",
                  paddingHorizontal: 10,
                  borderRadius: 23,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalState: false });
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: 20,
                      width: 300,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#222222",
                        }}
                      >
                        Successfull !
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: "#d3d3d3",
                    borderBottomWidth: 1,
                    padding: 10,
                  }}
                ></View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      source={require("../../assets/momosuccess.gif")}
                      style={{ height: 150, width: 150 }}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#7F8C8D",
                      marginBottom: 10,
                    }}
                  >
                    Record added successfully !
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 15,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ modalState: false });
                    }}
                    style={{
                      ...styles.button,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 180,
                      height: 40,
                      borderRadius: 30,
                      backgroundColor: "#0E6655",
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      OK
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        {/* Modal section over */}

        <View style={{ flex: 7 }}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={(node) => (this.scroll = node)}
            style={{
              flex: 10,
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                flex: 1,
                marginTop: 10,
                width: screenwidth - 35,

                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                marginLeft: 15,
                marginBottom: 20,
                marginRight: 20,
              }}
            >















              
              <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 3, backgroundColor: "#fffffff" }}>
                  <View style={{ margin: 10, marginTop: 25 }}>
                    {/* adsada */}
                    <View style={styles.container}>
                      <BottomSheet
                        ref={this.bs}
                        snapPoints={[330, 0]}
                        initialSnap={1}
                        callbackNode={this.fall}
                        enabledGestureInteraction={true}
                        height={300}
                      >
                        <View style={styles.panel}>
                          <View style={{ alignItems: "center" }}>
                            <Text style={styles.panelTitle}>Upload Photo</Text>
                            <Text style={styles.panelSubtitle}>
                              Choose Animal Picture
                            </Text>
                          </View>
                          <TouchableOpacity
                            style={styles.panelButton}
                            onPress={this.takekImage}
                          >
                            <Text style={styles.panelButtonTitle}>
                              Take Photo
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.panelButton}
                            onPress={this.pickImage}
                          >
                            <Text style={styles.panelButtonTitle}>
                              Choose From Library
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.panelButton}
                            onPress={() => this.bs.current.close()}
                          >
                            <Text style={styles.panelButtonTitle}>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                      </BottomSheet>
                      <View style={{ alignItems: "center" }}>
                        <TouchableOpacity
                          onPress={() => this.bs.current.open()}
                        >
                          <View
                            style={{
                              height: 150,
                              width: 150,
                              borderRadius: 15,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <ImageBackground
                              // source={require("../../assets/add-image.png")}
                              source={{ uri: this.state.image }}
                              style={{ height: 150, width: 150 }}
                              imageStyle={{ borderRadius: 15 }}
                            >
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Icon
                                  name="camera"
                                  size={35}
                                  color="#fff"
                                  style={{
                                    opacity: 0.7,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: 1,
                                    borderColor: "#fff",
                                    borderRadius: 10,
                                  }}
                                />
                              </View>
                            </ImageBackground>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* sasssass */}
                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Animal Name
                      </Text>
                      <TextInput
                        onFocus={this.onFocus}
                        autoFocus={false}
                        placeholder="Animal Name"
                        style={styles.textInput}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Animal Code
                      </Text>
                      <TextInput
                        autoFocus={false}
                        placeholder="Animal Code"
                        style={styles.textInput}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>
                    <View>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Date
                      </Text>
                      <DatePicker
                        style={{ ...styles.textInput, width: 315 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateInput: {
                            borderColor: "white",
                            right: 90,
                          },
                        }}
                        onDateChange={(date) => {
                          this.setState({ date: date });
                        }}
                      />
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <RadioForm
                        style={{ color: "#0E6655", marginHorizontal: 20 }}
                        buttonColor={"#0E6655"}
                        radio_props={radio_props}
                        formHorizontal={true}
                        onPress={(value) => {
                          this.setState({ value: value });
                        }}
                        buttonWrapStyle={{ marginLeft: 10 }}
                        borderWidth={2}
                      />
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Breed
                      </Text>
                      <TextInput
                        onFocus={this.onFocus}
                        autoFocus={false}
                        placeholder="Breed"
                        style={styles.textInput}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Additional Information
                      </Text>
                      <TextInput
                        onFocus={this.onFocus}
                        autoFocus={false}
                        placeholder="286/7/11 Chilaw Rd"
                        style={styles.textArea}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={{ flex: 2, marginTop: 10 }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.scroll.scrollTo({ x: 400 });
                          }}
                        >
                          <View
                            style={{
                              ...styles.button,
                              backgroundColor: "#E74C3C",
                              borderWidth: 1,
                              borderColor: "white",
                              opacity: this.buttonOpacity,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              Reset
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 2, marginTop: 10 }}>
                        <TouchableOpacity onPress={this.manageSave}>
                          <View
                            style={{
                              ...styles.button,
                              backgroundColor: "#0E6655",
                              borderWidth: 1,
                              borderColor: "white",
                              opacity: this.buttonOpacity,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              Save
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default AddAnimalView;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#0E6655",
  },
  textArea: {
    height: 200,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#0E6655",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,

    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 22,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 7,
  },
  panelButton: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#0E6655",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },

  container: {
    flex: 1,
  },
});
