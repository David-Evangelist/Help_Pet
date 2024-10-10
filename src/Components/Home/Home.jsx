import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";
import LinkButton from '../Button/LinkButton.jsx'; 



function Home() {

    
    
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleTemporaryHomeClick = () => {
        navigate("/cadastrar-lar");
    };

    const handleServicesClick = () => {
        navigate("/cadastrar-ong");
    };

    return (
        <div className="home-section">
            <header className="header">
                <div className="logo">
                    <h1>Help Pet</h1>
                </div>
                <nav className="navbar">
                    <a href="#home"><strong>Home</strong></a>
                    
                    <LinkButton label="Cadastro Lar" onClick={handleTemporaryHomeClick} />
                    <LinkButton label="Cadastro ONG" onClick={handleServicesClick} />
                </nav>
                <div className="button-container">
  <LinkButton label="ENTRAR" onClick={handleLoginClick} />
</div>
               
            </header>

            <div className="welcome-section">
                <h2>Bem-vindo ao Help Pet!</h2>
               
                <p>
                  Junte-se a nós na missão de ajudar animais necessitados. 
                    Explore nossos serviços e faça parte da mudança!
                </p>
            </div>
        </div>
    );
}

export default Home;
