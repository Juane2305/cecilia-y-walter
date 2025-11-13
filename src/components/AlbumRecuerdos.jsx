

import React from "react";

export default function AlbumRecuerdos({ link, color = "#9eba8a" }) {
  return (
    <section className="bg-white py-12 text-center px-6 md:px-20 border-b-4" style={{ borderColor: '#9eba8a' }}>
      <div
        data-aos="fade-up"
        className="max-w-2xl mx-auto bg-[#f8f5f0] border border-[#d8d3c4] rounded-3xl p-8 shadow-sm"
      >
        <p className="text-4xl mb-2">📸</p>
        <h2 className="text-2xl md:text-3xl font-eleganteText mb-4" style={{ color: "#69795d" }}>
          ¡Queremos ver el casamiento a través de sus cámaras!
        </h2>

        <p className="text-lg md:text-xl leading-relaxed font-robotoSerif" style={{ color: "#4b5147" }}>
          Si sacaron fotos o grabaron videos durante la noche, pueden subirlos acá.
          <br />
          ¡Así armamos juntos el álbum de recuerdos más lindo! ❤️
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-colors font-semibold"
          style={{ backgroundColor: color }}
        >
          Subir fotos y videos
        </a>
      </div>
    </section>
  );
}