import React,{useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Search = (props) => {
  const searchInput = useRef();
  return (
    <View className="px-4">
      <View className="mx-5 flex flex-row justify-evenly shadow-lg">
        <TextInput
          className="border border-black w-full  p-3 text-2xl dark:border-white"
          onChangeText={(e) => props.eventHandler(e.target.value)}
          value={props.searchData}
          placeholder="Enter city name..."
        />
        <TouchableOpacity
          onPress={props.searchWeather}
          className="p-3 bg-slate-600 dark:bg-orange-400 items-center">
          <Text className="text-lg text-white dark:bold">Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
