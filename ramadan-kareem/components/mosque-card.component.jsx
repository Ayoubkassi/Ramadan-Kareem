import React from 'react'
import styled from 'styled-components/native';
import { StyleSheet, View , Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';



const CardContainer = styled.View`
  position : absolute;
  z-index : 999;
  bottom : 30px;
  width : 160px;
  margin-left : 2%;
  background-color : #041024;
  height : 160px;
//   border : 1px solid black;
  -webkit-box-shadow: 0 0 10px #fff;
  box-shadow: 0 0 10px #fff;
 border-radius : 10px;
  padding-left : 8px;
  
`;

const MyImage = styled.Image`
    border-radius : 50px;
    height : 50px;
    width : 50px;
    margin-top : 5px;
`



export const MosqueCard = () => {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Tangerine-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
      <CardContainer>
        <View style={styles.layout}>
          <MyImage source={{  uri : 'https://exploreparis.com/7788/great-mosque-of-paris-virtual-conference.jpg'}} />
          <Text style={styles.text}>Jamaa Sunah</Text>
        </View>
        <Text style={styles.status}>Status : Available</Text>
        <Text style={styles.status}>Rating : 4.5</Text>
        <View style={styles.layout}>
          <Ionicons name="star" size={22} color="white" />
          <Ionicons name="star" size={22} color="white" />
          <Ionicons name="star" size={22} color="white" />
          <Ionicons name="star" size={22} color="white" />
          <Ionicons name="star" size={22} color="white" />
        </View>
      </CardContainer>
  )
}

const styles = StyleSheet.create({
  layout: {
    flexDirection:'row',
    alignItems : 'center',
    marginTop : 5,
  },
  text:{
    marginLeft : 6,
    fontWeight : '400',
    color : 'white'
  },
  status:{
    marginTop: 8,
    color : 'white'
  }
  
});

