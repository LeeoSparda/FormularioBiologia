import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Background, Logo, SubmitButton, SubmitText } from './styles';
import { Checkbox, Title, Card, IconButton, Colors, Subheading } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { Tile } from 'react-native-elements/dist/tile/Tile';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';
import Header from '../../components/Header';
import { Planta } from '../bussines/Planta';


export default function Cadastro({ route, navigation }) {
  const [checked, setChecked] = React.useState(false);
  const { user: usuario } = useContext(AuthContext)
  const [listaForm, setListaForm] = useState([]);
  const [planta, setPlanta] = useState(new Planta(route.params.planta));

  useEffect(() => {
    async function loadList() {

        
      let uid = usuario.uid;
      await firebase.database().ref('form')
        .child(uid)
        .orderByChild('date')
        .limitToLast(10).on('value', (snapshot) => {
          setListaForm([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              title: childItem.val().title,
              data: childItem.val().data,
              descriptions: childItem.val().descriptions,
            };
            setListaForm(oldArray => [...oldArray, list].reverse());
            onSnack(true, `dados carregado`, true)
          })
        })

    }

    loadList();
  }, []);

  //snack
  const [visibleSnack, setVisibleSnack] = useState(false);
  const [messageSnack, setMessageSnack] = useState('');
  const [styleSnack, setStyleSnack] = useState(false)
  const onDismissSnackBar = () => setVisibleSnack(false);

  function onSnack(status, message, style) {
    setVisibleSnack(status);
    setMessageSnack(message)
    setStyleSnack(style)
  }

  function onchangeLista(title, data) {
    setListaForm(
      listaForm.map(value =>
        value.title == title ?
          {
            title: value.title,
            descriptions: value.descriptions.map(value2 =>
              value2.descricao == data ?
                { descricao: data, status: !value2.status }
                : { descricao: value2.descricao, status: value2.status })
          } : value
      )
    )
  }
  function ListForm(data) {
    return data.map(value => {
      return (
        <Card style={{ elevation: 2, margin: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title style={{ marginLeft: 15 }}> {value.title}</Title>
            <View></View>
          </View>
          <View>
            {value.descriptions.map(value2 => {
              return (
                <View style={{ marginLeft: 25 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                      status={value2.status ? 'checked' : 'unchecked'}
                      onPress={() => {
                        onchangeLista(value.title, value2.descricao)
                      }}
                    />
                    <Subheading>{value2.descricao}</Subheading>
                  </View>
                </View>
              )
            })}
          </View>
        </Card>
      )

    })
  }
  async function onRegistre(nome, caracteristicas){
    let uid = usuario.uid;
    try {
      let key = await firebase.database().ref('form').child(uid).push().key;
        await firebase.database().ref('planta').child(uid).child(key).set({
            nome: nome,
            caracteristicas:caracteristicas,
            createdAt: format(new Date() , 'yyy/MM/')
        })
        onSnack(true, `Formulário registrado com sucesso`, true)
    } catch (error) {
        console.log('err', error);
        onSnack(true, `Ops! errr: ` + error, false)
    }
}
  return (

    <Background>
      <Header />
      <Title style={{textAlign:'center'}}>{planta.nome}</Title>
      {ListForm(listaForm)}
      <SubmitButton onPress={() => {onRegistre(planta.nome, listaForm) }}>
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