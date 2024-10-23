import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Alert } from "react-native";
import socket from "./socket";
import Geolocation from "./src/components/Geolocation";
 
export default function App() {
  return (
    <View>
      <Geolocation  ></Geolocation>
    </View>
  );
};
 