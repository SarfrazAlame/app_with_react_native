import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import iceCoffeeImg from "@/assets/images/coffee.jpg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iceCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href={"/contact"} style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Contract Us
            </Text>
          </Pressable>
        </Link>
        <Link href={'/menu'} style={{ marginHorizontal: 'auto', marginTop:4 }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Our Menu
            </Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: 'rgba(16, 15, 15, 0.5)',
    marginBottom: 60
  },

  link: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    textDecorationLine: "underline",
    backgroundColor: 'rgba(71, 71, 71, 0.5)',
    padding: 4
  },
  button: {
    height: 60,
    width:150,
    borderRadius: 20,
    backgroundColor: 'rgba(17, 16, 16, 0.75)',
    padding: 6,
    marginBottom:50
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    padding: 4,
    marginVertical: 'auto'
  },
})
