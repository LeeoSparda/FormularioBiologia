import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
// import New from '../pages/New';
import Profile from '../pages/Profile';
import Planta from '../pages/Planta';
import Fungo from '../pages/Fungo';
import Formulario from '../pages/Formulario';



const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerStyle={{
     backgroundColor: '#a7c66b'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeight: 'bold'
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#00b94a',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#DDD',
        itemStyle: {
            marginVertical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Planta" component={Planta} />
        <AppDrawer.Screen name="Fungo" component={Fungo} />
        <AppDrawer.Screen name="Formulario" component={Formulario} />
        <AppDrawer.Screen name="Perfil" component={Profile} />
        

    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
