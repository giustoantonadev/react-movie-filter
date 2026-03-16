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

  const [newFilm, setNewFilm] = useState({ title: '', genre: '' })

  const [addFilm, setAddFilm] = useState([])

  const addFilmForm = (e) => {
    e.preventDefault()
    setAddFilm([...addFilm, newFilm])
    setNewFilm({ title: '', genre: '' })
  }

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
      <header className='text-center p-2 bg-secondary'>
        <form onSubmit={addFilmForm}>
          <input className='m-2' type='text' value={newFilm.title} placeholder='Title' onChange={(e) => setNewFilm({ ...newFilm, title: e.target.value })} required />
          <input type='text' value={newFilm.genre} placeholder='Genre' onChange={(e) => setNewFilm({ ...newFilm, genre: e.target.value })} required />
          <button className='btn btn-warning m-1' type='submit'>Aggiungi Film</button>
        </form>
      </header>

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
            {/* Initial films list */}
            {filteredGenre.map((film, i) => (
              <li className="list-group-item" key={i}>Title: {film.title}<br></br>Genre: {film.genre}</li>
            ))}

            {/* Added films from the form */}
            {addFilm.map((film, i) => (
              <li className="list-group-item" key={i}>Title: {film.title}<br></br>Genre: {film.genre}</li>
            ))}

          </ul>
        </div>
      </div>

    </>
  )
}

export default App
