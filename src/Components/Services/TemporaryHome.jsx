import React from "react";
import { useNavigate } from "react-router-dom";
import "./TemporaryHome.css"; // Importação dos estilos

function TemporaryHome() {
    const navigate = useNavigate();

    const handleCadastroOngClick = () => {
        navigate("/cadastrar-ong");
    };

    const handleCadastroLarClick = () => {
        navigate("/cadastrar-lar");
    };

    return (
        <div className="temporary-home-section">
            <h1>Ofereça um Lar Temporário para Cães</h1>
            <p>
                Ajude a dar um lar temporário para cães necessitados enquanto aguardam adoção. 
                Oferecemos suporte para famílias que queiram acolher um animal.
            </p>
            <h2>Como funciona?</h2>
            <p>
                Ao oferecer um lar temporário, você recebe orientações e apoio completo sobre cuidados
                com o animal, além de estar contribuindo diretamente para a causa.
            </p>
            <button className="cta-button" onClick={handleCadastroOngClick}>
                Cadastrar ONG
            </button>
            <button className="cta-button" onClick={handleCadastroLarClick}>
                Cadastrar Lar Temporário
            </button>
        </div>
    );
}

export default TemporaryHome;
