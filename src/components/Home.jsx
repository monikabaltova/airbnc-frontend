import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Filter from "./Filter";
import PropertyList from "./PropertyList";

const Home = ({ properties, setProperties }) => {
  return (
    <>
      <Filter />
      <PropertyList properties={properties} setProperties={setProperties} />
    </>
  );
};

export default Home;
