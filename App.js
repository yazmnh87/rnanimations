import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'
import NavigationService from './src/utils/NavigationService'

const App = props => {

  useEffect(()=>{
    NavigationService.navigate('ViewHeightWidth')
  },[])
  return (
    <>
      <AppNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
    </>
  );
};

export default App;
