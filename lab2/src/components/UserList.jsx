import React, { useState } from "react";

const usersData = [
  {
    id: 1,
    profilePic: "./mohamed.webp",
    username: "mohamed",
    email: "mohamed@gmail.com",
    number: "1234567890",
    verified: true,
  },
  {
    id: 2,
    profilePic: "./mariam.webp",
    username: "mariam",
    email: "mariam@gmail.com",
    number: "0987654321",
    verified: true,
  },
  {
    id: 3,
    profilePic: "./ahmed.webp",
    username: "ahmed",
    email: "ahmed@gmail.com",
    number: "1112223333",
    verified: false,
  },
];

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <img src={user.profilePic} alt={user.username} style={styles.image} />
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
      <p>Number: {user.number}</p>
      <span
        style={{
          ...styles.icon,
          backgroundColor: user.verified ? "green" : "red",
        }}
      ></span>{" "}
      {user.verified ? "Verified" : "Not Verified"}
    </div>
  );
};

const UserList = () => {
  const [searchWord, setSearchWord] = useState("");

  const filteredUsers = usersData.filter((user) =>
    user.email.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search by email"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.cardsContainer}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  searchBar: {
    padding: "10px",
    width: "80%",
    marginBottom: "20px",
    fontSize: "16px",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  icon: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "5px",
  },
};

export default UserList;
