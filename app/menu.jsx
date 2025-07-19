import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList } from "react-native";
import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
    const colorSchema = Appearance.getColorScheme()
    const theme = colorSchema == "dark" ? Colors.dark : Colors.light

    const styles = createStyles(theme, colorSchema)

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList
              data={[]}
              renderItem={({item})=>(
                
              )}
            />
        </Container>
    )
}

function createStyles(theme, colorSchema) {
    return StyleSheet.create({

    })

}