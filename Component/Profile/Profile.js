import React, { Component } from "react";
import {
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
  SafeAreaView,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      modalStateDelete: false,
    };
  }

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
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
                Profile
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
              flex: 9,
              // backgroundColor: "#689F38",
              flexDirection: "row",
            }}
          >
            <SafeAreaView style={styles.container}>
              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Avatar.Image
                    source={{
                      uri:
                        "https://avatars3.githubusercontent.com/u/44874559?s=400&v=4",
                    }}
                    size={80}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Title
                      style={[
                        styles.title,
                        {
                          marginTop: 15,
                          marginBottom: 5,
                        },
                      ]}
                    >
                      Samitha Perera
                    </Title>
                    <Caption style={styles.caption}>@samitha_96</Caption>
                  </View>
                </View>
              </View>

              <View style={styles.userInfoSection}>
                <View style={styles.row}>
                  <Icon name="map-marker-radius" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    Makandura, Sri Lanka
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="phone" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    077-6355192
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="email" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    samithaperera@gmail.com
                  </Text>
                </View>
              </View>

              <View style={styles.infoBoxWrapper}>
                <View
                  style={[
                    styles.infoBox,
                    {
                      borderRightColor: "#dddddd",
                      borderRightWidth: 1,
                    },
                  ]}
                >
                  <Title>150</Title>
                  <Caption>Animals</Caption>
                </View>
                <View style={styles.infoBox}>
                  <Title>5</Title>
                  <Caption>Lands</Caption>
                </View>
              </View>

              <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#0E6655" size={25} />
                    <Text style={styles.menuItemText}>Your Favorites</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon name="id-card" color="#0E6655" size={25} />
                    <Text style={styles.menuItemText}>Payment</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon name="share-outline" color="#0E6655" size={25} />
                    <Text style={styles.menuItemText}>Tell Your Friends</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon
                      name="account-check-outline"
                      color="#0E6655"
                      size={25}
                    />
                    <Text style={styles.menuItemText}>Support</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.menuItem}>
                    <Icon name="settings-outline" color="#0E6655" size={25} />
                    <Text style={styles.menuItemText}>Settings</Text>
                  </View>
                </TouchableRipple>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
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
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  container: {
    flex: 1,
  },
});
