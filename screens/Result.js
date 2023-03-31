import React from 'react';
import {View, Text, Image} from 'react-native';

const Result = ({weatherData}) => {
  return (
    <View className="border mx-2 my-2 px-3 dark:border-orange-400">
      {weatherData.length !== 0 ? (
        <>
          <Text className="text-5xl mt-8 text-white text-center dark:text-white">
            {weatherData.name}
          </Text>
          <View className="text-2xl flex justify-around my-2">
            <Text className="text-xl mt-4 p-1 text-white dark:text-white">
              Max Temp: {weatherData.main.temp_max}
            </Text>
            <Text className="text-xl m-1 p-1 text-white dark:text-white">
              Min Temp: {weatherData.main.temp_min}
            </Text>
          </View>
          <View className="flex my-2 items-center">
//             Image is not showing. some issue with the link
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
              }}
            />
            <Text className="text-xl">{weatherData.weather[0].main}</Text>
          </View>
        </>
      ) : (
        <>
          <Text className="text-2xl text-white mt-3 text-center dark:text-white">
            
          </Text>
        </>
      )}
    </View>
  );
};

export default Result;
