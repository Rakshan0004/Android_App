import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';


function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;