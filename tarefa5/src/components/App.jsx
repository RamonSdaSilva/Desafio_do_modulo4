import { useTheme } from './ThemeContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#fff')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#333')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.theme === 'dark' ? '#fff' : '#333')};
  color: ${(props) => (props.theme === 'dark' ? '#333' : '#fff')};
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
`;

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Wrapper theme={theme}>
      <h1>Tema {theme === 'dark' ? 'Escuro' : 'Claro'}</h1>
      <Button theme={theme} onClick={toggleTheme}>
        Alternar Tema
      </Button>
    </Wrapper>
  );
}

export default App;
