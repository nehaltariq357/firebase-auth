import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Navbar from "./Navbar;";

const Home = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setMyData(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>Welcome</h1>
        <div className="card-container">
          {myData.map((post) => {
            return <Card key={post.id} data={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
