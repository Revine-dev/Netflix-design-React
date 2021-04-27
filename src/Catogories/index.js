import Movies from "../movies.json";
import Category from "./Category";

const Categories = () => {
  return (
    <>
      {Movies.map((movie, i) => {
        return <Category key={i} {...movie} />;
      })}
    </>
  );
};

export default Categories;
