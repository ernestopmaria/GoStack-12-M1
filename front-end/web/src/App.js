import React ,{useState} from 'react';

import Header from './components/Header';

function App(){

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
    
    /*o usestate ira retornar u array com dua posiçoes
    1. variavel com o seu valor inicial
    2*função para atualizar esse valor
    */
    function handleAddProject(){
        //projects.push(`Novo project ${Date.now()}`);
        
        setProjects([...projects,`Novo project ${Date.now()}` ])

        console.log(projects)
    }
    return(
    <>
    
   <Header title ="projects"/>
   
   <ul>
    {projects.map(project => <li key={project}>{project}</li>)}
   </ul>
   <button type="button" onClick={handleAddProject}>Adicionar novo Projecto</button>
    </>
    );
}

export default App;