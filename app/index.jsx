import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import iceCoffeeImg from "@/assets/images/icon.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iceCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href={"/contact"} style={{marginHorizontal:'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Contract
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
    color: "zinc",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: 'rgba(71, 71, 71, 0.5)',
    marginBottom: 60
  },
  
  link: {
    color: "zinc",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    textDecorationLine: "underline",
    backgroundColor: 'rgba(71, 71, 71, 0.5)',
    padding: 4
  },
  button:{
    height:60,
    borderRadius:20,
    backgroundColor:'rgba(167, 167, 167, 0.75)',
    padding:6
  },
  buttonText: {
    color: "zinc",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    padding: 4,
    marginVertical:'auto'
  },
})
