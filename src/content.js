import React from "react";

function Content() {

  const handleClick = () => {
    console.log("thanks for your support");
  };

  const Namechange = () => {
    return "Invest";
  };

  return (
    <div style={styles.container}>
      <h3>Let's {Namechange()} Money</h3>
      <button style={styles.button} onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#dcdcdc",
    padding: "25px",
    margin: "20px",
    borderRadius: "8px",
    textAlign: "center"
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Content;