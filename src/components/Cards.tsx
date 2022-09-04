import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Cards.css';
import { Enpoints } from '../apis/endponts';
import { TMDB_BASE_IMAGE_URL } from '../apis/TMDB';

export default function Cards() {
  const [data, setData]: any[] = useState([]);

  const GetDiscoverMovies = () => {
    axios.get(Enpoints.topRatedUrl(1)).then((res) => {
      var person = res.data;
      setData(person.results);
      // console.log(person.results);
    });
  };
  useEffect(() => {
    GetDiscoverMovies();
  }, []);
  if (!data) return null;

  return (
    <div className="Container">
      <div className="Card_Container">
        {data.map((movie: any) => (
          <div className="Card_card" key={movie.id}>
            <img src={`${TMDB_BASE_IMAGE_URL}w500/${movie.poster_path}`} alt={movie.title} title={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
