import { useState } from 'react'

function SongForm({ addSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('Pop');
  
  // State untuk efek tombol
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !artist.trim()) return;

    // Mengaktifkan efek loading tombol selama setengah detik
    setIsSubmitting(true);
    
    setTimeout(() => {
      addSong({ id: Date.now(), title, artist, genre, isFavorite: false });
      setTitle('');
      setArtist('');
      setGenre('Pop');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>Tambah Lagu Baru</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Judul Lagu</label>
          <input 
            type="text" 
            placeholder="Masukkan judul lagu..." 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Artis / Musisi</label>
          <input 
            type="text" 
            placeholder="Masukkan nama artis..." 
            value={artist} 
            onChange={(e) => setArtist(e.target.value)} 
            required 
          />
        </div>

       <div className="form-group">
          <label>Genre</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
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

        <button type="submit" className={`btn-add ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? 'Menambahkan... ⏳' : 'Tambah ke Playlist ✨'}
        </button>
      </form>
    </div>
  )
}

export default SongForm