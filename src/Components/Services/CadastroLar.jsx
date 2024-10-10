import React, { useState } from "react";
import "./CadastroLar.css"; // CSS específico para CadastroLar

function CadastroLar() {
    const [formData, setFormData] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        disponibilidade: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do Cadastro de Lar:", formData);
        // Adicione a lógica de envio dos dados aqui
    };

    return (
        <div className="cadastro-section">
            <h3>Cadastro de Lar Temporário</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do responsável"
                    value={formData.nome}
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
                    name="disponibilidade"
                    placeholder="Disponibilidade"
                    value={formData.disponibilidade}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroLar;

