import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FormVerify() {
  const [headline, setHeadline] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verifikasi berita:", { headline, link });

    // TODO: Tambahkan logika untuk menghubungkan ke backend atau API verifikasi
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Verifikasi Berita</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Headline/Nama Berita"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="url"
          placeholder="Link Berita"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Verifikasi/Deteksi
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5">Truthly App</h1>
      <FormVerify />
      {/* Tambahkan komponen lain jika ada */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);