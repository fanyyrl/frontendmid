function Header({ totalSongs, favoriteCount, searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <h1 className="title-animate">☁️ Sky Playlist Manager</h1>
      
      <div className="stats-bar">
        <span>Total Lagu: <strong>{totalSongs}</strong></span>
        <span>Lagu Favorit: <strong>{favoriteCount}</strong></span>
      </div>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Cari judul lagu atau artis..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  )
}

export default Header