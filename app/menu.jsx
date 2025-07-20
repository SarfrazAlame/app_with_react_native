import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems"
import MENU_IMAGES from "@/constants/MenuImages"

export default function MenuScreen() {
    const colorSchema = Appearance.getColorScheme()
    const theme = colorSchema == "dark" ? Colors.dark : Colors.light

    const styles = createStyles(theme, colorSchema)

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator}/>
    const headerComp = <Text>Top of List</Text>
    const footerComp = <Text>End of List</Text>
    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={footerComp}
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image style={styles.images} source={MENU_IMAGES[item.id - 1]} />
                    </View>
                )}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    images: {
        width: '100%',
        height: '40%'
    }
})

function createStyles(theme, colorSchema) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background
        },
        separator:{
            height:1,
            backgroundColor: colorSchema === 'dark' ? 'papayawhip':'#000',
            width:'50%',
            maxWidth:300,   
            marginHorizontal:'auto',
            marginBottom:10
        },
        footerComp:{
            marginHorizontal:'auto',
             
        }
    })

}