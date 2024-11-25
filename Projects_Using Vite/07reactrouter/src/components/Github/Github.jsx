import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kedharnadhG")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-3xl text-center bg-gray-600 text-white p-4 ">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="avata"
        className="rounded-lg"
        width={300}
        srcset=""
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kedharnadhG");
  return response.json();
};
