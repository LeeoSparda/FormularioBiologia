import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
  SubmitText, Link, LinkText} from './styles';
import { Checkbox, Title } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { Tile } from 'react-native-elements/dist/tile/Tile';


export default function Formula() {
  var listaFormulario = [
    {descricao: "textura1", id: 0, status:false},
    {descricao: "textura2", id: 1, status:false},
    {descricao: "ramificacao", id: 2, status:false} 
  ];

  const [lista, setLista] = React.useState([]);

  function setEstados(item){
    item.status = !item.status;
    setLista(lista.map(value => value.id == item.id ? item: value));

  }

  useEffect(() => {setLista(listaFormulario)},[])

  function ItemLista(_listaDeFormulario){
    return _listaDeFormulario.map(item => {
      return (
        
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
          <Checkbox
            color= '#FFF'

            status={item.status ? 'checked' : 'unchecked'}
            onPress={() => {
              setEstados(item)                  
            }}
          />
          <Title>
            {item.descricao}
          </Title>
        </View>
      );
    });
  }
 return (

  <Background>
          <View style={styles.centroImagem}>
          <Logo source={require('../../assets/planta.jpeg')}/>
          </View>
          <Text>
            Formulario
          </Text>
          {ItemLista(lista)}
          
  </Background>

  );
}

const styles = StyleSheet.create({
  centroImagem: {
    padding: 20,     
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  teste: {
    padding: 20,

  },
 
});