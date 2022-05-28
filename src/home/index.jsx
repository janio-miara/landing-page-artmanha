import React from 'react';
import {Container} from "./styles";
import pessoa from '../assets/pessoa.jpg';
import logo from '../assets/logo.png';
import logoName from '../assets/logo_name.png';

const Home = () => {
    return (
        <Container>
            <div className={'image'}>
                <img src={pessoa}/>
            </div>
            <div className={'wrapper'}>
                <img src={logo} className={'logo'}/>
                <img src={logoName} className={'name'}/>
            </div>
        </Container>
    );
};

export default Home;