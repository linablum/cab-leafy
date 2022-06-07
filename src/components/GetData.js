import { useEffect, useContext, useState } from "react";
import List from "../views/List";
import Pagination from "./Pagination";
import { PlantsContext } from "../context/plantsContext";
import { FormControl, InputLabel, TextField } from "@mui/material";
//import LoadingButton from "@mui/lab/LoadingButton";

function GetData() {
  const { output, output2, loading, page, totalPages, setPage, fetchData } =
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

  console.log("Output2", output2);
  return (
    <>
      <h1>Leafy</h1>
      <FormControl>
        <InputLabel></InputLabel>
        <TextField
          label="Search Plants"
          color="secondary"
          focused
          value={input}
          onChange={handleChange}
        />
      </FormControl>
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
