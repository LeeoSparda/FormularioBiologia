// import {AppRegistry, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {  SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList, StyleSheet, View, TouchableOpacity, Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Text, SubmitText, SubmitButton, Image } from './styles';
    

// export default function Planta() {
  
//  return (
//   <SafeAreaView>
//     <Text>To-Do List</Text>
//     <TextInput />
//   </SafeAreaView>

//   );
// }

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    fontSize: 15,
    color: '#333',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfdfd',
  },
  item: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginTop: 15,
    borderRadius: 3,
  },
  form: {
    flexDirection: 'row',
  },
  fundo:{
    backgroundColor:'#a7c66b',
  },
  botao:{
    height: 150,
    width:  100,
  }
});

const MenuPlanta = () => {

  const navigation = useNavigation();

  const [task, updateTask] = useState('');
  const [tasks, updateTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      updateTasks([...tasks, task]);
      updateTask('');
    }
  };

  //Funcao para criar o item no campo
  const handleRenderTask = ({item}) => 
  <SubmitButton onPress={() => navigation.navigate('Formulario')}>
    <View>
      <SubmitText>{item}</SubmitText>
    </View>
  </SubmitButton>

  return (
  <Background>
    <SafeAreaView>
      <View style={styles.container}>
        <Text>PLANTA</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.field}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={text => updateTask(text)}
            value={task}
            
          />
      
        <TouchableOpacity>
          <SubmitButton onPress={handleAdd}>
            <View>
              <SubmitText>Add</SubmitText>
            </View>
          </SubmitButton>
        </TouchableOpacity>
        </View>
        <FlatList
         // style={styles.botao}
          data={tasks}
          keyExtractor={item => item}
          renderItem={handleRenderTask}
        />
      </View>
    </SafeAreaView>
  </Background>

  );
};

export default MenuPlanta;
