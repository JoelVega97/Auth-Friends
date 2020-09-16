import React, { useEffect, useState } from "react";

import FriendCard from "./FriendCard";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  name: "",
  email: "",
  age: "",
  id: "",
};

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [values, setValues] = useState(initialValues);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      });
  };

  const postNewFriend = (newFriend) => {
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log(friends);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setValues(initialValues);
      });
  };

  const change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    const newFriend = {
      name: values.name,
      email: values.email,
      age: values.age,
      id: values.id,
    };
    postNewFriend(newFriend);
    debugger;
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      <h2>Here are All your friends!!</h2>
      {friends.map((friend) => {
        return <FriendCard key={friend.id} value={friend} />;
      })}
      <form onSubmit={submit}>
        <label>
          Name:
          <input
            value={values.name}
            onChange={change}
            name="name"
            placeholder="Enter Name"
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            value={values.email}
            onChange={change}
            name="email"
            placeholder="Enter Email"
            type="text"
          />
        </label>
        <label>
          Age:
          <input
            value={values.age}
            onChange={change}
            name="age"
            placeholder="Enter Age"
            type="text"
          />
        </label>
        <button>Add friend.</button>
      </form>
    </>
  );
}
