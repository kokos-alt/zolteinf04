import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import z1 from './kwiat1.jpg';
import z2 from './kwiat2.jpg';
import z3 from './kwiat3.jpg';
import z4 from './zwierze1.jpg';
import z5 from './zwierze2.jpg';
import z6 from './zwierze3.jpg';
import z7 from './zwierze4.jpg';
import z8 from './zwierze5.jpg';
import z9 from './zwierze6.jpg';
import z10 from './samochod1.jpg';
import z11 from './samochod2.jpg';

function App() {
  const ogarnianieZdjec = [
    { id: 1, alt: "Kwiat 1", src: z1, kategoria: 1, pobrania: 10 },
    { id: 2, alt: "Kwiat 2", src: z2, kategoria: 1, pobrania: 5 },
    { id: 3, alt: "Kwiat 3", src: z3, kategoria: 1, pobrania: 7 },
    { id: 4, alt: "Zwierze 1", src: z4, kategoria: 2, pobrania: 3 },
    { id: 5, alt: "Zwierze 2", src: z5, kategoria: 2, pobrania: 6 },
    { id: 6, alt: "Zwierze 3", src: z6, kategoria: 2, pobrania: 11 },
    { id: 7, alt: "Zwierze 4", src: z7, kategoria: 2, pobrania: 9 },
    { id: 8, alt: "Zwierze 5", src: z8, kategoria: 2, pobrania: 4 },
    { id: 9, alt: "Zwierze 6", src: z9, kategoria: 2, pobrania: 13 },
    { id: 10, alt: "Samochod 1", src: z10, kategoria: 3, pobrania: 25 },
    { id: 11, alt: "Samochod 2", src: z11, kategoria: 3, pobrania: 1 }
  ];

  const [zdjecia, dobieranieZdjec] = useState(ogarnianieZdjec);

  const [pokazKwiaty, ustawPokazKwiaty] = useState(true);
  const [pokazZwierzeta, ustawPokazZwierzeta] = useState(true);
  const [pokazAuta, ustawPokazAuta] = useState(true);

  const pobieranko = (id) => {
    const zaktualizowaneZdjecia = zdjecia.map(zdjecie => {
      if (zdjecie.id === id) {
        return { ...zdjecie, pobrania: zdjecie.pobrania + 1 };
      }
      return zdjecie;
    });

    dobieranieZdjec(zaktualizowaneZdjecia);
  };

  const przefiltrowaneZdjecia = zdjecia.filter(zdjecie => {
    if (zdjecie.kategoria === 1 && pokazKwiaty) return true;
    if (zdjecie.kategoria === 2 && pokazZwierzeta) return true;
    if (zdjecie.kategoria === 3 && pokazAuta) return true;
    return false;
  });

  return (
    <div className="container mt-4">
      <h1>Kategorie zdjęć</h1>

      
      <div className="mb-4 d-flex gap-4 flex-wrap">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={pokazKwiaty}
            onChange={() => ustawPokazKwiaty(!pokazKwiaty)}
          />
          <label className="form-check-label">Kwiaty</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={pokazAuta}
            onChange={() => ustawPokazAuta(!pokazAuta)}
          />
          <label className="form-check-label">Samochody</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={pokazZwierzeta}
            onChange={() => ustawPokazZwierzeta(!pokazZwierzeta)}
          />
          <label className="form-check-label">Zwierzęta</label>
        </div>

       
      </div>

      <div className="d-flex flex-wrap">
        {przefiltrowaneZdjecia.map(zdjecie => (
          <div key={zdjecie.id} className="m-2 text-start" style={{ width: '300px' }}>
            <img
              src={zdjecie.src}
              alt={zdjecie.alt}
              style={{ borderRadius: '8px', width: '300px', height: '250px', objectFit: 'cover' }}
            />
            <h4 className="mt-2" style={{ fontSize: '1.1rem' }}>Pobrań: {zdjecie.pobrania}</h4>

            <button
              className="btn btn-success d-inline-block"
              onClick={() => pobieranko(zdjecie.id)}
            >
              Pobierz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;