import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,Picker,
} from "native-base";

import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export default class CroporFieldEventView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      modalStateDelete: false,
      sortmodal: false,
      textValBreed: "ASC",
      textValCode: "ASC",
      textValGender: "ASC",
      textValAge: "ASC",
      modalStateView: false,

      checked: false,
      checked2: false,
      checkedBreed: false,
      checkedCode: false,
      checkedGender: false,
      checkedAge: false,

      colorBreed: "#CCD1D1",
      colorCode: "#CCD1D1",
      colorGender: "#CCD1D1",
      colorAge: "#CCD1D1",
    };
  }
  manageCheckbox = () => {
    if (this.state.checked === true) {
      this.setState({
        checked: false,
      });
    } else if (this.state.checked === false) {
      this.setState({
        checked: true,
      });
    }
  };

  manageCheckbox2 = () => {
    if (this.state.checked2 === true) {
      this.setState({
        checked2: false,
      });
    } else if (this.state.checked2 === false) {
      this.setState({
        checked2: true,
      });
    }
  };

  manageCheckboxBreed = () => {
    if (this.state.checkedBreed === true) {
      this.setState({
        checkedBreed: false,
        colorBreed: "#CCD1D1",
      });
    } else if (this.state.checkedBreed === false) {
      this.setState({
        checkedBreed: true,
        colorBreed: "#689F38",
      });
    }
  };

  manageCheckboxCode = () => {
    if (this.state.checkedCode === true) {
      this.setState({
        checkedCode: false,
        colorCode: "#CCD1D1",
      });
    } else if (this.state.checkedCode === false) {
      this.setState({
        checkedCode: true,
        colorCode: "#689F38",
      });
    }
  };

  manageCheckboxGender = () => {
    if (this.state.checkedGender === true) {
      this.setState({
        checkedGender: false,
        colorGender: "#CCD1D1",
      });
    } else if (this.state.checkedGender === false) {
      this.setState({
        checkedGender: true,
        colorGender: "#689F38",
      });
    }
  };

  manageCheckboxAge = () => {
    if (this.state.checkedAge === true) {
      this.setState({
        checkedAge: false,
        colorAge: "#CCD1D1",
      });
    } else if (this.state.checkedAge === false) {
      this.setState({
        checkedAge: true,
        colorAge: "#689F38",
      });
    }
  };

  managetrash = () => {
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

  managesort = () => {
    this.setState({
      textValBreed: "ASC",
      textValCode: "ASC",
      textValGender: "ASC",
      textValAge: "ASC",
      checked: false,
      checked2: false,
      checkedBreed: false,
      checkedCode: false,
      checkedGender: false,
      checkedAge: false,

      colorBreed: "#CCD1D1",
      colorCode: "#CCD1D1",
      colorGender: "#CCD1D1",
      colorAge: "#CCD1D1",
    });
    if (this.state.sortmodal === true) {
      this.setState({
        sortmodal: false,
      });
    } else if (this.state.sortmodal === false) {
      this.setState({
        sortmodal: true,
      });
    }
  };

  managetrashdelete = () => {
    this.setState({
      modalState: false,
      modalStateDelete: true,
    });
  };

  sortMethodBreed = () => {
    if (this.state.textValBreed === "ASC") {
      this.setState({
        textValBreed: "DESC",
        checkedBreed: true,
        colorBreed: "#689F38",
      });
    } else if (this.state.textValBreed === "DESC") {
      this.setState({
        textValBreed: "ASC",
        checkedBreed: true,
        colorBreed: "#689F38",
      });
    }
  };

  sortMethodCode = () => {
    if (this.state.textValCode === "ASC") {
      this.setState({
        textValCode: "DESC",
        checkedCode: true,
        colorCode: "#689F38",
      });
    } else if (this.state.textValCode === "DESC") {
      this.setState({
        textValCode: "ASC",
        checkedCode: true,
        colorCode: "#689F38",
      });
    }
  };

  sortMethodGender = () => {
    if (this.state.textValGender === "ASC") {
      this.setState({
        textValGender: "DESC",
        checkedGender: true,
        colorGender: "#689F38",
      });
    } else if (this.state.textValGender === "DESC") {
      this.setState({
        textValGender: "ASC",
        checkedGender: true,
        colorGender: "#689F38",
      });
    }
  };

  sortMethodAge = () => {
    if (this.state.textValAge === "ASC") {
      this.setState({
        textValAge: "DESC",
        checkedAge: true,
        colorAge: "#689F38",
      });
    } else if (this.state.textValAge === "DESC") {
      this.setState({
        textValAge: "ASC",
        checkedAge: true,
        colorAge: "#689F38",
      });
    }
  };

  manageView = () => {
    if (this.state.modalStateView === true) {
      this.setState({
        modalStateView: false,
      });
    } else if (this.state.modalStateView === false) {
      this.setState({
        modalStateView: true,
      });
    }
  };

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;

    return (
      // <ImageBackground
      //   source={require("../../assets/background.png")}
      //   style={{ height: " 100%", width: "100%" }}
      // >
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
                flex: 7,
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
                Land & Crop Manager
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
              // backgroundColor: "#689F38",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 3,
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
                Crop Event Details
              </Text>
            </View>

            <View
              style={{
                flex: 1.5,
                // backgroundColor: "#689F38",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  borderRadius: 30,
                }}
              >
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => {
                    this.props.navigation.navigate("AddCropEventDrawer");
                  }}
                >
                  <View style={{ paddingRight: 10 }}>
                    <Image
                      source={require("../../assets/add.png")}
                      style={{ height: 30, width: 10, paddingRight: 30 }}
                    />
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: "#CDDC39",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <TextInput
                onFocus={this.onFocus}
                autoFocus={false}
                placeholder="Search by Field Name"
                style={styles.textInput}
                placeholderTextColor="#9E9E9E"
              />
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  top: 15,
                  left: 242,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("SearchCropEventDrawer");
                  }}
                >
                  <View
                    style={{
                      width: 150,
                      backgroundColor: "#0E6655",
                      height: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 30,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Search
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: "#CDDC39",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 3,
                // backgroundColor: "#CDDC39",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 16 }}>Items Selected</Text>
              </View>
              <View style={{ marginLeft: 5 }}>
                <CheckBox
                  checked={this.state.checked}
                  onPress={this.manageCheckbox}
                  color="#0E6655"
                ></CheckBox>
              </View>
              <View style={{ marginLeft: 5 }}>
                <CheckBox
                  checked={this.state.checked2}
                  onPress={this.manageCheckbox2}
                  color="#0E6655"
                ></CheckBox>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: "#CDDC39",
                flexDirection: "row",
                marginHorizontal: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#689F38",
                  flex: 1,
                  marginVertical: 8,
                  borderRadius: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    marginHorizontal: 10,
                    borderRadius: 10,
                    borderColor: "red",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Send
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "#689F38",
                  flex: 1,
                  marginVertical: 8,
                  borderRadius: 10,
                  justifyContent: "center",
                  marginLeft: 5,
                  marginRight: 10,
                }}
              >
                <TouchableOpacity
                  onPress={this.managesort}
                  style={{
                    marginHorizontal: 10,
                    borderRadius: 20,
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                      Sort
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
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
                    this.setState({ modalStateDelete: false });
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
                        Are you sure ?
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
                      source={require("../../assets/momowarning.png")}
                      style={{ height: 150, width: 150 }}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#7F8C8D",
                      marginBottom: 10,
                    }}
                  >
                    Are you sure to delete your record ?
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 15,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
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
                      width: 120,
                      height: 40,
                      borderRadius: 30,
                      backgroundColor: "#E74C3C",
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
                      NO
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={this.managetrashdelete}
                    style={{
                      ...styles.button,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 120,
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
                      YES
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal transparent={true} visible={this.state.modalStateDelete}>
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
                    this.setState({ modalStateDelete: false });
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
                      source={require("../../assets/momodelete.gif")}
                      style={{ height: 150, width: 150 }}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#7F8C8D",
                      marginBottom: 10,
                    }}
                  >
                    Record deleted successfully !
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
                      this.setState({ modalStateDelete: false });
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

         {/* View modal start */}
         <View>
          <Modal transparent={true} visible={this.state.modalStateView}>
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
                    this.setState({ modalStateView: false });
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
                        View Purchase
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        width: 23,
                        borderRadius: 100,
                        backgroundColor: "#0E6655",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 30,
                      }}
                    >
                      <View>
                        <Text style={{ color: "white" }}>X</Text>
                      </View>
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
                    marginTop: 15,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 140,
                      width: 140,
                      borderRadius: 100,
                      backgroundColor: "#0E6655",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                         source={require("../../assets/pending.png")}
                          style={{
                            height: 130,
                            width: 130,
                            borderRadius: 100,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ height: 330 }}>
                
                    <View
                      style={{
                        marginTop: 10,
                      }}
                    >
                      <View
                        style={{
                          marginTop: 15,
                        }}
                      >
                        <View
                          style={{
                            ...styles.textInput,

                            paddingLeft: 0,
                            marginVertical: 0,

                            marginTop: 0,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{ fontWeight: "bold", color: "#0E6655" }}
                            >
                              Name :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              Coconut Field
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 15,
                        }}
                      >
                        <View
                          style={{
                            ...styles.textInput,

                            paddingLeft: 0,
                            marginVertical: 0,

                            marginTop: 0,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{ fontWeight: "bold", color: "#0E6655" }}
                            >
                              Date From :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              02/11/2020
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 15,
                        }}
                      >
                        <View
                          style={{
                            ...styles.textInput,

                            paddingLeft: 0,
                            marginVertical: 0,

                            marginTop: 0,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{ fontWeight: "bold", color: "#0E6655" }}
                            >
                              Date To :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}> 05/11/2020</Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 15,
                        }}
                      >
                        <View
                          style={{
                            ...styles.textInput,

                            paddingLeft: 0,
                            marginVertical: 0,

                            marginTop: 0,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{ fontWeight: "bold", color: "#0E6655" }}
                            >
                              Status :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}> Pending</Text>
                          </View>
                        </View>
                      </View>
                      
                
                      <View
                        style={{
                          marginTop: 15,
                        }}
                      >
                        <View
                          style={{
                            ...styles.textInput,

                            paddingLeft: 0,
                            marginVertical: 0,

                            marginTop: 0,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{ fontWeight: "bold", color: "#0E6655" }}
                            >
                              Description  :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              Should need 10 workers
                            </Text>
                          </View>
                        </View>
                      </View>
                     
                    </View>
                 
                </View>
                <View
                  style={{
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      borderBottomColor: "#d3d3d3",
                      borderBottomWidth: 1,
                      padding: 10,
                    }}
                  ></View>
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
                      this.setState({ modalStateView: false });
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

        {/* View modal finish */}


        {/* sort modal start */}

        <View>
          <Modal transparent={true} visible={this.state.sortmodal}>
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
                    this.setState({ sortmodal: false });
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
                        Sort Crop Events
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        width: 23,
                        borderRadius: 100,
                        backgroundColor: "#0E6655",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 30,
                      }}
                    >
                      <View>
                        <Text style={{ color: "white" }}>X</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: "#d3d3d3",
                    borderBottomWidth: 1,
                    padding: 10,
                    paddingBottom: 10,
                  }}
                ></View>
                {/* sort selections */}
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      // backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        flex: 3,
                        flexDirection: "row",
                        marginVertical: 8,
                      }}
                    >
                      <CheckBox
                        checked={this.state.checkedBreed}
                        onPress={this.manageCheckboxBreed}
                        color="#0E6655"
                        style={{ marginVertical: 12, marginRight: 9 }}
                      ></CheckBox>

                      <Text
                        style={{
                          marginVertical: 11,
                          fontSize: 16,
                        }}
                      >
                        &nbsp;&nbsp; Name
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: this.state.colorBreed,
                        flex: 1,
                        marginVertical: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginLeft: 5,
                        height: 40,
                        marginRight: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={this.sortMethodBreed}
                        style={{
                          marginHorizontal: 10,
                          borderRadius: 20,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Text
                            style={{ color: "#ffffff", fontWeight: "bold" }}
                          >
                            {this.state.textValBreed}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* sort selection end */}

                {/* sort selections */}
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      // backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        flex: 3,
                        flexDirection: "row",
                        marginVertical: 8,
                      }}
                    >
                      <CheckBox
                        checked={this.state.checkedCode}
                        onPress={this.manageCheckboxCode}
                        color="#0E6655"
                        style={{ marginVertical: 12, marginRight: 9 }}
                      ></CheckBox>
                      <Text
                        style={{
                          marginVertical: 11,
                          fontSize: 16,
                        }}
                      >
                        &nbsp;&nbsp; Date From
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: this.state.colorCode,
                        flex: 1,
                        marginVertical: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginLeft: 5,
                        height: 40,
                        marginRight: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={this.sortMethodCode}
                        style={{
                          marginHorizontal: 10,
                          borderRadius: 20,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Text
                            style={{ color: "#ffffff", fontWeight: "bold" }}
                          >
                            {this.state.textValCode}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* sort selection end */}

                {/* sort selections */}
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      // backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        flex: 3,
                        flexDirection: "row",
                        marginVertical: 8,
                      }}
                    >
                      <CheckBox
                        checked={this.state.checkedGender}
                        onPress={this.manageCheckboxGender}
                        color="#0E6655"
                        style={{ marginVertical: 12, marginRight: 9 }}
                      ></CheckBox>
                      <Text
                        style={{
                          marginVertical: 11,
                          fontSize: 16,
                        }}
                      >
                        &nbsp;&nbsp; Date To
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: this.state.colorGender,
                        flex: 1,
                        marginVertical: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginLeft: 5,
                        height: 40,
                        marginRight: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={this.sortMethodGender}
                        style={{
                          marginHorizontal: 10,
                          borderRadius: 20,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Text
                            style={{ color: "#ffffff", fontWeight: "bold" }}
                          >
                            {this.state.textValGender}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* sort selection end */}

                {/* sort selections */}
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      // backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        flex: 3,
                        flexDirection: "row",
                        marginVertical: 8,
                      }}
                    >
                      <CheckBox
                        checked={this.state.checkedAge}
                        onPress={this.manageCheckboxAge}
                        color="#0E6655"
                        style={{ marginVertical: 12, marginRight: 9 }}
                      ></CheckBox>
                      <Text
                        style={{
                          marginVertical: 11,
                          fontSize: 16,
                        }}
                      >
                        &nbsp;&nbsp; Status
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: this.state.colorAge,
                        flex: 1,
                        marginVertical: 10,
                        borderRadius: 10,
                        justifyContent: "center",
                        marginLeft: 5,
                        height: 40,
                        marginRight: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={this.sortMethodAge}
                        style={{
                          marginHorizontal: 10,
                          borderRadius: 20,
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Text
                            style={{ color: "#ffffff", fontWeight: "bold" }}
                          >
                            {this.state.textValAge}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* sort selection end */}
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
                      this.props.navigation.navigate("SortCropEventsDrawer");
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
                      SORT
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* sort modal finish */}

        {/* Modal section over */}
        <View style={{ flex: 3 }}>
          <ScrollView>
            {/* begin */}

            {/* begin */}

            <View
              style={{
                backgroundColor: "#0E6655",
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                marginTop: 20,
                height: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 4,
                }}
              >
                  <TouchableOpacity onPress={this.manageView}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Field Name &nbsp;:{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Coconut Field
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date From &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;02/11/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date To &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;05/11/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Status &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Pending
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: "#0E6655",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{ marginTop: 10, marginRight: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditCropEventDrawer");
                      }}
                    >
                      <FontAwesome5
                        name="pen"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={this.managetrash}
                      style={{
                        marginHorizontal: 10,
                        width: 35,
                        height: 30,
                        marginTop: 10,
                      }}
                      containerStyle={{ marginHorizontal: 8 }}
                    >
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../assets/pending.png")}
                          style={{ height: 130, width: 130, borderRadius: 100 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* end */}

            {/* begin */}
            <View
              style={{
                backgroundColor: "#0E6655",
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                marginTop: 20,
                height: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 4,
                }}
              >
                <TouchableOpacity onPress={this.manageView}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Field Name &nbsp;:{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Paddy Field
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date From &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;20/10/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date To &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;25/10/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Status &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Pending
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: "#0E6655",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{ marginTop: 10, marginRight: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditCropEventDrawer");
                      }}
                    >
                      <FontAwesome5
                        name="pen"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={this.managetrash}
                      style={{
                        marginHorizontal: 10,
                        width: 35,
                        height: 30,
                        marginTop: 10,
                      }}
                      containerStyle={{ marginHorizontal: 8 }}
                    >
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../assets/pending.png")}
                          style={{ height: 130, width: 130, borderRadius: 100 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* end */}
            <View
              style={{
                backgroundColor: "#0E6655",
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                marginTop: 20,
                height: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 4,
                }}
              >
                <TouchableOpacity onPress={this.manageView}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Field Name &nbsp;:{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Tea Field
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date From &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;03/10/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date To &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;30/09/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Status &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;In Progress
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: "#0E6655",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{ marginTop: 10, marginRight: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditCropEventDrawer");
                      }}
                    >
                      <FontAwesome5
                        name="pen"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={this.managetrash}
                      style={{
                        marginHorizontal: 10,
                        width: 35,
                        height: 30,
                        marginTop: 10,
                      }}
                      containerStyle={{ marginHorizontal: 8 }}
                    >
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../assets/inprogress.png")}
                          style={{ height: 130, width: 130, borderRadius: 100 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* begin */}
            <View
              style={{
                backgroundColor: "#0E6655",
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                marginTop: 20,
                height: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 4,
                }}
              >
                <TouchableOpacity onPress={this.manageView}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Field Name &nbsp;:{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Coconut
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date From &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;02/09/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date To &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;05/11/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Status &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;In Progress
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: "#0E6655",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{ marginTop: 10, marginRight: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditCropEventDrawer");
                      }}
                    >
                      <FontAwesome5
                        name="pen"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={this.managetrash}
                      style={{
                        marginHorizontal: 10,
                        width: 35,
                        height: 30,
                        marginTop: 10,
                      }}
                      containerStyle={{ marginHorizontal: 8 }}
                    >
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../assets/inprogress.png")}
                          style={{ height: 130, width: 130, borderRadius: 100 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* end */}

            <View
              style={{
                backgroundColor: "#0E6655",
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                marginTop: 20,
                height: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 4,
                }}
              >
                <TouchableOpacity onPress={this.manageView}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Field Name &nbsp;:{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Wheat
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date From &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;02/05/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date To &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;05/05/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Status &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Finished
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: "#0E6655",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{ marginTop: 10, marginRight: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditCropEventDrawer");
                      }}
                    >
                      <FontAwesome5
                        name="pen"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={this.managetrash}
                      style={{
                        marginHorizontal: 10,
                        width: 35,
                        height: 30,
                        marginTop: 10,
                      }}
                      containerStyle={{ marginHorizontal: 8 }}
                    >
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../assets/finished.png")}
                          style={{ height: 130, width: 130, borderRadius: 100 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* begin */}

            <View
              style={{
                backgroundColor: "#0E6655",
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                marginTop: 20,
                height: 200,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 4,
                }}
              >
                <TouchableOpacity onPress={this.manageView}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Field Name &nbsp;:{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Wheat
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date From &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;02/05/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Date To &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;05/05/2020
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Status &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Finished
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 3,
                  backgroundColor: "#0E6655",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{ marginTop: 10, marginRight: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditCropEventDrawer");
                      }}
                    >
                      <FontAwesome5
                        name="pen"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={this.managetrash}
                      style={{
                        marginHorizontal: 10,
                        width: 35,
                        height: 30,
                        marginTop: 10,
                      }}
                      containerStyle={{ marginHorizontal: 8 }}
                    >
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color="white"
                      ></FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View
                      style={{
                        height: 135,
                        width: 135,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../assets/finished.png")}
                          style={{ height: 130, width: 130, borderRadius: 100 }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* end */}

          </ScrollView>
        </View>
      </View>
      // </ImageBackground>
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
