import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("tag")) {
      setTag(sessionStorage.getItem("tag"));
    }
    fetch(
      `https://pixabay.com/api/?key=39176279-dabb30fae1bb51f8b5a3aedb2&q=${tag}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  });

  return (
    <div className="App">
      <Header />
      <Search />
      <div className="row justify-content-center">
        {error && <Error />}
        {loading && <Loading />}

        {images &&
          images.map((image) => (
            <div className="col-md-3" key={image.id}>
              <div>
                <ImageCard images={image} />
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
