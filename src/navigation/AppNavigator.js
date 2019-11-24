import { createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import MainDrawerNavigator from './MainDrawerNavigator';

// const AppStack = createStackNavigator({Main: MainDrawerNavigator})

export default createAppContainer(MainDrawerNavigator)