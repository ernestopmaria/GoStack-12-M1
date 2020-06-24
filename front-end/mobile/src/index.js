import React, {useEffect, useState} from 'react';
import { FlatList, Text,StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import api from './services/api';



export default function App(){

    const [repositories, setRespository] = useState([{}]);

    useEffect(()=>{
        api.get('repositories').then(response=>{
            console.log(response.data);
            setRespository(response.data);
        });
    },[]);

    async function handleAddRepository(){
        const response = await api.post('repositories',{
             title:`Novo Repositorio ${Date.now()} `,
            techs:["Node JS",
             "Javascript"
               ],
            url:"https://github.com/ernestopmaria"
            });
            const repositoy = response.data;
        setRespository([...repositories, repositoy])
        }

    return (
        <>
    <SafeAreaView  style={styles.container}>
    <StatusBar barStyle ="dark-content" backgroundColor="#7159c1" />
    <FlatList
        data={repositories}
        keyExtractor={repo=> repo.id}
        renderItem ={({item:repo}) =>(
        <Text style ={styles.repositoy}>
        {repo.title}{repo.techs}
        
        </Text>
    )}
    
    />
    <TouchableOpacity activeOpacity={0.6}
         style={styles.button} 
         onPress ={handleAddRepository}>
         <Text style={styles.buttonText}>
         Adicionar Repositorio</Text>
    </TouchableOpacity>
    </SafeAreaView>
    </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1'
      
    },
    repositoy:{
        color:'#fff',
        fontSize: 15,
        fontWeight:'bold',
        
       
    },
    button:{
        
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:16,

    }



});