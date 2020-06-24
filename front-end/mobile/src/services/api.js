import axios from 'axios';

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
});

export default api;

/*
se for um emulador pode inser o localhost utilizando o adb reverse tcp:3333 tcp:3333, caso
não funcione podemos usar o ip: 10.0.2.2  
se for num dispositivo fisico use o ip da maquina,
*/