import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import { Box } from "@mui/material";
import Header from "./components/Header";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState([]);
  const [sort, setSort] = useState("asc");
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [filterText, setFilterText] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      const response = await fetch("https://demoapi.com/api/laptop");
      const laptops = await response.json();
      setLoading(false);
      setLaptops(laptops);
    };

    fetchLaptops();
  }, []);

  const handleSort = () => {
    const sortedLaptops = laptops.slice().sort((a, b) => {
      if (sort === "asc") {
        return a.weight - b.weight;
      } else {
        return b.weight - a.weight;
      }
    });

    setLaptops(sortedLaptops);
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const handleFilter = (filterText) => {
    const filteredLaptops = laptops.filter((laptop) =>
      laptop.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredLaptops(filteredLaptops);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Title />
      <Header handleSort={handleSort} handleFilter={handleFilter} />
      {loading ? (
        <LoadingMask />
      ) : (
        <Box>
          {laptops.map((laptop) => (
            <Laptop
              key={laptop.id}
              name={laptop.name}
              details={`Brand: ${laptop.brand} Weight: ${laptop.weight}`}
            />
          ))}
          {filteredLaptops.map((laptop) => (
            <Laptop
              key={laptop.id}
              name={laptop.name}
              details={`${laptop.brand} ${laptop.weight}`}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
