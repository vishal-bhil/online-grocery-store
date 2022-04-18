import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Color from "../constants/color";
import Font from "../constants/font";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

class ProductDetialsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header backbutton={true} title="Sugar" />
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.dailyqudrat.pk/wp-content/uploads/2020/01/09-3-11.jpg",
            }}
          />
          <View style={{ padding: 20 }}>
            <Text style={styles.txtTitle}>Fine Grain Sugar</Text>
            <Text style={styles.txtPrice}>$20.00 per kg</Text>
            <Text style={styles.txtDescription}>
              Granulated sugar has had all of the naturally present molasses
              refined out of it. It is the sugar that is most commonly used in
              baking. The fine crystals in granulated sugar don't cake together,
              which makes it perfect for measuring, sprinkling onto food and
              dissolving into drinks.
            </Text>
          </View>

          <View style={styles.bottonContainer}>
            <View style={{ flexDirection: "column", paddingVertical: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View style={styles.itemButton}>
                  <Text style={styles.itemQuantity(false)}>-</Text>
                </View>
                <Text style={styles.itemQuantity(true)}>1 KG</Text>
                <View style={styles.itemButton}>
                  <Text style={styles.itemQuantity(false)}>+</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.navigation.navigate("Cart");
                }}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  image: {
    height: 300,
    width: "100%",
  },
  txtTitle: {
    fontFamily: Font.FONT_REGULAR,
    fontSize: 25,
  },
  txtPrice: {
    fontFamily: Font.FONT_REGULAR,
    fontSize: 20,
  },
  txtDescription: { fontFamily: Font.FONT_REGULAR, fontSize: 15 },
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
  bottonContainer: {
    backgroundColor: Color.backgroundColor,
    borderColor: Color.black,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  buttonContainer: {
    borderColor: Color.primary,
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: Color.primary,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 18,
  },
});

export default ProductDetialsScreen;
