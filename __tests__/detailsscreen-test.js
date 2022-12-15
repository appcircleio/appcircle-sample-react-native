import 'react-native'; 
import React from 'react'; 
import DetailsScreen from '../components/detailsscreen'; 
import {fireEvent, render} from '@testing-library/react-native'; 

it('should only accept correct email', () => { 
    const {getByTestId, getByText} = render(<DetailsScreen />); 
    const input = getByTestId('email'); 
    const button = getByText('Login'); 
    
    // Login button starts as disabled 
    expect(button.props.disabled).toBe(true); 
    fireEvent.changeText(input, 'invalid email'); 
    
    // Email is invalid, button is disabled 
    expect(button.props.disabled).toBe(true); 
    fireEvent.changeText(input, 'some@email.com'); 
    
    // Email is valid, button is enabled 
    expect(button.props.disabled).toBe(false); 
});