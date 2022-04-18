import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Color from "../constants/color";
import Font from "../constants/font";
import Header from "../components/Header";
import { productList1 } from "../data/productlist";

class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header backbutton={true} title="My Cart" />
        <FlatList
          contentContainerStyle={{ flex: 0.7 }}
          data={productList1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                style={{ height: 100, width: 100, borderRadius: 10 }}
                source={{ uri: item.image }}
              />
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemName}>Price - $20.00</Text>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <View style={styles.itemButton}>
                    <Text style={styles.itemQuantity(false)}>-</Text>
                  </View>
                  <Text style={styles.itemQuantity(true)}>13 KG</Text>
                  <View style={styles.itemButton}>
                    <Text style={styles.itemQuantity(false)}>+</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        <View style={styles.bottonContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.itemName}>Subtotal (4 items)</Text>
            <Text style={styles.itemName}>$80.00</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Color.backgroundColor,
  },
  itemName: {
    color: Color.black,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 18,
  },
  itemButton: {
    backgroundColor: Color.primary,
    height: 30,
    width: 30,
    borderColor: Color.black,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemQuantity: (number) => ({
    color: number ? Color.black : Color.white,
    marginHorizontal: number ? 10 : 0,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 18,
  }),
  buttonContainer: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: Color.white,
    fontFamily: Font.FONT_SEMI_BOLD,
    fontSize: 18,
  },
  bottonContainer: {
    flex: 0.3,
    backgroundColor: Color.backgroundColor,
    borderColor: Color.black,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
});

export default CartScreen;
