import React, { useState, useEffect, useCallback } from "react";
import { useMappedState } from "redux-react-hook";

export default function Main() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const { loading, agendaCount } = useMappedState(
    useCallback(
      state => ({
        loading: state.loading,
        agendaCount: state.agenda.agenda.length
      }),
      []
    )
  );

  function showResults(e) {
    e.preventDefault();
    return alert(`Você digitou o nome ${name} e o telefone ${phone}`);
  }
  console.log(agendaCount);
  return (
    <div>
      <h1>Teste de usabilidade React Hooks e Redux Hooks</h1>
      <h3>Digite os dados solicitados abaixo:</h3>
      <form onSubmit={e => showResults(e)}>
        <input
          type="text"
          placeholder="Digite o nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Digite o telefone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <br />
        <button type="submit">Gravar</button>
      </form>
    </div>
  );
}
