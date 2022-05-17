import React from 'react' ;
import { View , Text , Image ,TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' ;

export const localRestaurants = [{
  name : "Agrawal Caterers",
  image_url : "https://images.unsplash.com/photo-1609540969455-ad5ea19be121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  categories : ["Bakery" , "Mithai"],
  price : " ₹ 200" ,
  reviews : 1430,
  ratings : 4.5 ,
},
{
  name : "Doodh Mistha B",
  image_url : "https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  categories : ["Sonpapdi" , "Lassi"],
  price : " ₹ 220" ,
  reviews : 1390,
  ratings : 4.4 ,
},
{
  name : "Jodhpur Sweets",
  image_url : "https://images.unsplash.com/photo-1571741443170-97e080e5b808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  categories : ["Milkcakes" , "Pastry"],
  price : " ₹ 400" ,
  reviews : 1575,
  ratings : 4.7 ,
},
]



export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom : 30}}>
    {props.restaurantData.map((restaurant, index) =>(
          <View key={index} style = {{marginTop : 10 , padding : 15, backgroundColor : "white"}}>
          <RestaurantImage image={restaurant.image_url}/>
          <RestaurantInfo name={restaurant.name} ratings={restaurant.ratings}
          />
        </View>
    ))}
    </TouchableOpacity>
  );
}


const RestaurantImage = (props) => (
  <>
      <Image 
      source = {{
        uri : props.image,
      }}
      // !!  changes heoght to 100 for best android view
      style ={{ width : "100%" , height : 350,}}
      // source = {require('../assets/images/rest.jpg')} 
      />
    <TouchableOpacity style={{position : "absolute", right : 20, top : 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white"/>
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={{flexDirection : "row", justifyContent : "space-between", alignItems : "center", marginTop : 10}}>
  <View>
  <Text style={{fontSize : 15, fontWeight : 'bold'}}>{props.name}</Text>
  <Text style={{fontSize : 13, color : "green"}}>30-45  Min</Text>
  </View>
  <View  style=
  {{ backgroundColor : "#eee", height : 30, width : 30, alignItems : "center", borderRadius : 15, justifyContent : "center"}}>
  <Text style = {{ color : "blue" }}>{props.ratings}</Text>
  </View>
  </View>
)