// import React , {useState , useEffect} from 'react';
// import MapView , { Marker }  from 'react-native-maps';
// import { StyleSheet, View , FlatList , SafeAreaView , Text , StatusBar } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { Searchbar } from 'react-native-paper';
// import styled from 'styled-components/native';
// import { Search } from './components/search.component'
// import * as Location from 'expo-location';
// import { MosqueCard } from './components/mosque-card.component';
// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";




export default function App() {

  // const [mapRegion , setMapRegion] = useState({
  //         latitude: 37.78825,
  //         longitude: -122.4324,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  // })

  // const [searchQuery, setSearchQuery] = React.useState('');
  // const onChangeSearch = query => setSearchQuery(query);

  // const userLocation = async () => {
  //   let { status } =  await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied');
  //   }

  //   let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
  //   setMapRegion({
  //     latitude : location.coords.latitude,
  //     longitude : location.coords.longitude,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,

  //   });
  // }

  // useEffect(() => {
  //   userLocation();
  // },[])
 
  return (

    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
    // <PaperProvider>
    //   <SafeAreaView >
    //     <View style={styles.container}>
    //       <Search />
    //       {/* <MapView 
    //         region={mapRegion}
    //         style={styles.map} >
    //         <Marker
    //           coordinate={mapRegion}
    //           title="Mosque"
    //         />
            
    //       </MapView> */}
    //       <FlatList
    //         data = {[{name : 1}]}
    //         renderItem = {() => <MosqueCard />}
    //         keyExtractor={item => item.name}
    //         contentContainerStyle={{ padding:16 }}
    //       /> 
              
        
    //     </View>
    //   </SafeAreaView>
    // </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   }
// });