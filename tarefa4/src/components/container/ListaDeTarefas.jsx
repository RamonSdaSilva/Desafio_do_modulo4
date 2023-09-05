import React from 'react';
import { useTaskContext } from './TaskContext';

const ListaDeTarefas = () => {
  const { tasks, excluirTarefa, alternarTarefa } = useTaskContext();

  return (
    <ul>
      {tasks.map(tarefa => (
        <li key={tarefa.id}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => alternarTarefa(tarefa.id)}
          />
          {tarefa.texto}
          <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTarefas;
