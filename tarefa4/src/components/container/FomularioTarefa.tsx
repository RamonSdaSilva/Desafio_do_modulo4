import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

const FormularioTarefa = () => {
  const [textoTarefa, setTextoTarefa] = useState('');
  const { adicionarTarefa } = useTaskContext();

  const adicionarTarefaHandler = () => {
    if (textoTarefa.trim() !== '') {
      const novaTarefa = { id: Date.now(), texto: textoTarefa, concluida: false };
      adicionarTarefa(novaTarefa);
      setTextoTarefa('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={textoTarefa}
        onChange={e => setTextoTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefaHandler}>Adicionar</button>
    </div>
  );
};

export default FormularioTarefa;
