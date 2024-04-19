import { View, Text, StyleSheet, Image} from 'react-native'

export default function Console({name, stockQuantity, imgURL, brand, imgBgColor_='#00000082'}){

    return <View style={styles.container}>

        <View style={[styles.imgContainer, { backgroundColor: imgBgColor_ }]}><Image source={{uri: imgURL}} style={styles.image}/></View>
        <View style={styles.infoContainer}>
            <Text style={styles.txtNameConsole}>{name}</Text>
            <Text style={  styles.txtQntStock }> Em estoque: {stockQuantity}</Text>
        </View>
        <View style={{justifyContent: 'center', marginEnd: 15}}>
            <Image source={require('./../assets/images/arrow-right-icon.png')} style={{width:18, height: 18}} />
        </View>
    </View>
}

const styles = StyleSheet.create({

    container: {
        flexBasis: 100,
        width: '94%',
        flexDirection: "row",
        alignSelf: 'center'
    },

    imgContainer: {
        flex: 1,
        backgroundColor: "darkgray",
        borderTopLeftRadius   : 12,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image:{
        width: 75,
        height: 75,
        maxHeight: '100%',
        maxWidth: '100%',
    },

    infoContainer: {
        flex: 4,
        backgroundColor        : "white",
        borderTopRightRadius   : 20,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arimo-Regular',

    },

    txtNameConsole: {
        fontSize: 16,
        fontWeight: '500'
    },

    txtQntStock: {
        fontSize: 14
    }
    
})