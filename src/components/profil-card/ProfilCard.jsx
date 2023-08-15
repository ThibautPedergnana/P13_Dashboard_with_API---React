import React from "react";

function ProfilCard(firstName, lastName) {
  return (
    <div className="profil-card">
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  );
}

export default ProfilCard;
