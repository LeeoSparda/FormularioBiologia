import React, {useState, useContext} from 'react';
import { Platform,SafeAreaView,StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText, } from './styles';
import Header  from '../../components/Header';

export default function SignIn() {
  const navigation = useNavigation();

 return (
   
   <Background>
     <Header/>
      <Container>

      {/* <SubmitButton onPress={ () => navigation.navigate('Planta')}>
        <SubmitText>
                Planta
        </SubmitText>
      </SubmitButton> */}

        <SafeAreaView>
          <View>
            {/* <TouchableOpacity onPress={ () => navigation.navigate('Planta')}> */}
            <TouchableOpacity onPress={ () => navigation.navigate('Planta')}>
              <Image
                source={require('../../assets/planta.jpeg')}
                />
              <View />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={ () => navigation.navigate('Fungo')}>
              <Image
                style={{ height: 150,width:130 ,marginTop: 150}}
                source={require('../../assets/cogumelo.jpeg')}
                />
              <View />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
{/* 
      <SubmitButton onPress={ () => navigation.navigate('Fungo')}>
        <SubmitText>Fungo</SubmitText>
      </SubmitButton> */}

      </Container>
   </Background>
  );
}