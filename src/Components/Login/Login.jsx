import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importe o CSS necessário

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        // Aqui você pode adicionar a lógica de autenticação
        // Por exemplo: verificar se o usuário e a senha estão corretos

        // Após autenticação bem-sucedida, navegue para a página desejada
        navigate("/"); // Navega para a página inicial após o login
    };

    return (
        <div className="login-section">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuário:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
