import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Background, Logo, SubmitButton, SubmitText} from './styles';
import { Checkbox, Title } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { Tile } from 'react-native-elements/dist/tile/Tile';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';
import Header  from '../../components/Header';


export default function Formula() {

  const {user: usuario} = useContext(AuthContext)

  const [lista, setLista] = React.useState([
    {descricao: "arvoreta", id: 0, status:false},
    {descricao: "arbusto", id: 1, status:false},  
    {descricao: "herbácea", id: 2, status:false}, 

  ]);
  const [lista2, setLista2] = React.useState([
    {descricao: "alternas", id: 3, status:false},
    {descricao: "verticiladas", id: 4, status:false},
    {descricao: "opostas", id: 5, status:false},
    

  ]);
  const [lista3, setLista3] = React.useState([
    {descricao: "Amostra possui flor", id: 6, status:false},
    {descricao: "Possui Fruto", id: 7, status:false}  

  ]);
  
  function handleSubmit(){
    // Keyboard.dismiss();
  Alert.alert(
    'Confirmando Dados',
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
       { 
        text: 'Continuar',
        onPress: () => handleAdd(lista)
      }
    ]
  )}
  async function handleAdd(_lista){
    let uid = usuario.uid;
    console.log(_lista)
    let key = await firebase.database().ref('form').child(uid).push().key;
    await firebase.database().ref('form').child(uid).child(key).set({
      data: format(new Date(), 'dd/MM/yy hh:mm:ss'),
      Formulario: _lista,
    },)

  }

  function setEstados(item){
    item.status = !item.status;
    setLista(lista.map(value => value.id == item.id ? item: value));
    setLista2(lista2.map(value => value.id == item.id ? item: value));
    setLista3(lista3.map(value => value.id == item.id ? item: value));

    alternas = alternas+1;
    verticiladas = verticiladas+ 1;
    opostas = opostas + 1;
    arvoreta = arvoreta + 1;
    arbusto = arbusto + 1;
    herbácea = herbácea + 1;
    AmostraPossuiFlor = AmostraPossuiFlor + 1;
    
  }

  useEffect(() => {},[])

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
    <Header/>
          <View style={styles.centroImagem}>
          <Logo source={require('../../assets/planta.jpeg')}/>
                    <Text style={styles.centroImagem}>
                    Modo de vida
          </Text>
          </View>

          {ItemLista(lista)}

          <View style={styles.centroImagem}>
            <Text style={styles.centroImagem}>
            Filotaxia Folhas
            </Text>
          </View>

          {ItemLista(lista2)}

          <View style={styles.centroImagem}>
            <Text style={styles.centroImagem}>
              Outras
            </Text>
          </View>

          {ItemLista(lista3)}

        <SubmitButton onPress = {() => handleAdd(lista)}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
  </Background>

  );
}

const styles = StyleSheet.create({
  centroImagem: {
    padding: 8,     
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: 19,
  },
  teste: {
    padding: 20,

  },
 
});