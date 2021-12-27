import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
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

export default class sortedPurchases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      modalStateDelete: false,
      sortmodal: false,
      modalStateView: false,
      textValBreed: "ASC",
      textValCode: "ASC",
      textValGender: "ASC",
      textValAge: "ASC",
      textValQuantity: "ASC",

      checked: false,
      checked2: false,
      checkedBreed: false,
      checkedCode: false,
      checkedGender: false,
      checkedAge: false,
      checkedQuantity: false,

      colorBreed: "#CCD1D1",
      colorCode: "#CCD1D1",
      colorGender: "#CCD1D1",
      colorAge: "#CCD1D1",
      colorQuantity: "#CCD1D1",
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
  manageCheckboxQuantity = () => {
    if (this.state.checkedQuantity === true) {
      this.setState({
        checkedQuantity: false,
        colorQuantity: "#CCD1D1",
      });
    } else if (this.state.checkedQuantity === false) {
      this.setState({
        checkedQuantity: true,
        colorQuantity: "#689F38",
      });
    }
  };

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

  managesort = () => {
    this.setState({
      textValBreed: "ASC",
      textValCode: "ASC",
      textValGender: "ASC",
      textValAge: "ASC",
      textValQuantity: "ASC",
      checked: false,
      checked2: false,
      checkedBreed: false,
      checkedCode: false,
      checkedGender: false,
      checkedAge: false,
      checkedQuantity: false,

      colorBreed: "#CCD1D1",
      colorCode: "#CCD1D1",
      colorGender: "#CCD1D1",
      colorAge: "#CCD1D1",
      colorQuantity: "#CCD1D1",
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

  sortMethodQuantity = () => {
    if (this.state.textValQuantity === "ASC") {
      this.setState({
        textValQuantity: "DESC",
        checkedQuantity: true,
        colorQuantity: "#689F38",
      });
    } else if (this.state.textValQuantity === "DESC") {
      this.setState({
        textValQuantity: "ASC",
        checkedQuantity: true,
        colorQuantity: "#689F38",
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
                Purchases
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
                Purchases View
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
                  onPress={() => {
                    this.props.navigation.navigate("purchaseAddDrawer");
                  }}
                  style={{ flexDirection: "row" }}
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
                placeholder="Search By Type..."
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
                    this.props.navigation.navigate("SearchPurchasesDrawer");
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
                        Sort Purchases
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
                        &nbsp;&nbsp; Type
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
                        &nbsp;&nbsp; Supplier
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
                        &nbsp;&nbsp; Batch Number
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
                        checked={this.state.checkedQuantity}
                        onPress={this.manageCheckboxQuantity}
                        color="#0E6655"
                        style={{ marginVertical: 12, marginRight: 9 }}
                      ></CheckBox>
                      <Text
                        style={{
                          marginVertical: 11,
                          fontSize: 16,
                        }}
                      >
                        &nbsp;&nbsp; Quantity
                      </Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: this.state.colorQuantity,
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
                        onPress={this.sortMethodQuantity}
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
                            {this.state.textValQuantity}
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
                      this.setState({ sortmodal: false });
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
                          source={require("../../assets/fertilizer.png")}
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

                <View style={{ height: 300 }}>
                  <ScrollView
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    ref={(node) => (this.scroll = node)}
                  >
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
                              Yaramila
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
                              Type :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              Fertilizer
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
                              Supplier :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}> CIC</Text>
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
                              Batch No :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}> 2190</Text>
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
                              Quantity :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}> 13</Text>
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
                              Unit Price :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              Rs 500 /=
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
                              Total Price :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              Rs 6500 /=
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
                              Information :{" "}
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {" "}
                              Coconut Fertilizer
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
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
        {/* Modal section over */}
        <View style={{ flex: 3 }}>
          <ScrollView>
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
                  flex: 3.5,
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
                          fontSize: 18,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        &nbsp;Prima layer feed
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Feed
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;NPM
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;3160
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;16
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/feed.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 16,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Grower mash
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Feed
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;CIC
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;6780
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;22
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/feed.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 18,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        &nbsp;Yaramila
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Fertilizer
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;CIC
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;2190
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;13
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/fertilizer.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 18,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        &nbsp;Osmocote
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Fertilizer
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;CIC
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;4224
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;31
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/fertilizer.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 16,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Coconut APM
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Fertilizer
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Lankem
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;7223
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;23
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/fertilizer.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 18,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        &nbsp;Mancozeb
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Spray
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Lankem
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;2230
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;5
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/spray.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 16,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        &nbsp;Fipfronil
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Spray
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;NPM
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;6860
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;2
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/spray.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
                  flex: 3.5,
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
                          fontSize: 18,
                        }}
                      >
                        Name &nbsp; :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        &nbsp;Weed Killer
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                      }}
                    >
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
                          Type &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;Spray
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
                          Supplier :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;NPM
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
                          Batch No:{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;9460
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
                          Quantity :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          &nbsp;21
                        </Text>
                      </View>
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
                        this.props.navigation.navigate("EditPurchasesDrawer");
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
                        height: 140,
                        width: 140,
                        borderRadius: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: 135,
                          width: 135,
                          borderRadius: 100,
                          backgroundColor: "#0E6655",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Image
                            source={require("../../assets/spray.png")}
                            style={{
                              height: 130,
                              width: 130,
                              borderRadius: 100,
                            }}
                          />
                        </View>
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
