import React,{useState} from 'react'

const Mousehighlight = () => {
    const [bgColour, setBgColour] = useState("green");

  const appStyles = {
    height: "100vh",
    background: `${bgColour}`,
  };

  const styles = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "50vh",
    border: "2px solid black",
    color: "white",
    margin: "25vh 20vh",
    padding: "0.25em 1em",
    background: "red",
  };
  const styles1 = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "50vh",
    border: "2px solid black",
    color: "white",
    margin: "25vh 10vh",
    padding: "0.25em 1em",
    background: "pink",
  };
  
  return (
    <div className="App" style={appStyles}>
    
      <button
        style={styles}
        onMouseEnter={() => setBgColour("red")}
        onMouseLeave={() => setBgColour("green")}
      >
        {" "}
        Red
      </button>
      <button
        style={styles1}
        onMouseEnter={() => setBgColour("pink")}
        onMouseLeave={() => setBgColour("green")}
      >
        {" "}
        pink
      </button>
     
    </div>
  );
}


export default Mousehighlight