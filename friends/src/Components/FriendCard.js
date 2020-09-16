import React from "react";

export default function FriendCard({ value }) {
  return (
    <>
      <h3> {value.name} </h3>
      <p> {value.email} </p>
      <p> {value.age} </p>
    </>
  );
}
