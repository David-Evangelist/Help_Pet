// src/Components/ConfirmacaoExclusao.jsx
// src/Components/Exclusao/ConfirmacaoExclusao.jsx
import React from "react";
import "./ConfirmacaoExclusao.css"; // Certifique-se de que este arquivo CSS existe

function ConfirmacaoExclusao({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirmar Exclusão</h2>
                <p>Tem certeza de que deseja excluir este registro?</p>
                <div className="modal-buttons">
                    <button className="confirm-button" onClick={onConfirm}>Confirmar</button>
                    <button className="cancel-button" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmacaoExclusao;
