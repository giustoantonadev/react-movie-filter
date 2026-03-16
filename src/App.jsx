import { useState, useEffect } from 'react'

const filmList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]



function App() {

  const [select, setSelect] = useState('')
  const [filteredGenre, setFilteredGenre] = useState(filmList)


  useEffect(() => {
    const filteredFilm = filmList.filter(film => film.genre === select)

    setFilteredGenre(filteredFilm)

  }, [select])

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ width: "25rem" }}>
          <div className="card-header">
            <h1>Film List</h1>

            <select onChange={(e) => setSelect(e.target.value)}>
              <option value='tutti'>Tutti i Film</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romance">Romantico</option>
              <option value="Action">Azione</option>
            </select>

          </div>
          <ul className="list-group list-group-flush">

            {filmList.map((film, i) => (
              <li className="list-group-item" key={i}>Title: {film.title}<br></br>Genre: {film.genre}</li>
            ))}

          </ul>
        </div>
      </div>

    </>
  )
}

export default App
