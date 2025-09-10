import React, { useState } from "react";
import { profiles } from "./data.js";
import Profile from "./assets/components/Profile.jsx";
import ExperienceList from "./assets/components/ExperienceList.jsx";
import EducationList from "./assets/components/EducationList.jsx";

function App() {
  // Estado para perfil activo
  const [selectedProfileId, setSelectedProfileId] = useState(profiles[0].id);
  // Estado para experiencia seleccionada (lifted state)
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);

  // Obtener perfil activo
  const activeProfile = profiles.find((p) => p.id === selectedProfileId);

  // Manejar selección/deselección de experiencia
  const handleSelectExperience = (id) => {
    if (selectedExperienceId === id) {
      setSelectedExperienceId(null); // deselecciona si ya estaba seleccionada
    } else {
      setSelectedExperienceId(id);
    }
  };

  // Experiencia seleccionada (si existe)
  const selectedExperience = activeProfile.experiences.find(
    (exp) => exp.id === selectedExperienceId
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Logo CV + título */}
          <div className="flex items-center space-x-3">
            <span className="bg-indigo-600 text-white font-bold text-2xl px-2 py-2 rounded">
              CV
            </span>
            <h1 className="text-xl font-bold text-indigo-600">
              Examen React – Hoja de Vida
            </h1>
          </div>

          {/* Selector de perfiles */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-semibold">
              Perfil del candidato:
            </span>
            <select
              id="profile-select"
              value={selectedProfileId}
              onChange={(e) => setSelectedProfileId(e.target.value)}
              className="border rounded px-3 py-2"
            >
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Perfil */}
        <section className="bg-white shadow rounded-lg p-4">
          <Profile profile={activeProfile} />
        </section>

        {/* Experiencia */}
        <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">
            Experiencia
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Selecciona una experiencia para ver el resumen
          </p>

          <ExperienceList
            experiences={activeProfile.experiences}
            selectedId={selectedExperienceId}
            onSelectExperience={handleSelectExperience}
          />

          {/* Panel de resumen */}
          <div className="mt-4 p-3 border rounded bg-gray-50">
            {selectedExperience ? (
              <div>
                <h3 className="font-bold text-indigo-700">
                  {selectedExperience.role} – {selectedExperience.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedExperience.period}
                </p>
                <p className="mt-2 text-gray-700">
                  {selectedExperience.summary}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">No hay experiencia seleccionada.</p>
            )}
          </div>
        </section>

        {/* Educación */}
        <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">
            Educación
          </h2>
          <EducationList education={activeProfile.education} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-3 text-sm text-gray-500 mt-6">
        © 2025 – React Exam – Tailwind Design Pass
      </footer>
    </div>
  );
}

export default App;
