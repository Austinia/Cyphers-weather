import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName:"weather-fog",
        gradient: ["#EAEAEA", "#DBDBDB", "#F2F2F2", "#ADA996"],
        title:"안개가 좀 꼈네요..",
        subtitle:"그래도 괜찮을거에요!"
    },
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#0072ff", "#00c6ff"],
        title:"화창하네요!",
        subtitle:"외쳐요 샆할샆~~! 1/5"
    },
    Fog: {
        iconName:"weather-fog",
        gradient: ["#EAEAEA", "#DBDBDB", "#F2F2F2", "#ADA996"],
        title:"안개가 좀 짙네요..",
        subtitle:"그래도 괜찮을거에요!"
    },
    Mist: {
        iconName:"weather-fog",
        gradient: ["#EAEAEA", "#DBDBDB", "#F2F2F2", "#ADA996"],
        title:"안개가 꼈네요",
        subtitle:"그래도 괜찮을거에요!"
    },
    Rain: {
        iconName:"weather-pouring",
        gradient: ["#182848", "#4b6cb7"],
        title:"비가 많이 오네요..",
        subtitle:"서버 상태가 안 좋을 수 있어요"
    },
    Thunderstorm: {
        iconName:"weather-lightning-rainy",
        gradient: ["#4286f4", "#373B44"],
        title:"이런! 폭우에요!",
        subtitle:"서버 상태가 안 좋을 거에요"
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title:"구름이 꼈네요",
        subtitle:"그 정도는 문제가 아니죠!"
    },
    Snow: {
        iconName:"weather-snowy-heavy",
        gradient: ["#757F9A", "#D7DDE8"],
        title:"눈이 오네요!",
        subtitle:"이런 날에는 이벤트를 해주면 좋을텐데요"
    },
    Tornado: {
        iconName:"weather-tornado",
        gradient: ["#292E49", "#536976"],
        title:"이런! 태풍이에요!",
        subtitle:"대피를 해야 해요!"
    },
    Sand: {
        iconName:"weather-fog",
        gradient: ["#333333", "#e9d362"],
        title:"모래바람이 부네요",
        subtitle:"아마 지장 없을 거에요"
    },
    Dust: {
        iconName:"weather-fog",
        gradient: ["#333333", "#e9d362"],
        title:"미세먼지가 많네요",
        subtitle:"출근 하지 말고 사퍼를 해요"
    },
    Smoke: {
        iconName:"weather-fog",
        gradient: ["#414345", "#232526"],
        title:"연기가 좀 끼네요",
        subtitle:"이런 날씨 현상이 있는 줄 아셨나요? 전 몰랐는데요"
    },
    Ash: {
        iconName:"weather-fog",
        gradient: ["#414345", "#232526"],
        title:"화산재가 꼈어요",
        subtitle:"긴급대피로 인해 서버가 닫힐 거에요"
    },
    Drizzle: {
        iconName:"weather-rainy",
        gradient: ["#005AA7", "#FFFDE4"],
        title:"가랑비가 내려요",
        subtitle:"서버에 주의하시면서 플레이 하세요"
    },
    Squall: {
        iconName:"weather-windy",
        gradient: ["#1FA2FF", "#12D8FA", "#A6FFCB"],
        title:"강풍이 불어요",
        subtitle:"서버 상태가 그닥 좋지 않을거에요"
    }
}

export default function Weather({temp, condition}){
    return (
         <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContaioner}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
)
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Ash","Squall","Tornado","Clear","Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize:40,
        color:"white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContaioner: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})