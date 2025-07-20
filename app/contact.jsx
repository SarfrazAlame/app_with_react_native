import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View>
      <View>
        <Image
          // source={flower}
        />
        <Text>
          Hello, This is Sarfraz Qadri
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
