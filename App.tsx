import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Mutton from './src/components/Mutton/Mutton';
import AntIcon from 'react-native-vector-icons/AntDesign';
const App = () => {
  return (
    <SafeAreaView>
      <View style={{padding: 12}}>
        <Mutton
          type="withIcon"
          align="center"
          text="github"
          icon={<AntIcon name="github" size={24} color="white" />}
          onClick={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
