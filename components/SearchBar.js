import { View, Text } from 'react-native' ;
import React from 'react' ;
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete' ;
import IonicIcons from 'react-native-vector-icons/Ionicons' ;
import AntDesign from 'react-native-vector-icons/AntDesign' ;

/* sunit api
meta-data android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyA2eMyg12YenS-n49gQp-s0rsGJxj1U244"/>
*/

/*
my api 
AIzaSyCU-xjEgEQOC7BVl-0Na36175cDjL4ukCw
*/
export default function SearchBar({cityHandler}) {
  return (
    <View style ={{ marginTop : 15, flexDirection : "row"}}>
      <GooglePlacesAutocomplete
      query={{
            key : 'AIzaSyA2eMyg12YenS-n49gQp-s0rsGJxj1U244',
            language: 'en',
          }} 
      onPress={(data, details  = null) =>{
      console.log(data.description);
      const city = data.description.split(",")[0];
      cityHandler(city);
      }}
      placeholder="Search"
            styles={{
                  textInput : {
                        backgroundColor : "#eee",
                        borderRadius : 20, 
                        fontWeight : "700" ,
                        marginTop : 7 ,
                  },
                  textInputContainer : {
                        backgroundColor : "#eee",
                        borderRadius : 50,
                        flexDirection : "row",
                        alignItems : "center",
                        marginRight : 10, 
                  },
            }}
            renderLeftButton = {()  => ( <View style={{ marginLeft : 10}}>
                  <IonicIcons name="location-sharp" size={24}></IonicIcons>
                  </View>
      )}
      renderRightButton = {() => (
            <View 
            style = {{ 
             flexDirection : "row",
             marginRight : 8, 
             backgroundColor : "white", 
             padding : 9, 
             borderRadius : 30, 
             alignItems : "center",
             }}>
                  <AntDesign name='clockcircle' size={11} style={{marginRight : 8}} />
                  <Text> Search</Text>
            </View>
      )}
      />
    </View>
  )
}

