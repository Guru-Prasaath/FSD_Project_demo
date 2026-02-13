import React from "react";

function Header() {
  return (
    <div style={styles.header}>
      <h1>To Do List</h1>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "green",
    color: "white",
    padding: "20px",
    textAlign: "center",
    fontSize: "24px"
  }
};

export default Header;