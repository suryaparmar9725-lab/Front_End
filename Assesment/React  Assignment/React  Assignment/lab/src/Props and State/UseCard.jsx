import React from 'react';

function UseCard(props) {
  return (
    <div style={styles.card}>
      <h2>User Card</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Location:</b> {props.location}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "2px solid #333",
    padding: "15px",
    width: "250px",
    borderRadius: "8px",
    marginBottom: "20px"
  }
};

export default UseCard;
