import styled from 'styled-components/native'


 export const Background = styled.View`
 flex:1;
 background-color:#a7c66b;
 `;

 export const Container = styled.KeyboardAvoidingView`
 flex:1;
 /* align-items: center; */
 /* justify-content: center; */
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
    height: 50px;
    width: 50%;
    margin-top: 50px;
    margin-left: 100px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;