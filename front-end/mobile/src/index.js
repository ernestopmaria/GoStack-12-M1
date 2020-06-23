import React, {useEffect, useState} from 'react';
import { View, Text,StyleSheet, StatusBar } from 'react-native';
import api from './services/api';



export default function App(){

    const [repositories, setRespository] = useState([]);

    useEffect(()=>{
        api.get('repositories').then(response=>{
            console.log(response.data);
            setRespository(response.data);
        });
    },[]);

    return (
        <>
        <StatusBar barStyle ="dark-content" backgroundColor="#7159c1" />
    <View style ={styles.container}>
        <Text style ={styles.title}>Hello Gostasck</Text>
    </View>
    </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color:'#fff',
        fontSize: 30,
        fontWeight:'bold',
        
       
    }



});