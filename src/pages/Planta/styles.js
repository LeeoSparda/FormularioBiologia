import styled from 'styled-components/native'


 export const Background = styled.View`
 flex:1;
 background-color:#a7c66b;
 `;

 export const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items: center;
 justify-content: center;
 `;

 export const Logo = styled.Image`
 margin-bottom: 15px;
 `;
 
 export const AreaInput = styled.View`
 flex-direction: row;
 `;
 
 export const Input = styled.TextInput.attrs({
     placeholderTextColor: 'rgba(255,255,255,0.20)'
 })`
 
 background: rgba(0,0,0,0.20);
 width: 90%;
 font-size: 17px;
 color: #FFF;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 7px;
 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 100%;
    border-radius: 7px;
    padding: 15px;

`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 20px;
`;

export const View = styled.View`
    flex-direction: row;
    font-size: 20px;
    color: #FFF;
    background-color: #00cc99;
`;


// export const TextInput = styled.TextIn`
//     border-width: 1;
//     border-color: #dcdcdc;
//     padding: 10;
//     font-size: 15;
//     color: #333;
//     border-radius: 5;
//     flex: 1;
//     margin-right: 10;
// `;
// export const Link = styled.TouchableOpacity`
//     margin-top: 5px;
//     margin-bottom: 9px;
// `;

// export const LinkText = styled.Text`
//     color: #FFF;
// `;

// export const Text = styled.Title `
//     font-weight: bold;
//     font-size: 25px;
//     margin-bottom: 20px;
//     color: #fdfdfd;
// `;
// export const TextInput = styled.Field`
//     border-width: 1px;
//     border-color: '#dcdcdc';
//     padding: 10px;
//     font-size: 15px;
//     color: #333;
//     border-radius: 5px;
//     flex: 1px;
//     margin-right: 10px;
//   `;

// export const View = styled.Button`
//     background-color: #00cc99;
//     flex-direction: row;
//     padding: 5px;
//     border-radius: 5px;
//     justify-content: 'center';
// `;

// export const FlatList = styled.Item `
//     border-width: 1px;
//     border-color: #dcdcdc;
//     padding: 10px;
//     margin-top: 15px;
//     border-radius: 3px;
// `; 
