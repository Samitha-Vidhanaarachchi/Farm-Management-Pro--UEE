import React, { Component } from "react";
import {
  Text,
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
import Success from "../success";

class registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
    };
  }
  manageRegister = () => {
    this.setState({
      modalState: false,
    });

    this.props.navigation.navigate("SignIn");
  };

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.18, backgroundColor: "#ffffff" }}>
          <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ fontSize: 28, color: "#0E6655", marginTop: 40 }}>
                Create Your Account Here
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(node) => (this.scroll = node)}
          style={{
            flex: 8,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              flex: 1,
              marginTop: 40,
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
            <View style={{ flex: 3, backgroundColor: "#fffffff" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                <Text style={{ color: "#0E6655", fontSize: 24 }}>Step 1</Text>
                <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>
                  Personal Information
                </Text>
              </View>
              <ScrollView>
              <View style={{ margin: 10, marginTop: 25 }}>
                <View>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Username
                  </Text>
                  <TextInput
                    onFocus={this.onFocus}
                    autoFocus={false}
                    placeholder="samitha_96"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Name
                  </Text>
                  <TextInput
                    style={{}}
                    autoFocus={false}
                    placeholder="Samith Perera"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Email
                  </Text>
                  <TextInput
                    onFocus={this.onFocus}
                    autoFocus={false}
                    placeholder="samitha@gmail.com"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Address
                  </Text>
                  <TextInput
                    onFocus={this.onFocus}
                    autoFocus={false}
                    placeholder="286/7/11 Chilaw Rd"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
              </View>
              </ScrollView>
            </View>
       
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 5,
                    backgroundColor: "#0E6655",
                    borderWidth: 1,
                    borderColor: "#0E6655",
                  }}
                ></View>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 5,
                    backgroundColor: "#ffffff",
                    borderWidth: 1,
                    borderColor: "#0E6655",
                    marginLeft: 10,
                  }}
                ></View>
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.scroll.scrollTo({ x: 400 });
                  }}
                >
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
                      Next
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              flex: 1,
              marginTop: 40,
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
              marginLeft: 5,
              marginBottom: 20,
              marginRight: 15,
            }}
          >
            <View style={{ flex: 3, backgroundColor: "#fffffff" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                <Text style={{ color: "#0E6655", fontSize: 24 }}>Step 2</Text>
                <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>
                  Personal Information
                </Text>
              </View>
              <ScrollView>
              <View style={{ margin: 10, marginTop: 10 }}>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Profession
                  </Text>
                  <TextInput
                    autoFocus={false}
                    placeholder="Farmer"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Mobile Number
                  </Text>
                  <TextInput
                    autoFocus={false}
                    keyboardType="number-pad"
                    placeholder="0776355192"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    App Password
                  </Text>
                  <TextInput
                    onFocus={this.onFocus}
                    secureTextEntry={true}
                    autoFocus={false}
                    placeholder="***"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                    Confirm Password
                  </Text>
                  <TextInput
                    autoFocus={false}
                    secureTextEntry={true}
                    placeholder="***"
                    style={styles.textInput}
                    placeholderTextColor="#C0C0C0"
                  />
                </View>
              </View>
              </ScrollView>
            </View>
            
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    this.scroll.scrollTo({ x: -400 });
                  }}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 5,
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: "#0E6655",
                    }}
                  ></View>
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 5,
                    backgroundColor: "#0E6655",
                    borderWidth: 1,
                    borderColor: "#0E6655",
                    marginLeft: 10,
                  }}
                ></View>
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalState: true });
                  }}
                >
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
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

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
                <Success />
                <Text
                  style={{
                    color: "#7F8C8D",
                    marginBottom: 10,
                  }}
                >
                  Registered Successfully
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
                  onPress={this.manageRegister}
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
                <Success />
                <Text
                  style={{
                    color: "#7F8C8D",
                    marginBottom: 10,
                  }}
                >
                  Registered Successfully
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
                  onPress={this.manageRegister}
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
    );
  }
}
export default registration;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 70,
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
});
