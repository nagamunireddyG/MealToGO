import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Text> Search </Text>
        </View>
        <View style={styles.bottomView}>
          <Text> Filter </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  topView: {
    padding: 16,
    backgroundColor: "green",
  },
  bottomView: {
    flex: 1,
    padding: 16,
    backgroundColor: "yellow",
  },
  sideView: {
    flex: 1,
  },
});
