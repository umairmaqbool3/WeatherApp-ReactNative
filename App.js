import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Result from './screens/Result';
import Search from './screens/Search';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);

  const changeSearch = value => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    console.log('1============> show is  : ', show);
    setShow(true);
    console.log('============> In search weather handler : ', search);
    console.log('2============> show is  : ', show);
    if (search !== '') {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`,
        )
        .then(response => {
          console.log(response.data);
          if (history.indexOf(search) === -1) {
            setHistory([...history, search]);
          }
          setWeather(response.data);
          setShow(false);
        })
        .catch(error => {
          console.log(error);
          setShow(false);
        });
    }
  };

  const historySearchHandler = async data => {
    await setSearch(data);
    setShow(true);
    setSearch(data);
    if (data !== '') {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`,
        )
        .then(response => {
          if (history.indexOf(data) === -1) {
            setHistory([...history, data]);
          }
          // console.log(response.data);
          setWeather(response.data);
          setShow(false);
        })
        .catch(error => {
          console.log(error);
          setShow(false);
        });
    }
  };

  return (
    <View className="mt-8 px-2">
      <Text className="text-5xl text-center text-white dark:text-orange-400">
        Weather App
      </Text>
      <Text className="mb-5"></Text>
      <View className="px-4">
        <View className="mx-5 flex flex-row justify-evenly shadow-lg">
          <TextInput
            className="border border-white text-white w-full  p-3 text-2xl dark:border-orange-400"
            onChangeText={e => setSearch(e)}
            value={search}
            placeholder="Enter city name..."
            placeholderTextColor="#fff"
          />
          <TouchableOpacity
            onPress={searchWeatherHandler}
            className="p-3 bg-slate-600 dark:bg-orange-400 items-center">
            <Text className="text-lg text-white dark:bold">Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ActivityIndicator
        size={80}
        style={styles.indicator}
        color="white"
        animating={show}
      />
      <Result weatherData={weather} />

      <Text className=" text-3xl text-center block font-bold mt-2">
        History
      </Text>

      <View className="w-full grid sm:grid-cols-2 gap-4 shadow-lg p-3">
        {history.map((item, index) => {
          return (
            <View
              className="border border-white cursor-pointer p-4"
              key={index}>
              <Text
                className="text-2xl text-center"
                onPress={() => historySearchHandler(item)}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default App;
