import { useState, useEffect } from "react";
import { client_id, client_secret } from "./Config.js";

function GetData() {
  const [objectOutput, setObjectOutput] = useState();
  let api_token = "";
  useEffect(() => {
    const authorize = async () => {
      let formdata = new FormData();
      formdata.append("grant_type", client_id);
      formdata.append("client_id", client_secret);
      formdata.append(
        "client_secret",
        "UXmTVmtDI7GIx3oqJFqnPVsm1Dt4vpdXwyW4vcoXWjMWcD8bNHc21ZiLnQg1CCJJdI81GuQnCTuXhV8h1FLfqg5ve18WZhVaT6JDyX0sBjqmBaTD9LWB6PVC9aVJoIyf"
      );

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        "https://open.plantbook.io/api/v1/token/",
        requestOptions
      ).catch(console.log("error"));
      const data = await res.json();
      api_token = data.token;
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
          "https://open.plantbook.io/api/v1/plant/detail/acanthus ilicifolius/",
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
