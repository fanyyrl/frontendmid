function SongCard({ song, deleteSong, toggleFavorite, delay }) {
  return (
    <div 
      className={`song-card animate-slide-up ${song.isFavorite ? 'favorite-active' : ''}`}
      style={{ animationDelay: `${delay * 0.1}s` }} // Animasi beruntun
    >
      <div className="song-info">
        <h4 className="song-title">{song.title}</h4>
        <p className="song-artist">Oleh: {song.artist}</p>
        <span className="genre-badge">{song.genre}</span>
      </div>

      <div className="card-actions">
        <button 
          onClick={() => toggleFavorite(song.id)} 
          className="btn-fav"
        >
          {song.isFavorite ? "⭐ Favorit" : "☆ Tambah"}
        </button>

        <button 
          onClick={() => deleteSong(song.id)} 
          className="btn-delete"
        >
          Hapus
        </button>
      </div>
    </div>
  )
}

export default SongCard