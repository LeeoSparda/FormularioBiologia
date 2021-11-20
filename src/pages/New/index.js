import React, {Component} from "react";
import { StyleSheet, Text, View,FlatList,TextInput, Button } from "react-native";



type Props = {};
export default class New extends Component<Props>{

  constructor(props){

    super(props)
    this.state ={
      test:"",
      itens:[
        {desc: "item 1", done: false},
        {desc: "item 2", done: false },

      ]
    }
    this.inserirItem = this.inserirItem.bind(this)
  }

  renderItem(obj){
    return(
      <Text>{obj.item.desc}</Text>
    )
  }

  inserirItem(){
    let newItem = {
      key: this.state.itens.length.toString(),
      desc: this.state.text,
      done: false
    }
    let itens = this.state.itens;
    itens.push(newItem)
    this.setState({itens})

    let text = ""
    this.setState({text})
    // alert(JSON.stringify(this.state))

  }

  render(){
    return(
      <View style={styles.container}>

           <FlatList data={this.state.itens} renderItem={this.renderItem} extraData={this.state}/>
           <View>
             <TextInput onChangeText={(text)=> {this.setState({text})}} value={this.state.text}/>
             <Button onPress={this.inserirItem} title="Inserir"/>
             {/* <TouchableOpacity onPress={ (text) => navigation.navigate('Planta')}/> */}
           </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

// import React from 'react';
// import { View, Text } from 'react-native';

// export default function New() {
//  return (
//    <View>
//        <Text>NEW</Text>
//    </View>
//   );
// }