import { TaskProvider } from './components/container/TaskContext';
import ListaDeTarefas from './components/container/ListaDeTarefas';
import FormularioTarefa from './components/container/FomularioTarefa';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Lista de Tarefas</h1>
        <FormularioTarefa />
        <ListaDeTarefas />
      </div>
    </TaskProvider>
  );
};

export default App;