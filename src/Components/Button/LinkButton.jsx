import '../Button/Button.css';  // Importa o CSS globalmente

function LinkButton({ label, onClick }) {  // Corrigido nome do componente
    return (
        <div>
            <button className="linkButton" onClick={onClick}>  {/* Adicionado o onClick */}
                <b>{label}</b>
            </button>
        </div>
    );
}

export default LinkButton;
