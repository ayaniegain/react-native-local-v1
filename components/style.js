import {StyleSheet} from 'react-native';

export const customStyle = StyleSheet.create({
  heading: {
    color: 'yellow',
    backgroundColor: 'green',
    margin: 20,
    fontSize: 20,
  },
  inputField: {
    backgroundColor: 'white',
    color: 'red',
    padding: 10,
    height: 40,
  },
    clrButton: {
      flexDirection: 'row', // Align children horizontally
      alignItems: 'center',
      justifyContent: 'center', // Center the buttons within the parent
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
    },
    
    buttonWrapper: {
        margin:10,
      marginHorizontal: 20, // Adjust the margin as needed to set the gap between buttons
  },
});
