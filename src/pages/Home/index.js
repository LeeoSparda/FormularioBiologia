import React, { useState, useContext, useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText, } from './styles';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { List, Title, Card, IconButton, Colors, Subheading } from 'react-native-paper';

export default function SignIn() {
  const navigation = useNavigation();
  const { user: usuario } = useContext(AuthContext)
  const [plantas, setPlantas] = useState([]);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    async function loadList() {
      try {

        let uid = usuario.uid;
        await firebase.database().ref('planta')
          .child(uid)

          .limitToLast(10).on('value', (snapshot) => {
            setPlantas([]);

            snapshot.forEach((childItem) => {
              let list = {
                key: childItem.key,
                nome: childItem.val().nome,
                caracteristicas: childItem.val().caracteristicas,

              };
              console.log(list)
              setPlantas(oldArray => [...oldArray, list].reverse());
              onSnack(true, `dados carregado`, true)
            })
            console.log(plantas)
          })
      } catch (error) {
        console.log(error);
      }


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
  function listPlantas(data) {
    console.log(data.caracteristicas)
    return data.map(planta => {
      return (
        
          <List.Accordion title={planta.nome} style={{backgroundColor:'#95B05F'}}>
            {planta.caracteristicas.map(caract => {
               return caract.descriptions.map(desc =>{ 
                 if(desc.status)
                  return (
                    <>
                      <List.Item title={desc.descricao} />
                    </>
                  );
                })
            
            })}

          </List.Accordion>


      )

    })

  }
  return (

    <Background>
      <Header />
      <Title style={{textAlign: 'center'}}>Plantas</Title>

        {listPlantas(plantas)}

      {/* <SubmitButton onPress={ () => navigation.navigate('Planta')}>
        <SubmitText>
                Planta
        </SubmitText>
      </SubmitButton> */}


      {/* 
      <SubmitButton onPress={ () => navigation.navigate('Fungo')}>
        <SubmitText>Fungo</SubmitText>
      </SubmitButton> */}


    </Background>
  );
}