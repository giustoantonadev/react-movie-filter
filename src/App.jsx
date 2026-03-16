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

  const [select, setSelect] = useState('Tutti')
  const [filteredGenre, setFilteredGenre] = useState(filmList)

  const [search, setSearch] = useState('')

  //filter by genre with select
  useEffect(() => {
    const filteredFilm = filmList.filter(film => select === 'Tutti' || film.genre === select)

    setFilteredGenre(filteredFilm)

  }, [select])

  //filter by title with text
  useEffect(() => {

    const filteredFilm = filmList.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))

    setFilteredGenre(filteredFilm)

  }, [search])

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ width: "25rem" }}>
          <div className="card-header">
            <h1>Film List</h1>
            <input onChange={(e) => setSearch(e.target.value)} value={search} type='search' placeholder='Cerca per Titolo' />

            <select onChange={(e) => setSelect(e.target.value)}>
              <option value='Tutti'>Mostra tutti</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>

          </div>
          <ul className="list-group list-group-flush">

            {filteredGenre.map((film, i) => (
              <li className="list-group-item" key={i}>Title: {film.title}<br></br>Genre: {film.genre}</li>
            ))}

          </ul>
        </div>
      </div>

    </>
  )
}

export default App
