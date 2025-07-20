import { Colors } from "@/constants/Colors";
import MENU_IMAGES from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";
import { Appearance, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
    const colorSchema = Appearance.getColorScheme()
    const theme = colorSchema == "dark" ? Colors.dark : Colors.light

    const styles = createStyles(theme, colorSchema)

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />
    const headerComp = <Text>Top of List</Text>
    const footerComp = <Text style={{ color: theme.text, textAlign: 'center' }}>End of List</Text>
    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListEmptyComponent={<Text>No items found</Text>}
                // ListFooterComponentStyle={footerComp}
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image style={styles.menuImage} source={MENU_IMAGES[item.id - 1]} />
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme, colorSchema) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background
        },
        separator: {
            height: 1,
            backgroundColor: colorSchema === 'dark' ? 'papayawhip' : '#000',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10
        },
        footerComps: {
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorSchema === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 8,
            overflow: 'hidden',
            marginHorizontal: 'auto'
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 100,
            height: 100
        },

    })
}