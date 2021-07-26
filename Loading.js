import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>사이퍼즈 서버 날씨 얻어오는 중...</Text>
    </View>
}



const styles = StyleSheet.create({
    container: {
        flex: 1, // 1 : 모든 공간 사용 가능, 2이상 : 형제들을 가지면 형제flex + 본인flex / 본인flex대로 가져감
        justifyContent: "flex-end", //공간 끝까지 컨텐츠
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor:"#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize:50
    }
})