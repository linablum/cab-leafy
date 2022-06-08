import { useState, createContext } from "react";
import configData from "../utils/config.json";
import { plants_per_page, cors_url } from "../utils/constants";

export const PlantsContext = createContext();

export const PlantsContextProvider = (props) => {
  const [output, setOutput] = useState();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [open, setOpen] = useState(false);
  let api_token = "";

  const fetchData = (searchterm) => {
    const authorize = async () => {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("grant_type", "client_credentials");
      formdata.append("client_id", configData.client_id);
      formdata.append("client_secret", configData.client_secret);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        cors_url + "https://open.plantbook.io/api/v1/token/",
        requestOptions
      ).catch(console.log("error"));
      const data = await res.json();
      api_token = data.access_token;
      console.log("Successful Authorization. Token: " + api_token);

      const getObject = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + api_token);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const res = await fetch(
          cors_url +
            "https://open.plantbook.io/api/v1/plant/search?alias=" +
            searchterm +
            "&limit=100&offset=0",
          requestOptions
        ).catch(console.log("error"));
        const data = await res.json();
        setOutput(data.results);
        setLoading(false);
        setTotalPages(Math.ceil(data.results.length / plants_per_page));
      };
      getObject();
    };

    authorize();
  };
  const handleOpen = () => {
    setOpen(true);
    //  fetchDetails(plant);
  };
  const fetchDetails = (plant) => {
    handleOpen();
    const authorize = async () => {
      let formdata = new FormData();
      formdata.append("grant_type", "client_credentials");
      formdata.append("client_id", configData.client_id);
      formdata.append("client_secret", configData.client_secret);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        cors_url + "https://open.plantbook.io/api/v1/token/",
        requestOptions
      ).catch(console.log("error"));
      const data = await res.json();
      api_token = data.access_token;
      console.log("Successful Authorization. Token: " + api_token);

      const getObject = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + api_token);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const res2 = await fetch(
          cors_url +
            "https://open.plantbook.io//api/v1/plant/detail/" +
            plant +
            "/",
          requestOptions
        ).catch(console.log("error"));

        const data2 = await res2.json();
        setDetails(data2);
      };
      getObject();
    };

    authorize();
  };

  return (
    <PlantsContext.Provider
      value={{
        output,
        details,
        loading,
        page,
        totalPages,
        setPage,
        fetchData,
        fetchDetails,
        open,
        setOpen,
      }}
    >
      {props.children}
    </PlantsContext.Provider>
  );
};
