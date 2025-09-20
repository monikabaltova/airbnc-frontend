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
