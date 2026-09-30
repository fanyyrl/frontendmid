import { useState } from 'react'
import SongCard from './SongCard'

function SongList({ songs, searchQuery, deleteSong, toggleFavorite }) {
  const [filterGenre, setFilterGenre] = useState('All');

  const filteredSongs = songs.filter((song) => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = filterGenre === 'All' || song.genre === filterGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="list-container animate-fade-in">
      <div className="filter-bar">
        <h3>Daftar Putar ({filteredSongs.length})</h3>
        
      <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)}>
          <option value="All">Semua Genre</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="R&B">R&B</option>
          <option value="Jazz">Jazz</option>
          <option value="Alternative">Alternative</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="K-Pop">K-Pop</option>
          <option value="EDM">EDM</option>
          <option value="Indie">Indie</option>
          <option value="Acoustic">Acoustic</option>
          <option value="Classical">Classical</option>
        </select>
      </div>

      {filteredSongs.length === 0 ? (
        <p className="empty-state">Tidak ada lagu yang ditemukan. 🍃</p>
      ) : (
        <div className="song-grid">
          {filteredSongs.map((song, index) => (
            <SongCard 
              key={song.id} 
              song={song} 
              deleteSong={deleteSong} 
              toggleFavorite={toggleFavorite} 
              delay={index} // Mengirim index untuk efek delay animasi
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SongList