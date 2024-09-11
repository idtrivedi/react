import React from "react";
import { useEffect, useState } from "react";
import { userLoaderData } from "react-router-dom";

function Github() {
  const data = userLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/idtrivedi")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div class="text-center m-5 bg-gray-600 text-white p-4 text-3xl mx-auto w-full max-w-7xl">
      Github Followers: {data.followers}
      <img src={data.avata_url} alt="Github Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/idtrivedi");
  return response.json();
};
