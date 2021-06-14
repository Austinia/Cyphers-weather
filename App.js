import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "6d3552efef3cabbe617fb7ee4d612298";
const lat = 33.47239800001396;
const lon = 126.48513646293009;

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(lat, lon) => {
    const { data: {main:{temp},weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading:false, condition: weather[0].main, temp})
  }
  getLocation = async() => {
    try {
      // const response= await Location.requestForegroundPermissionsAsync();
      // console.log(response);
      // const location = await Location.getCurrentPositionAsync(); //33.47239800001396, 126.48513646293009 네오플
      // console.log(location);
      this.getWeather(lat, lon);
      // send to API and get weather!
    } catch (error) {
      Alert.alert("어 버그다!", "제주시에게 알려주기!")
    }

  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
  return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
