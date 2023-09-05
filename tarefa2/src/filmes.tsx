import React, { useState } from 'react';
import './TabelaFilme.css';

const filmes = [
  {
    "id": 1,
    "nome": "Homem Aranha",
    "genero": "ação",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg"
  },
  {
    "id": 2,
    "nome": "Super Marios Bros. - O Filme",
    "genero": "animação",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
  },
  {
    "id": 3,
    "nome": "Luther: O Cair da Noite",
    "genero": "drama",
    "imagem": "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg"
  },
  {
    "id": 4,
    "nome": "O Beco do Pesadelo",
    "genero": "suspense",
    "imagem": "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg"
  },
  {
    "id": 5,
    "nome": "Guardiães da Galáxia",
    "genero": "aventura",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg"
  },
  {
    "id": 6,
    "nome": "Tudo em Todo o Lugar ao Mesmo Tempo",
    "genero": "comédia",
    "imagem": "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg"
  }
];

const TabelaFilme = () => {
  const [Pesquisa, setPesquisa] = useState('');

  const Mudanca = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPesquisa(event.target.value);
  };

  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(Pesquisa.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Pesquisar filme" value={Pesquisa} onChange={Mudanca} />
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {filmesFiltrados.map(({ id, nome, genero, imagem }) => (
            <tr key={id}>
              <td>
                <img src={imagem} alt={nome} style={{ maxWidth: '100px' }} />
              </td>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{genero}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaFilme;
