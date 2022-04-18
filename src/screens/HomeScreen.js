import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import Color from "../constants/color";
import Font from "../constants/font";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { productList1, productList2, productList3 } from "../data/productlist";

class SelectOptionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={styles.txt1}>What are you looking for</Text>
            <View style={styles.searchContainer}>
              <Ionicons name="ios-search" color={Color.primary} size={25} />
              <TextInput placeholder="Search" style={styles.txtSearch} />
            </View>
          </View>
          <Text style={styles.discountText}>50% Discount</Text>
          <FlatList
            horizontal
            data={productList1}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ProductDetails");
                }}
              >
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.itemContainer}
                >
                  <View style={styles.itemTextBackground}>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={styles.discountText}>New Stock</Text>
            <Text style={styles.viewAllText}>View all</Text>
          </View>
          <FlatList
            horizontal
            data={productList2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ProductDetails");
                }}
              >
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.itemContainer}
                >
                  <View style={styles.itemTextBackground}>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={styles.discountText}>New Brands</Text>
            <Text style={styles.viewAllText}>View all</Text>
          </View>

          <FlatList
            horizontal
            data={productList3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ProductDetails");
                }}
              >
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.item3Container}
                >
                  <View style={styles.itemTextBackground}>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
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
  txt1: {
    color: Color.black,
    fontFamily: Font.FONT_SEMI_BOLD,
    fontSize: 20,
  },
  txtSearch: {
    color: Color.primary,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 20,
    marginStart: 10,
    flexGrow: 1,
  },
  searchContainer: {
    backgroundColor: Color.searchBackground,
    marginTop: 10,
    borderRadius: 30,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  discountText: {
    color: Color.black,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  viewAllText: {
    color: Color.primary,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 16,
    paddingEnd: 20,
  },
  itemContainer: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: Color.backgroundColor,
    margin: 10,
    height: 150,
    width: 200,
  },
  itemTextBackground: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: Color.white,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 20,
  },
  item3Container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: Color.backgroundColor,
    margin: 10,
    height: 150,
    width: 150,
  },
});

export default SelectOptionScreen;
