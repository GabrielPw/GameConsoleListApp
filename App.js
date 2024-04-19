import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, FlatList} from 'react-native'
import Console from './components/Console'

import { useFonts } from 'expo-font'
import { useState } from 'react'

const mainColor = '#496399'
export default function App(){

  let [fontsLoaded] = useFonts({
    'Arimo-Regular': require("./assets/fonts/Arimo-Regular.ttf")
  })
  
  const consoleList = [
    {name:"Super Nintendo" , stockQuantity:12, imgURL:'https://upload.wikimedia.org/wikipedia/commons/0/0c/SNES-USA.png', brand: 'Nintendo', imgBgColor_:mainColor},
    {name:"Nintendo 64" , stockQuantity:13, imgURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Nintendo_64.png/306px-Nintendo_64.png', brand: 'Nintendo', imgBgColor_:mainColor},
    {name:"Playstation 4" , stockQuantity:25, imgURL:'https://png.pngtree.com/png-clipart/20220828/ourmid/pngtree-playstation-4-with-joystick-png-image_6127743.png', brand: 'Playstation', imgBgColor_:mainColor},
    {name:"Playstation 2" , stockQuantity:32, imgURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PlayStation_2.png/469px-PlayStation_2.png', brand: 'Playstation', imgBgColor_:mainColor},
    {name:"Playstation 1" , stockQuantity:21, imgURL:'https://upload.wikimedia.org/wikipedia/commons/2/2c/PlayStationConsole_bkg-transparent.png', brand: 'Playstation', imgBgColor_:mainColor},
    {name:"Playstation 5" , stockQuantity:19, imgURL:'https://gmedia.playstation.com/is/image/SIEPDC/console-left_@1x?fmt=png-alpha&scl=1', brand: 'Playstation', imgBgColor_:mainColor},
    {name:"Xbox One S" , stockQuantity:25, imgURL:'https://assets.xboxservices.com/assets/0b/28/0b2854b9-a7e7-47dd-b4f8-a371567854b2.png?n=Xbox-Series-S_Buy-Box_0_01_829x799.png', brand: 'Xbox', imgBgColor_:mainColor},
    {name:"Xbox Series X" , stockQuantity:25, imgURL:'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png', brand: 'Xbox', imgBgColor_:mainColor}

  ];

  const [searchText, setSearchText] = useState('');
  const [filteredConsoleList, setFilteredConsoleList] = useState(consoleList)


  const sortedConsoleList = consoleList.slice().sort((a, b) => {
    // Primeiro, ordenar por marca
    const brandComparison = a.brand.localeCompare(b.brand);
    if (brandComparison !== 0) {
      return brandComparison;
    }
    // Se as marcas forem iguais, ordenar por nome
    return a.name.localeCompare(b.name);
  });

  const handleSearch = (text) => {
    const filteredConsoles = sortedConsoleList.filter( (item) => item.name.toLowerCase().includes(text.toLowerCase()));

    setFilteredConsoleList(filteredConsoles)
    setSearchText(text)
  }


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>

        <View style={styles.searchMenu}>
          <TextInput style={[styles.searchBar, {marginTop: 20}]} placeholder='Pesquisar' onChangeText={handleSearch} value={searchText}/>
        </View>
        <View style={styles.titleFilterSection}>
          <Text style={{fontWeight: 600, color: mainColor}}>Console List</Text>
        </View>
        <View style={styles.consoleContainer}>
          <FlatList data={filteredConsoleList} contentContainerStyle={{ gap: 20}} renderItem={({item}) =><Console name={item.name} stockQuantity={item.stockQuantity} imgURL={item.imgURL} imgBgColor_= {mainColor}/>}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  ) 
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    gap: 20,
    //backgroundColor: '#6495ED',
    
  },

  searchMenu: {
    flex: 2,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontSize: 16
  },

  searchBar:{
    borderColor: "gray",
    backgroundColor: "#FFF",
    width: "94%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },

  titleFilterSection: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  consoleContainer: {
    flex: 8,
    paddingTop: 3.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

})