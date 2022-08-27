import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const tk =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbmFuaDE4MTJ6eGMyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibmd1eWVuYW5oMTgxMnp4YzJAZ21haWwuY29tIiwiaWF0IjoxNjYxNjI2OTEwLCJleHAiOjE2NjY4MTA5MTB9.CfSIX_WWFSGBe2rrGCMg4_hHItEhPEejVvUL0XUYs9w";
  const api = axios.create({
    baseURL: "https://api.realworld.io/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tk}`,
    },
  });

  axios.interceptors.request.use(
    function (config) {
      if (tk) {
        config.headers.common.Authorization = `Bearer ${tk}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  const getApi = (offset) => {
    setLoading(true);
    api
      .get("/articles", {
        params: {
          limit: 10,
          offset: offset,
        },
      })
      .then((result) => {
        const articles = result.data.articles;
        setArticles(articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setArticles([]);
      });
  };

  useEffect(() => {
    getApi(offset);
  }, [offset, favorite]);

  const handlePreV = () => {
    if (offset === 0) {
      alert("Bạn đang ở trang 1! Không có trang nhỏ hơn!");
      return (offset = 0);
    }
    setOffset(offset - 1);
  };

  const handleNext = () => {
    if (!articles[0]) {
      alert(
        "Đây là trang cuối! Chúng tôi sẽ chuyển hướng bạn đến trang trước!"
      );
      return setOffset(offset - 1);
    }
    setOffset(offset + 1);
  };

  const handleFavorite = (article) => {
    console.log("article", article);
    const { favorited, favoritesCount, slug } = article;
    if (!favorited) {
      api.post(`articles/${slug}/favorite`).then(() => setFavorite(favorite=> !favorite));
    } else {
      api.delete(`articles/${slug}/favorite`).then(() => setFavorite(!favorite));
    }
  };

  return (
    <div className="container position-relative" style={{ marginTop: "5%" }}>
      {articles.map((article) => (
        <div
          key={article.slug}
          className="p-3 row alert alert-primary"
          style={{ marginTop: "2%" }}
        >
          <div className="col-9">
            <img
              src={article.author.image}
              alt="user-img"
              className="rounded-circle m-2"
            />
            <span
              className="text-center mt-3"
              style={{ color: "green", fontWeight: "600" }}
            >
              {article.author.username}
            </span>
            <h3 className="text-start">
              Title: <span className="fw-bold">{article.title}</span>
            </h3>
            <h5 className="fst-italic">{article.description} </h5>
            <h6 className="fst-normal fw-light">{article.body} </h6>
          </div>
          <div
            className="col-3 d-flex justify-content-end"
            style={{ cursor: "pointer" }}
          >
            <p
              onClick={() => handleFavorite(article)}
              className={`d-flex justify-content-around align-items-center alert ${
                article.favorited ? "alert-success" : "alert-secondary"
              }`}
              style={{
                fontWeight: "600",
                width: "100px",
                height: "40px",
              }}
            >
              {article.favoritesCount} <i className="fas fa-heart"></i>
            </p>
          </div>
        </div>
      ))}

      {!articles[0] && (
        <h2>Đã hết dữ liệu, Hãy chuyển hướng bạn về trang trước đó!</h2>
      )}

      {loading ? (
        <div className="position-absolute" style={{ top: "50%", left: "50%" }}>
          <div
            className="spinner-border text-success"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center h3 position-relative">
          <button className="mx-2 px-3" onClick={handlePreV}>
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button className="mx-2 px-3">{offset + 1}</button>
          <button className="mx-2 px-3" onClick={handleNext}>
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
