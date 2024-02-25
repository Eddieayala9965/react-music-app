import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async (query = "") => {
    const url = `https://api.spotify.com/v1/search?q=${query}e&type=album`;
    // const url = `https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/albums?limit=20`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQDL7rCS6KFehqRbBGS7f4WjKT55Vqwb7da7QMO4G94KrhlnIS6nh3EZPj99V5z_UJEOXARV1YvL0cSM1GncCGb-mtacTk2IIYHUzDdpSgWORnwYnhg",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.albums.items);
    setData(data.albums.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Songs</h1>
        <Form action={fetchData} />
        {/* {data.map((items) => {
          return (
            <>
              <div
                className="flex justify-center items-center  space-y-4"
                key={items.id}
              >
                <div
                  className="w-60 p-2 bg-white rounded-xl flex flex-col"
                  key={items.id}
                >
                  <img
                    className="h-40 rounded-lg"
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
        })} */}
      </div>
    </>
  );
};

export default App;
