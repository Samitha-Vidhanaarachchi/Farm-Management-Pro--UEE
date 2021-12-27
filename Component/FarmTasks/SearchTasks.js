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
import { Button } from "react-native-paper";

export default class SearchTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      modalStateDelete: false,
      sortmodal: false,
      textValDate: "ASC",
      textValName: "ASC",
      textValStatus: "ASC",
      modalStateView: false,

      checked: false,
      checked2: false,
      checkedDate: false,
      checkedName: false,
      checkedStatus: false,
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
    if (this.state.checkedDate === true) {
      this.setState({
        checkedDate: false,
        colorBreed: "#CCD1D1",
      });
    } else if (this.state.checkedDate === false) {
      this.setState({
        checkedDate: true,
        colorBreed: "#689F38",
      });
    }
  };

  manageCheckboxCode = () => {
    if (this.state.checkedName === true) {
      this.setState({
        checkedName: false,
        colorCode: "#CCD1D1",
      });
    } else if (this.state.checkedName === false) {
      this.setState({
        checkedName: true,
        colorCode: "#689F38",
      });
    }
  };

  manageCheckboxGender = () => {
    if (this.state.checkedStatus === true) {
      this.setState({
        checkedStatus: false,
        colorGender: "#CCD1D1",
      });
    } else if (this.state.checkedStatus === false) {
      this.setState({
        checkedStatus: true,
        colorGender: "#689F38",
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
      textValDate: "ASC",
      textValName: "ASC",
      textValStatus: "ASC",

      checked: false,
      checked2: false,
      checkedDate: false,
      checkedName: false,
      checkedStatus: false,
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

  sortMethodDate = () => {
    if (this.state.textValDate === "ASC") {
      this.setState({
        textValDate: "DESC",
        checkedDate: true,
        colorBreed: "#689F38",
      });
    } else if (this.state.textValDate === "DESC") {
      this.setState({
        textValDate: "ASC",
        checkedDate: true,
        colorBreed: "#689F38",
      });
    }
  };

  sortMethodName = () => {
    if (this.state.textValName === "ASC") {
      this.setState({
        textValName: "DESC",
        checkedName: true,
        colorCode: "#689F38",
      });
    } else if (this.state.textValName === "DESC") {
      this.setState({
        textValName: "ASC",
        checkedName: true,
        colorCode: "#689F38",
      });
    }
  };

  sortMethodStatus = () => {
    if (this.state.textValStatus === "ASC") {
      this.setState({
        textValStatus: "DESC",
        checkedStatus: true,
        colorGender: "#689F38",
      });
    } else if (this.state.textValStatus === "DESC") {
      this.setState({
        textValStatus: "ASC",
        checkedStatus: true,
        colorGender: "#689F38",
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
                flex: 2,
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
                Farm Task Tracker
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
                Add New Task
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
                    this.props.navigation.navigate("AddTaskDrawer");
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
                placeholder="Milking Animals"
                style={styles.textInput}
                placeholderTextColor="black"
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
                    this.props.navigation.navigate("SearchTasksDrawer");
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
                        Sort Tasks
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
                        checked={this.state.checkedDate}
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
                        &nbsp;&nbsp; Date
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
                        onPress={this.sortMethodDate}
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
                            {this.state.textValDate}
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
                        checked={this.state.checkedName}
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
                        &nbsp;&nbsp; Name
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
                        onPress={this.sortMethodName}
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
                            {this.state.textValName}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* sort selection end */}
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
                        checked={this.state.checkedStatus}
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
                        &nbsp;&nbsp; Status
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
                        onPress={this.sortMethodStatus}
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
                            {this.state.textValStatus}
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
                      this.props.navigation.navigate("SortTasksDrawer");
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
                                          View Animal
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
                                              source={require("../../assets/finished.png")}
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

                          <View
                              style={{
                                  marginTop: 10,
                              }}
                          >
                              {/* field start */}
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
                                          <Text style={{ fontWeight: "bold", color: "#0E6655" }}>
                                              Name :{" "}
                                          </Text>
                                          <Text style={{ fontWeight: "bold" }}> Milking Animals</Text>
                                      </View>
                                  </View>
                              </View>

                              {/* Field finish */}
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
                                          <Text style={{ fontWeight: "bold", color: "#0E6655" }}>
                                              Date :{" "}
                                          </Text>
                                          <Text style={{ fontWeight: "bold" }}> 30/09/2020</Text>
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
                                          <Text style={{ fontWeight: "bold", color: "#0E6655" }}>
                                              Status :{" "}
                                          </Text>
                                          <Text style={{ fontWeight: "bold" }}> Finished</Text>
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
                                          <Text style={{ fontWeight: "bold", color: "#0E6655" }}>
                                              Description :{" "}
                                          </Text>
                                          <Text style={{ fontWeight: "bold" }}> Arrange milk bottles</Text>
                                      </View>
                                  </View>
                              </View>


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
                        Name :{" "}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Milking Animals
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 20,
                        marginTop: 5,
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
                            fontSize: 16,
                          }}
                        >
                          Date &nbsp; :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
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
                            fontSize: 16,
                          }}
                        >
                          Status :{" "}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {" "}
                          &nbsp;Finished
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
                        this.props.navigation.navigate("EditTaskDrawer");
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
                    flex: 3,
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={this.manageView}>
                    <View>
                      <Image
                        source={require("../../assets/finished.png")}
                        style={{ height: 130, width: 130, borderRadius: 100 }}
                      />
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
