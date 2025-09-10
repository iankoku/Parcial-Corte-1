import React, { useState } from "react";

function EducationList({ education }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-gray-800">Educación</h2>
        <button
          onClick={() => setVisible(!visible)}
          className="px-3 py-1 text-sm rounded bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
        >
          {visible ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {/* Contador */}
      <p className="text-sm mb-3">
        Total:{" "}
        <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">
          {education.length}
        </span>
      </p>

      {/* Renderizado condicional */}
      {visible ? (
        <ul className="space-y-3">
          {education.map((ed) => (
            <li
              key={ed.id}
              className="p-3 border rounded shadow-sm bg-gray-50 hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-800">{ed.degree}</h3>
              <p className="text-sm text-gray-600">{ed.institution}</p>
              <p className="text-xs text-gray-500">{ed.year}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-3 text-center text-gray-500 bg-gray-50 rounded-lg">
          Estudios ocultos.
        </div>
      )}
    </div>
  );
}

export default EducationList;
