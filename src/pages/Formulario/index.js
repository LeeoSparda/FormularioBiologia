import { Form } from '@unform/mobile';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Title, Surface, TextInput, Snackbar, Text, Card, Modal, Portal, Subheading, Divider, IconButton, Colors, Button } from 'react-native-paper';
import {Background} from './styles'
/**
 * objetos
 */
import { FormPlanta } from '../bussines/FormPlanta'
/**
 * imprts firebase
 */
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

export default function Formulario() {

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const [title, setTitle] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [form, setForm] = React.useState(new FormPlanta('vazio'));
    const [formS, setFormS] = React.useState([]);

    const { user: usuario } = useContext(AuthContext)


    useEffect(() => {
        async function loadList() {
            let uid = usuario.uid;
            await firebase.database().ref('form')
                .child(uid)
                .orderByChild('date')
                .limitToLast(10).on('value', (snapshot) => {
                    setFormS([]);
                    snapshot.forEach((childItem) => {
                        let list = {
                            key: childItem.key,
                            title: childItem.val().title,
                            data: childItem.val().data,
                            descriptions: childItem.val().descriptions,
                        };
                        setFormS(oldArray => [...oldArray, list].reverse());
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
  
    function pushDescription(_description) {
        form.setDescricao(_description);
        setDescricao('');
    }
  
    async function saveForm(_lista) {
        let uid = usuario.uid;
        try {
            let key = await firebase.database().ref('form').child(uid).push().key;
            await firebase.database().ref('form').child(uid).child(key).set({
                data: format(new Date(), 'dd/MM/yy hh:mm:ss'),
                title: _lista.title,
                descriptions: _lista.descriptions
            })
            onSnack(true, `Formulário registrado com sucesso`, true)
        } catch (error) {
            console.log('err', error);
            onSnack(true, `Ops! errr: ` + error, false)
        }
    }
    async function handleDeleteSuccess(data) {
        try {
            let uid = usuario.uid;
            await firebase.database().ref('form')
                .child(uid).child(data.key).remove()
                .then(async () => {
                    onSnack(true, `Deletado com sucesso`, true)
                })
                .catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.log('error', error)
            onSnack(true, `Error: ` + error, false)
        }

    }
    function ListForm(data) {
        return data.map(value => {
            console.log(value)
            return (
                <Card style={{ elevation: 2, margin: 5, backgroundColor: '#95B05F' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Title style={{ marginLeft: 15 }}>{value.title}</Title>
                        <IconButton
                            icon="delete"
                            color={Colors.red500}
                            size={20}
                            onPress={() => handleDeleteSuccess(value)}
                        />
                    </View>
                    <View>
                        {value.descriptions.length > 0 ? value.descriptions.map(value2 => {

                            return (
                                <View style={{ marginLeft: 25 }}>
                                    <Subheading>{value2.descricao}</Subheading>
                                </View>
                            )
                        }): null }
                    </View>
                </Card>
            )

        })
    }
    function itemForm(data) {
        return data.descriptions.map((value) => {
            if (value)
                return (
                    <View style={{ marginLeft: 10 }}>
                        <Text>{value.descricao}</Text>
                    </View>
                );
            else
                null;
        })
    }
    return (
        <Background style={{ flex: 1 }}>
      <Header />
            <Button style={{ marginTop: 30 }} onPress={showModal}>
                Novo Forumário
            </Button>

            <Title style={{ textAlign: 'center', margin: 15 }}>Formulários cadastrados</Title>
            {ListForm(formS)}
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={{ width: '80%', marginTop: 10, marginBottom: 10 }}
                            label="Titulo"
                            value={title}
                            onChangeText={setTitle}
                        />
                        <IconButton
                            icon="plus-circle"
                            color={Colors.red500}
                            size={35}
                            onPress={() => setForm(new FormPlanta(title))}
                        />
                    </View>
                    <Divider></Divider>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={{ width: '80%', marginTop: 10, marginBottom: 10 }}
                            label="Descrição"
                            value={descricao}
                            onChangeText={setDescricao}
                        />
                        <IconButton
                            icon="plus-circle"
                            color={Colors.red500}
                            size={35}
                            onPress={() => pushDescription(descricao)}
                        />
                    </View>
                    <Text>{form.title}</Text>
                    {itemForm(form)}
                    <Button mode="contained" onPress={() => saveForm(form)}>
                        Salvar
                    </Button>
                </Modal>
            </Portal>
            <Snackbar
                visible={visibleSnack}
                style={styleSnack ? { backgroundColor: '#00C441' } : { backgroundColor: '#f64a4a' }}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'ok',
                    onPress: () => { onDismissSnackBar }
                }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>
                    {messageSnack}
                </Text>
            </Snackbar>
        </Background>
    );
}

