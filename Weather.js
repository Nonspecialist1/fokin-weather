import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient  } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "I love songs of her, It means foggy, It's Okay not a clue first time I met this, too",
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "How much time do you using this cosmetics ,I think it's lesser than Haze",
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#642B73", "#C6426E"],
        title: "Thunderstorm like a song thunder",
        subtitle: "Just Don't go outside, It's quite dangerous",
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#0f0c29", "#302b63", "#24243e"],
        title: "Rain, poorly",
        subtitle: "Someone like this level of rain",
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#74ebd5", "#ACB6E5"],
        title: "Rain, Really",
        subtitle: "Most people love this when they are indoor only",
    }, 
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#ADA996", "#F2F2F2", "#DBDBDB", "#EAEAEA"],
        title: "Snow, It's getting more nowadays",
        subtitle: "I might remind some kind of memories about this",
    },  
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#CAC531", "#F3F9A7"],
        title: "Clear, Sunny Sunny day",
        subtitle: "Watch out your face skin, keeping your suncream",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title: "Clouds",
        subtitle: "한국말로 하면 구름이 많이 낀..",
    }, 
    Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3C3B3F", "#605C3C"],
        title: "Dusty",
        subtitle: "Causing by China, I think..",
    }, 
};

export default function Weather({temp, condition}){
    return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
            <Text style={styles.temp}>{temp}℃</Text>    
        </View>   
        <View style={styles.textContainer}>
           <Text style={styles.title}>{weatherOptions[condition].title}</Text>
           <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text> 
        </View>
    </LinearGradient>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Dust", "Mist", "Haze"]).isRequired
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 54,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left",
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left",
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1,
    },
});
