import React from "react";

function ExperienceItem({ exp, selectedId, onSelectExperience }) {
  const isSelected = selectedId === exp.id;

  return (
    <div
      className={`p-4 rounded border transition ${
        isSelected ? "bg-yellow-50 border-yellow-400" : "bg-white shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Info principal */}
        <div>
          <h3
            className={`font-semibold ${
              isSelected ? "text-gray-900" : "text-gray-800"
            }`}
          >
            {exp.role}
          </h3>
          <p
            className={`text-sm ${
              isSelected ? "text-gray-800" : "text-gray-600"
            }`}
          >
            {exp.company} · {exp.period}
          </p>
        </div>

        {/* Botón */}
        <button
          onClick={() => onSelectExperience(exp.id)}
          className={`group flex-shrink-0 px-3 py-1 rounded text-sm font-medium transition ${
            isSelected
              ? "bg-yellow-400 text-gray-900 hover:bg-red-500 hover:text-white"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          {isSelected ? (
            <>
              <span className="block group-hover:hidden">✓ Seleccionada</span>
              <span className="hidden group-hover:block">Deseleccionar</span>
            </>
          ) : (
            "Seleccionar"
          )}
        </button>
      </div>
    </div>
  );
}

export default ExperienceItem;
