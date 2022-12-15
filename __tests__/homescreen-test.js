import 'react-native'; 
import React from 'react'; 
import HomeScreen from '../components/homescreen'; 
import renderer from 'react-test-renderer'; 

it('renders correctly', () => { 
    const home = renderer.create(<HomeScreen />); 
    expect(home).toMatchSnapshot(); 
});