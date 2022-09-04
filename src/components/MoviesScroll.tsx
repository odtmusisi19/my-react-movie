import '../styles/MoviesScroll.css';
import { Pagination, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import axios from 'axios';
import { Enpoints } from '../apis/endponts';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { TMDB_BASE_IMAGE_URL } from '../apis/TMDB';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Deskripsi from './Deskirpsi';
import HomePage from '../pages/HomePage';

export default function MoviesScroll(props: any): JSX.Element {
  const [movie, setMovie]: any[] = useState([]);

  const GetData = () => {
    axios.get(props.toprate).then((res) => {
      var person = res.data;
      setMovie(person.results);
      // console.log(props);
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  // function moveDownText() {
  //   gsap.set('.DownText', { autoAlpha: 0 });
  //   gsap.to('.DownText', 1.8, {
  //     startAt: {
  //       autoAlpha: 0,
  //       y: '-150%',
  //     },
  //     autoAlpha: 1,
  //     y: '4%',
  //     display: 'block',
  //   });
  // }

  return (
    <>
      <Router>
        {/* <Routes>
          <Route path={`deskripsi`} element={<Deskripsi />} />
        </Routes> */}
        <div>
          <div className="TopWatch">
            <h1 style={{ color: 'white' }}>{props.title}</h1>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                0: {
                  width: 640,
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              scrollbar={{
                hide: true,
              }}
              slidesPerView={5}
              spaceBetween={10}
              effect={'fade'}
              pagination={{
                clickable: true,
                type: 'custom',
              }}
              // onClick={() => alert('hallos')}
              // loop={true}
              // freeMode={true}
              modules={[Pagination, Scrollbar, FreeMode]}
              className="swiperSlide"
            >
              {/* <Routes> */}
              {movie.map((movie: any) => (
                <SwiperSlide className="card " key={movie.id}>
                  <Link to={`/deskripsi${movie.id}`}>
                    <img className="gambar" src={`${TMDB_BASE_IMAGE_URL}w500/${movie.poster_path}`} alt={movie.title} title={movie.title} />
                  </Link>
                </SwiperSlide>
              ))}
              {/* </Routes> */}
            </Swiper>
          </div>
        </div>
      </Router>
      {/* <Routes>
        <Route path={`/`} element={<HomePage />}>
          {movie.map((movie: any) => (
            <Route key={movie.id} path={`deskripsi${movie.id}`} element={<Deskripsi />} />
          ))}
        </Route>
      </Routes> */}
    </>
  );
}
