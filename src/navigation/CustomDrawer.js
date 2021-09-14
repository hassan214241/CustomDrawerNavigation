import React from "react";
import { View, Text, onPress } from "react-native";
import { Avatar, Caption } from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

export const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar.Image
              source={{
                uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              }}
            />
            <Text style={{ marginTop: 10, marginRight: 10 }}>
              Muhammad Hassan
            </Text>
            <Caption>@hassan</Caption>
          </View>
          <View
            style={{
              marginTop: 15,
              borderBottomWidth: 1,
              borderColor: "gray",
              marginVertical: 20,
            }}
          ></View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <DrawerItem
        label="Logout"
        icon={({ color, size }) => (
          <MaterialIcons name="exit-to-app" color={color} size={size} />
        )}
      />
    </View>
  );
};
