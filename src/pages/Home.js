import React from 'react';
import { useHistory } from 'react-router-dom';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'; //Hooks da lib react-redux

//redux com Hooks
function Home(){
    let history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const handleButton = () => {
        setTimeout(() =>{
            history.replace('/sobre');
        }, 2000);
    };

    const handleAlterarNome = () => {
        dispatch({
            type: 'SET_NAME',
            payload: { name: 'Maria'}
        });
    };

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_CONTADOR'
        });
    };

    return(
        <div>
            <h4>Página HOME</h4>

            NOME: {name} <br/> <br/>
            CONTAGEM: {contador}<br/> <br/>

            <button onClick={handleAlterarNome}>Alterar Nome</button>
            <button onClick={handleIncrement}>Adicionar +1</button>
            <br/> <br/>
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}

export default Home;

{/** 
      //redux com connect
   // import { connect } from 'react-redux';
  
const mapStateToProps = (state) => {
    return {
        name: state.usuario.name,
        contador: state.usuario.contador
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name:newName }
        }),
        increment: () => dispatch({
            type: 'INCREMENT_CONTADOR'
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
*/}