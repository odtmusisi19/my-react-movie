import { Enpoints } from '../apis/endponts';
import Banner from '../components/Banner';
import Deskripsi from '../components/Deskirpsi';
import MoviesScroll from '../components/MoviesScroll';
// import Cards from '../components/Cards';

export default function HomePage() {
  return (
    <div>
      {/* <Deskripsi /> */}
      <Banner url={Enpoints.discoverMoviesUrl(1)} />
      <MoviesScroll toprate={Enpoints.discoverMoviesUrl(1)} title="Top Watch" />
      <MoviesScroll toprate={Enpoints.popularMoviesUrl(2)} title="Top Movie" />
      {/* <Cards /> */}
    </div>
  );
}
