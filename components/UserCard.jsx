import React from "react";

export default function UserCard({ title, image, name }) {
  return (
    <div className="card">
      <img src={image} alt="Image of woman" />
      <h2>{name}</h2>
      <p>{title}</p>
      <button>Connect</button>
    </div>
  );
}
