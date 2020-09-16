import React, { useEffect, useState } from "react";

import FriendCard from "./FriendCard";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);
  console.log(friends);
  return (
    <>
      <h2>Here are All your friends!!</h2>
      {friends.map((friend) => {
        return <FriendCard key={friend.id} value={friend} />;
      })}
    </>
  );
}
