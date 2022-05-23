import { useState, useEffect } from "react";
import configData from "../Config.json";
import List from "../views/List";

const cors_url = "https://cab-cors-anywhere.herokuapp.com/";

function GetData() {
  const [output, setOutput] = useState();
  const [output2, setOutput2] = useState();

  let api_token = "";
  useEffect(() => {
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

        const res = await fetch(
          cors_url +
            "https://open.plantbook.io/api/v1/plant/search?alias=ac&limit=20&offset=0",
          requestOptions
        ).catch(console.log("error"));
        const data = await res.json();
        setOutput(data.results);
        console.log(data.results);

        const res2 = await fetch(
          cors_url +
            "https://open.plantbook.io//api/v1/plant/detail/acer%20pseudoplatanus/",
          requestOptions
        ).catch(console.log("error"));
        const data2 = await res2.json();
        setOutput2(data2);
        console.log("Details", data2.image_url);
      };
      getObject();
    };

    authorize();
  }, []);
  console.log("Output", output);
  console.log("Output2", output2);
  return (
    <>
      <img src={output2.image_url} />
      <List plants={output} />;
    </>
  );
}

export default GetData;

/* 
        const allArray = [];
        const resDetails = await Promise.all(
          urls.map((output.alias) =>
          fetch(cors_url +
            "https://open.plantbook.io//api/v1/plant/detail/${output.alias}",
          requestOptions)
        ).catch(console.log("error"));
        const details = await res.json();
        console.log(details); */

/*       async function fetchCharacters() {
  try {
    const allArray = [];
    const data = await Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            allArray.push(...res.data.results);
          })
      )
    ); */
