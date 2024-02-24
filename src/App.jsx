import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const url = `https://api.spotify.com/v1/search?q=${query}&type=album&limit=20&include_external=audio`;
    const url = `https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/albums?limit=20`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQALsue6sIieKFIL6YP0bIog4-qj7fiXZ88wJUAeJBZM1O-8kzyH0M1GKjZPqQYpekqJfCUEPAnX6BuG3FmtBEjckVVVd_ykiO9Y8S-AepfBJVW3M-Q",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.items);
    setData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Movies Data</h1>
        {data.map((items) => {
          return (
            <>
              <div className="flex justify-center items-center flex-wrap">
                <div className="w-60 p-2 bg-white rounded-xl flex flex-col">
                  <img
                    className="h-40 object-cover rounded-xl"
                    src={items.images[1].url}
                    alt={items.name}
                  />
                  <h2 className="font-bold tetx-lg">{items.name}</h2>
                  <p className="text-sm text-grey-600">
                    {" "}
                    By {items.artists[0].name}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
