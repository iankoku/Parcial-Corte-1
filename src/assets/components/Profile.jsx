import React from "react";

function Profile({ profile }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
      />
      <div>
        <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>

        <p className="text-indigo-600 font-semibold mt-1">
          Profesión:{" "}
          {profile.profession ? (
            <span className="inline-block border border-green-500 bg-green-50 text-green-700 px-2 rounded">
              {profile.profession}
            </span>
          ) : (
            <span className="italic text-gray-700">Sin profesión registrada</span>
          )}
        </p>

        <p className="text-gray-600 mt-2">{profile.description}</p>
      </div>
    </div>
  );
}

export default Profile;
