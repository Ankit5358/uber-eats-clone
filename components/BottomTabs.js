import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' ;

export default function BottomTabs() {
  return (
    <View style={{
            flexDirection : "row", 
            margin : 10,
            marginHorizontal : 30,
            justifyContent : "space-between",
    }}
    >
     <Icon icon="house-user" text="Home" />
     <Icon icon="search-location" text="Browse" />
     <Icon icon="shopping-basket" text="Grocery" />
     <Icon icon="file-invoice-dollar" text="Orders" />
     <Icon icon="user-ninja" text="Account" />
    </View>
  );
}


const Icon = (props) => (
      <TouchableOpacity>
      <View>
      <FontAwesome5 name={props.icon} size ={25} style={{
            marginBottom : 3,
            alignSelf : 'center',
      }}
      />
      <Text>{props.text}</Text>
      {/* <Text>Browse</Text>
      <Text>Grocery</Text>
      <Text>Orders</Text>
      <Text>Account</Text> */}
      </View>
      </TouchableOpacity>
);