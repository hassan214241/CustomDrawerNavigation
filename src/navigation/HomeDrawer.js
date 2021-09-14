import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Chat, Profile,Inbox,BookMark,Settings } from "../screens";
import { CustomDrawer } from "./CustomDrawer";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Inbox"
        component={Inbox}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="move-to-inbox" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="BookMark"
        component={BookMark}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="bookmark" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
