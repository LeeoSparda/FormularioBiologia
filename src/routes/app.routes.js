import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
// import New from '../pages/New';
//import Profile from '../pages/Profile';
import Planta from '../pages/Planta';
import Fungo from '../pages/Fungo';
import Cadastro from '../pages/Cadastro';
import Formulario  from '../pages/Formulario';
import Profile from '../pages/Profile';


const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerStyle={{
     backgroundColor: '#8AA358'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeight: 'bold'
        },
        activeTintColor: '#414F29',
        activeBackgroundColor: '#A0BD66',
        inactiveBackgroundColor: '#8AA358',
        inactiveTintColor: '#414F29',
        itemStyle: {
            marginVertical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Planta" component={Planta} />

        <AppDrawer.Screen name="Cadastro" component={Cadastro} />
        <AppDrawer.Screen name="Formulario" component={Formulario} />
        <AppDrawer.Screen name="Perfil" component={Profile}/>

        

    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
