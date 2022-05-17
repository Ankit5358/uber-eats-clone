import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';
import BottomTabs from '../components/BottomTabs';
import { Divider } from 'react-native-elements';
import { useState, useEffect } from 'react';

//new header for webview
/*
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
*/

// const RAPID_API_KEY = "c509507e15msha30481c25b2f2c2p18ab0ejsnffe31e3ef2d9" ;
// const YELP_API_KEY  Old= "reKpWJOtZHyU93Xn6MkdRvzxEF3PgoRpc_fdeRr7y253A1shQcIAJeNiEEceyXbcxr2Iqq16_RBZ_gQQYIiNRXgHPpVez0BpWIAvnKIMAB6kAZcl_A1_mwyqgj96YnYx";
const YELP_API_KEY = "V7KfSK0PO4rz6OD6VXe6eJ9OQUucRiA_t_rOVSMgHIilrQVIk6aulGXhCpudwfcczPemxfEAc9QSPWdjBe4FrlwBqxZw2l6j22g6GK4hMIRwbUbf9wfC1hLDI-R8YnYx";


export default function Home() {

  const  [ restaurantData , setRestaurantData ] = useState(localRestaurants);
  const [city, setCity] = useState("Texas");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
  const apiOptions = {
    headers : {
      // Authorization : `Bearer ${YELP_API_KEY}`,
      'Authorization': 'Bearer ' + YELP_API_KEY,
    },
  };    
  return fetch(yelpUrl, apiOptions)
  .then((res) => res.json())
  .then((json) => setRestaurantData(
    json.businesses.filter((business) => 
    business.transactions.includes(activeTab.toLowerCase ())
    )
  )
  );
};  
  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

return (
    <SafeAreaView style= {{ backgroundColor : "#eee" , flex : 1}}>
      <View style = {{ backgroundColor : "white" , padding : 15}}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SearchBar cityHandler={setCity}  />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <RestaurantItems restaurantData = {restaurantData} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
    </SafeAreaView>
  );
}