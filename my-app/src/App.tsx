import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data:Restaurant = {
    name: "",
    category: "western",
    address: {
        city: "",
        detail: "",
        zipCode: 23423,
    },
    menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }],
};

const App: React.FC = () => {
    const [myRes, setMyRes] = useState<Restaurant>(data);
    const changeAddress = (address:Address)=>{
      setMyRes({...myRes,address:address})
    }

    const showBestMenuName = (name:string)=>{
      return name;
    }
    return (
        <div className="App">
            <Store info={data} changeAddress={changeAddress} />
            <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
        </div>
    );
};

export default App;
