import React from "react";
import ExperienceItem from "./ExperienceItem.jsx";

function ExperienceList({ experiences, selectedId, onSelectExperience }) {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id}
          exp={exp}
          selectedId={selectedId}
          onSelectExperience={onSelectExperience}
        />
      ))}
    </div>
  );
}

export default ExperienceList;
