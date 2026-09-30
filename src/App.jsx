import { useState } from 'react'
import Header from './components/Header'
import SongForm from './components/SongForm'
import SongList from './components/SongList'
import './App.css'

function App() {
  const initialSongs = [
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", isFavorite: true },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran", genre: "Pop", isFavorite: false },
    { id: 3, title: "Yellow", artist: "Coldplay", genre: "Alternative", isFavorite: true },
  ];

  const [songs, setSongs] = useState(initialSongs);
  const [searchQuery, setSearchQuery] = useState("");
  
  // State untuk efek notifikasi pop-up (Toast)
  const [toast, setToast] = useState({ show: false, message: '' });

  // Fungsi untuk memunculkan notifikasi selama 3 detik
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  const addSong = (newSong) => {
    setSongs([newSong, ...songs]);
    showToast(`🎶 Lagu "${newSong.title}" berhasil ditambahkan!`);
  };

  const deleteSong = (id) => {
    const songToDelete = songs.find(s => s.id === id);
    setSongs(songs.filter((song) => song.id !== id));
    showToast(`🗑️ Lagu "${songToDelete.title}" dihapus.`);
  };

  const toggleFavorite = (id) => {
    setSongs(
      songs.map((song) => {
        if (song.id === id) {
          const isFav = !song.isFavorite;
          showToast(isFav ? `⭐ "${song.title}" masuk favorit!` : `❌ "${song.title}" dihapus dari favorit.`);
          return { ...song, isFavorite: isFav };
        }
        return song;
      })
    );
  };

  return (
    <div className="container">
      {/* Efek Notifikasi Pop-up */}
      <div className={`toast-notification ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>

      <Header 
        totalSongs={songs.length} 
        favoriteCount={songs.filter(s => s.isFavorite).length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="main-content">
        <SongForm addSong={addSong} />
        <SongList 
          songs={songs} 
          searchQuery={searchQuery} 
          deleteSong={deleteSong} 
          toggleFavorite={toggleFavorite} 
        />
      </div>
    </div>
  )
}

export default App