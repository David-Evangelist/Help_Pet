// src/Components/Listagem/Listagem.jsx
import React, { useState } from "react";
import ConfirmacaoExclusao from "../Exclusao/ConfirmacaoExclusao"; // Certifique-se de que o caminho está correto
import './Listagem.css'; // Certifique-se de criar esse arquivo CSS

function Listagem() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]); // Mantenha a lista aqui

    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        // Remove o item da lista
        setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
        console.log(`Item ${itemToDelete} excluído.`);
        setModalOpen(false);
        setItemToDelete(null);
    };

    const handleCancelDelete = () => {
        setModalOpen(false);
        setItemToDelete(null);
    };

    return (
        <div className="listagem-container">
            <h1>Lista de Itens</h1>
            <div className="cards-container">
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <h3>{item}</h3>
                        <button className="delete-button" onClick={() => handleDeleteClick(item)}>Excluir</button>
                    </div>
                ))}
            </div>

            <ConfirmacaoExclusao 
                isOpen={isModalOpen} 
                onClose={handleCancelDelete} 
                onConfirm={handleConfirmDelete} 
            />
        </div>
    );
}

export default Listagem;
