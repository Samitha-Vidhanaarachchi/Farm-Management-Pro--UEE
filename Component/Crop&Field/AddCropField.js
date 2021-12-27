import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    ListItem,
    CheckBox,
  
    Body,Picker,
  } from "native-base";
  
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
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import { FontAwesome5 } from "@expo/vector-icons";

class AddCropField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2016-05-15",
            modalState: false,
        };
    }

    manageSave = () => {
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
                                Field/ Paddock
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
                                Add new Paddock/ Field Details
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
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                                                Field/ Paddock Name
                                            </Text>
                                            <TextInput
                                                onFocus={this.onFocus}
                                                autoFocus={false}
                                                placeholder="Field/ Paddock Name"
                                                style={styles.textInput}
                                                placeholderTextColor="#C0C0C0"
                                            />
                                        </View>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                                                Field Size
                                            </Text>
                                            <TextInput
                                                autoFocus={false}
                                                placeholder="Field Size"
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
                                            <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                                                Field Type
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
                          <Picker.Item label="Crop" value="sp" />
                          
                          <Picker.Item
                            label="Field"
                            value="cp"
                          />
                        </Picker>
                      </View>
                                        </View>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ color: "#0E6655", marginHorizontal: 20 }}>
                                                Additional Information / Note
                                            </Text>
                                            <TextInput
                                                onFocus={this.onFocus}
                                                autoFocus={false}
                                                placeholder="Note"
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

export default AddCropField;

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
