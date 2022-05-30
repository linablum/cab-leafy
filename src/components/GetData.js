import { useEffect, useContext } from "react";
import List from "../views/List";
import Pagination from "./Pagination";
import { PlantsContext } from "../context/plantsContext";

function GetData() {
  const { output, output2, loading, page, totalPages, setPage, fetchData } =
    useContext(PlantsContext);

  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (num) => {
    setPage(num);
  };
  console.log("Output", output);
  console.log("Output2", output2);
  return (
    <>
      <h1>Leafy</h1>
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
