import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(false);

  const api = axios.create({
    baseURL: "https://api.realworld.io/api",
    timeout: 1000,
  });

  api.interceptors.request.use(
    (req) => {
      const tk = localStorage.getItem("token");
      if (tk) {
        req.headers = {
          ...App(req.headers || {}),
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjM0NTY3OEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBvc3RlciIsImlhdCI6MTY2MTE3NTkyNywiZXhwIjoxNjY2MzU5OTI3fQ.sTkmilCqAmUYL4U8UZ-sWI4xmN0jeLqgj2asGEJNIiM",
        };
      }
      return req;
    },
    (err) => Promise.reject(err)
  );

  api.interceptors.response.use(
    (res) => res,
    async (err) => {
      Promise.reject(err);
    }
  );

  const getApi = (offset) => {
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
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setArticles([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getApi(offset);
  }, [offset]);

  const handlePreV = () => {
    if (offset === 1) {
      alert("Bạn đang ở trang 1! Không có trang nhỏ hơn!");
      return (offset = 1);
    }
    setOffset(offset - 1);
  };

  const handleNext = () => {
    if (!articles[0]) {
      alert(
        "Đây là trang cuối! Chúng tôi sẽ chuyển hướng bạn đến trang trước!"
      );
      return setOffset(offset - 1);
    } else {
      setOffset(offset + 1);
    }
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
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
              className="rounded-circle mb-1"
            />
            <span
              className="text-center mt-3"
              style={{ color: "green", fontWeight: "600" }}
            >
              {article.author.username}
            </span>
            <h3 className="text-start">Title: {article.title}</h3>
            <h6 className="">{article.description} </h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <p
              className="d-flex justify-content-around align-items-center alert alert-success"
              style={{
                color: "green",
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

      {!loading ? (
        <div>Loading.... </div>
      ) : (
        <div className="d-flex justify-content-center h3">
          <button className="mx-2 px-3" onClick={handlePreV}>
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button className="mx-2 px-3">{offset}</button>
          <button className="mx-2 px-3" onClick={handleNext}>
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
