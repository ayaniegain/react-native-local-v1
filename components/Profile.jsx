import {Button, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {customStyle} from './style';
import {useState} from 'react';

const Profile = () => {
  const [Inpvalue, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };

  console.log(Inpvalue);
  return (
    <View>
      <Text style={[customStyle.heading, {color: 'blue'}]}>Hi Im Profile  </Text>
      <TextInput
        onChangeText={val => setValue(val)}
        value={Inpvalue}
        placeholder="enter text"
        style={customStyle.inputField}
      />
      <View style={customStyle.clrButton}>
        <View style={customStyle.buttonWrapper}>
          <Button onPress={handleClear} title="clear" />
        </View>
        <View style={customStyle.buttonWrapper}>
          <Button onPress={handleClear} title="clear2" />
        </View>
      </View>
    </View>
  );
};

export default Profile;
