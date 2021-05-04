import React from 'react';
import { connect } from 'react-redux';

function Login(props){

    const handleMudarNome = () => {
        props.setName("Felipe");
    }

    return(
        <div>
            <h4>Página LOGIN</h4>

            Meu nome é: {props.name} <br/> <br/>
            <button onClick={handleMudarNome}>Trocar Nome</button>
        </div>
    );
}

const mapStateToProps = state => ({
    name: state.usuario.name
});

const mapDispatchToProps = dispatch => ({
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
