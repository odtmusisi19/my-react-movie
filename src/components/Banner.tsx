import '../styles/Banner.css';
import { Pagination, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { TMDB_BASE_IMAGE_URL } from '../apis/TMDB';

export default function Banner(props: any): JSX.Element {
  const [movie, setMovie]: any[] = useState([]);

  const GetData = () => {
    axios.get(props.url).then((res) => {
      var person = res.data;
      setMovie(person.results);
      //   console.log(person.results);
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  function moveDownText() {
    gsap.set('.DownText', { autoAlpha: 0 });
    gsap.to('.DownText', 1.8, {
      startAt: {
        autoAlpha: 0,
        y: '-150%',
      },
      autoAlpha: 1,
      y: '4%',
      display: 'block',
    });
  }

  return (
    <div>
      <div className="TopWatch">
        <Swiper
          //   breakpoints={{
          //     // when window width is >= 640px
          //     0: {
          //       width: 640,
          //       slidesPerView: 3,
          //     },
          //     // when window width is >= 768px
          //     768: {
          //       width: 768,
          //       slidesPerView: 2,
          //     },
          //   }}
          scrollbar={{
            hide: true,
          }}
          slidesPerView={1}
          spaceBetween={0}
          effect={'fade'}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          // loop={true}
          // freeMode={true}
          modules={[Pagination, Scrollbar, FreeMode]}
          className="swiperSlide"
        >
          {movie.map((movie: any) => (
            <SwiperSlide className="card " key={movie.id}>
              <img className="gambar" src={`${TMDB_BASE_IMAGE_URL}w500/${movie.backdrop_path}`} alt={movie.title} title={movie.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
