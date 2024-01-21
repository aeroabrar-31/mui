import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const Practice = () => {
  const [data, setData] = useState(undefined);

  async function getAPIData() {
    try {
      const res = await axios.get("http://localhost:8080/getall");
      setData(res.data);
    } catch (error) {
      console.log("Error !!");
    }
  }

  // const handlePut = async () => {
  //   const putdata = {
  //     name: "Snow Field",
  //     rating: "4.9",
  //     area: "Kids world",
  //     cuisines: ["Ice magic", "ice creams"],
  //   };

  //   const res = await axios.put("http:localhost:8080/put/4.9", putdata);
  //   console.log(res);
  // };

  const handleSubmit = async () => {
    const tempdata = {
      name: "Snow Field",
      rating: "4.9",
      area: "Ucon Plaza",
      cuisines: ["Pizza", "Burgers", "Cool Drinks"],
    };

    const response = await axios.post("http://localhost:8080/add", tempdata);
    console.log(response);
    window.location.reload();
  };

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users/")
    //   .then((response) => {
    //     console.log(response.data);
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.log("Error catched");
    //   });

    getAPIData();
  }, []);

  console.log("render");

  if (!data) return null;

  return (
    <div>
      <Button color="secondary" variant="contained" onClick={handleSubmit}>
        Post
      </Button>
      {data &&
        data.map((row, index) => {
          return (
            <li key={row.rating}>
              {row.name} {row.area} {row.rating} {row.cuisines.join(", ")}
            </li>
          );
        })}
    </div>
  );
};

export default Practice;
