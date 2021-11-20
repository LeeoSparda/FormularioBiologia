import React, {useEffect, useRef} from "react";
import { useField } from "@unform/core";
import { TextInputComponent, View } from "react-native";

export default function Input({name}){
    const inputRef = useRef(null);
    const {fieldName, registerField, defaultValue, error} = useField(name);

    console.log(inputRef.current);

    useEffect(() => {}, []);

    return(
        <View>
            <TextInput ref={inputRef} />
        </View>
    );

}