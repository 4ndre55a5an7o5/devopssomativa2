import React, { useState } from 'react';
import './App.css'; // Opcional, para estilização

function App() {
  // 1. Definição dos Estados (States)
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  // 2. Função de Validação
  const handleAcessar = () => {
    const emailCorreto = "eduardo.lino@pucpr.br";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Login</h1>
      
      {/* Input de E-mail */}
      <div>
        <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Input de Senha */}
      <div style={{ marginTop: '10px' }}>
        <input 
          type="password" 
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      {/* Botão de Ação */}
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleAcessar}>Acessar</button>
      </div>

      {/* Label de Mensagem */}
      <div style={{ marginTop: '20px' }}>
        <label><strong>{mensagem}</strong></label>
      </div>
    </div>
  );
}

export default App;