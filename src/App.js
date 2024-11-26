import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import styles from "./GlobalStyles.module.css";
import Hero from "./components/hero/Hero";
import { Section } from "./components/section/Section";
import { Songs } from "./components/songs/Songs";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topPromise = axios.get("https://qtify-backend-labs.crio.do/albums/top");
        const newPromise = axios.get("https://qtify-backend-labs.crio.do/albums/new");
        const songsPromise = axios.get("https://qtify-backend-labs.crio.do/songs");
        const genresPromise = axios.get("https://qtify-backend-labs.crio.do/genres");
  
        const results = await Promise.allSettled([topPromise, newPromise, songsPromise, genresPromise]);
  
        const [topResponse, newResponse, songsResponse, genresResponse] = results;
  
        if (topResponse.status === "fulfilled") {
          setTopAlbums(topResponse.value.data);
          console.log("Top Albums:", topResponse.value.data);
        } else {
          console.error("Error fetching top albums:", topResponse.reason);
        }
  
        if (newResponse.status === "fulfilled") {
          setNewAlbums(newResponse.value.data);
          console.log("New Albums:", newResponse.value.data);
        } else {
          console.error("Error fetching new albums:", newResponse.reason);
        }
  
        if (songsResponse.status === "fulfilled") {
          setSongs(songsResponse.value.data);
          console.log("Songs:", songsResponse.value.data);
        } else {
          console.error("Error fetching songs:", songsResponse.reason);
        }
  
        if (genresResponse.status === "fulfilled") {
          setGenres(genresResponse.value.data.data);
          console.log("Genres:", genresResponse.value.data);
        } else {
          console.error("Error fetching genres:", genresResponse.reason);
        }
  
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.body}>
      <Navbar />
      <Hero />
      <Section type='Top Albums' data={topAlbums}/>
      <Section type='New Albums' data={newAlbums}/>
      <Songs type='Songs' data={songs} genres={genres}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
