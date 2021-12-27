import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
  Picker,
} from "native-base";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  AppRegistry,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import { FontAwesome5 } from "@expo/vector-icons";

class purchaseAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2016-05-15",
      modalState: false,
      quantity: 0,
      unitPrice: 0,
      total: 0,
    };
  }

  manageSave = () => {
    console.log("modalstate : " + this.state.modalState);
    this.setState({
      quantity: 0,
      unitPrice: 0,
      total: 0,
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

  sum = () => {
    var N1 = this.state.quantity;
    var N2 = this.state.unitPrice;

    this.setState({
      total: N1 * N2,
    });
  };

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
    var radio_props = [
      { label: "Male     ", value: 0 },
      { label: "Female", value: 1 },
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
                My Purchases
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
                Add Purchase Details
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
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Purchase Type
                      </Text>
                      <View
                        style={{
                          borderRadius: 25,
                          borderWidth: 0.5,
                          marginHorizontal: 20,
                          paddingLeft: 10,
                          marginVertical: 5,
                          borderColor: "#0E6655",
                        }}
                      >
                        <Picker>
                          <Picker.Item label="Spray Purchases" value="sp" />
                          <Picker.Item
                            label="Fertilizer Purchases"
                            value="fp"
                          />
                          <Picker.Item
                            label="Animal Feed Purchases"
                            value="afp"
                          />
                        </Picker>
                      </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Purchase Item
                      </Text>
                      <TextInput
                        onFocus={this.onFocus}
                        autoFocus={false}
                        placeholder="Item Name"
                        style={styles.textInput}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Batch Number
                      </Text>
                      <TextInput
                        autoFocus={false}
                        placeholder="Batch Number"
                        style={styles.textInput}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>

                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Supplier Name
                      </Text>
                      <TextInput
                        onFocus={this.onFocus}
                        autoFocus={false}
                        placeholder="Supplier Name"
                        style={styles.textInput}
                        placeholderTextColor="#C0C0C0"
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: "#F2F4F4",
                        marginTop: 15,
                        paddingBottom: 15,
                        borderRadius: 20,
                      }}
                    >
                      <View style={{ marginTop: 15 }}>
                        <Text
                          style={{ color: "#0E6655", marginHorizontal: 20 }}
                        >
                          Quantity
                        </Text>
                        <TextInput
                          onFocus={this.onFocus}
                          autoFocus={false}
                          keyboardType="number-pad"
                          placeholder="0"
                          style={{
                            ...styles.textInput,
                            backgroundColor: "white",
                          }}
                          placeholderTextColor="#C0C0C0"
                          onChangeText={(quantity) =>
                            this.setState({ quantity })
                          }
                        ></TextInput>
                      </View>
                      <View style={{ marginTop: 15 }}>
                        <Text
                          style={{ color: "#0E6655", marginHorizontal: 20 }}
                        >
                          Unit Price
                        </Text>
                        <TextInput
                          onFocus={this.onFocus}
                          autoFocus={false}
                          keyboardType="number-pad"
                          placeholder="100.00"
                          style={{
                            ...styles.textInput,
                            backgroundColor: "white",
                          }}
                          placeholderTextColor="#C0C0C0"
                          onChangeText={(unitPrice) =>
                            this.setState({ unitPrice })
                          }
                        />
                      </View>
                      <View style={{ marginTop: 15 }}>
                        <TouchableOpacity onPress={this.sum}>
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
                              Calculate
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            marginTop: 15,
                          }}
                        >
                          Total Price : Rs {this.state.total} /=
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                        Additional Information
                      </Text>
                      <TextInput
                        onFocus={this.onFocus}
                        autoFocus={false}
                        placeholder="Additional Purchase Details"
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

export default purchaseAdd;

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
});
