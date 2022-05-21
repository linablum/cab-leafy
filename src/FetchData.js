import { useState, useEffect } from "react";
import configData from "./Config.json";

function GetData() {
  const [objectOutput, setObjectOutput] = useState();
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
        "https://cab-cors-anywhere.herokuapp.com/https://open.plantbook.io/api/v1/token/",
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
          "https://cab-cors-anywhere.herokuapp.com/https://open.plantbook.io/api/v1/plant/detail/acanthus ilicifolius/",
          requestOptions
        ).catch(console.log("error"));
        const data = await res.json();

        setObjectOutput(data);
        console.log(data);
      };
      getObject();
    };

    authorize();
  }, []);
}

export default GetData;
