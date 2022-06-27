import express from "express";
const app = express();
import cors from "cors";
import { json } from "body-parser";
const port = process.env.PORT || 3001;
import { get } from "axios";

const ID_KEY = "ID_KET";
const SECRET_KEY = "SECRET_KEY";

app.use(cors());

app.use(json());

app.use("/", (req, res) => {
  console.log("server-search");
  const word = req.query.query;
  console.log(word);
  get("https://openapi.naver.com/v1/search/movie.json", {
    params: {
      query: word,
      display: 20,
    },
    headers: {
      "X-Naver-Client-Id": ID_KEY,
      "X-Naver-Client-Secret": SECRET_KEY,
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      console.log(response.data.items);
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
