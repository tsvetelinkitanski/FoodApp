import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default Details = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View>
          <Text>Some text here</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
});
