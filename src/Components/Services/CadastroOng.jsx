import React, { useState } from "react";
import "./CadastroOng.css"; // CSS específico para CadastroOng

function CadastroOng() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do Cadastro de ONG:", formData);
        // Adicione a lógica de envio dos dados aqui
    };

    return (
        <div className="cadastro-section">
            <h3>Cadastro de ONG</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome da ONG"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroOng;
