import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        dataArray = await contract.display(account);
      }
      console.log(dataArray);
      
      const isEmpty = Object.keys(dataArray).length === 0;

      if (!isEmpty) {
        const str = dataArray.toString();
        const str_array = str.split(",");
        console.log(str);
        console.log(str_array);

        const images = str_array.map((item, i) => {
          return (
            <a href={item} key={i} target="_blank" rel="noreferrer">
              <img
                key={i}
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="Patient Health Record"
                className="image-list"
              ></img>
               <span className="record-text">Patient Health Record</span>
            </a>
          );
        });

        setData(images);
      } else {
        alert("No Record to display");
      }
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <input type="text" placeholder="Enter Address" className="address" />
      <br /><br />
      <button className="center button" onClick={getdata}>
        Get Patient Record
      </button>
      <div className="image-list">{data}</div>

    </>
  );
};

export default Display;
