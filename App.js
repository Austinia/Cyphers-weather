import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "6d3552efef3cabbe617fb7ee4d612298";
const lat = 33.47239800001396;
const lon = 126.48513646293009; //제주시 네오플 좌표

export default class extends React.Component {
  state = {
    isLoading: true //맨처음 시작 로딩중인지?
  }
  getWeather = async (lat, lon) => {
    const { data: { main: { temp }, weather } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    //axios data 객체에 main value밑 온도 value와 weather value를 넣는다.
    this.setState({ isLoading: false, condition: weather[0].main, temp })
    //api에서 가져온 날씨 정보(condition, weather[0].main(날씨), temperture)를 state에 넣는다. isLoading:false로 로딩이 끝난 신호를 보낸다.
  }
  getLocation = async () => {
    try {
      // const response= await Location.requestForegroundPermissionsAsync();
      // console.log(response);
      // const location = await Location.getCurrentPositionAsync(); //33.47239800001396, 126.48513646293009 네오플
      // console.log(location);
      this.getWeather(lat, lon);
      // send to API and get weather!
    } catch (error) {
      Alert.alert("어 버그다!", "제주시에게 알려주기!") // 날씨를 가져오는데 실패
    }

  };
  componentDidMount() { //렌더딩 직후 실행 후 리랜더링?
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state; //state의 3개를 장전
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
    // 로딩중이면 로딩.js 로딩끝나면 temp(소수점 제거)와 condition을 담아서 weather.js를 연다.
  }
}
