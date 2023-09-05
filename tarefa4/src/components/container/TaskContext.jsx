import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const adicionarTarefa = tarefa => {
    setTasks([...tasks, tarefa]);
  };

  const excluirTarefa = idTarefa => {
    setTasks(tasks.filter(tarefa => tarefa.id !== idTarefa));
  };

  const alternarTarefa = idTarefa => {
    setTasks(tasks.map(tarefa =>
      tarefa.id === idTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, adicionarTarefa, excluirTarefa, alternarTarefa }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
