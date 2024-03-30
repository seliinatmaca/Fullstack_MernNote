import { useState } from "react";

export default function NoteForm() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [hata, setHata] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const not = { baslik, aciklama };

    const response = await fetch("/api/notlar", {
      method: "POST",
      body: JSON.stringify(not),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setHata(json.hata);
    }

    if (response.ok) {
      setHata(null);
      setBaslik(" ");
      setAciklama(" ");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Yeni Bir Not Ekle</h3>
      <div className="create-group">
        <div>
          <label>Not Başlık:</label>
          <input
            type="text"
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div>
          <label>Not Açıklama:</label>
          <input
            type="text"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
      </div>
      <button type="submit">EKLE</button>
      {hata && <div className="error">{hata}</div>}
    </form>
  );
}
