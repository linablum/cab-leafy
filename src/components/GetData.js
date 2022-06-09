import { useEffect, useContext, useState } from "react";
import List from "../views/List";
import Pagination from "./Pagination";
import { PlantsContext } from "../context/plantsContext";
import { FormControl, InputLabel, TextField } from "@mui/material";

function GetData() {
  const { output, loading, page, totalPages, setPage, fetchData } =
    useContext(PlantsContext);

  const [input, setInput] = useState("Acer");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (num) => {
    setPage(num);
  };

  useEffect(() => {
    fetchData(input);
  }, []);

  useEffect(() => {
    fetchData(input);
  }, [input]);

  console.log(output);
  return (
    <>
      <h1>Leafy</h1>
      <p>
        <FormControl>
          <InputLabel></InputLabel>
          <TextField
            label="Search Plants"
            color="success"
            focused
            value={input}
            onChange={handleChange}
          />
        </FormControl>
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <List plants={output} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      )}
    </>
  );
}

export default GetData;
