const Category = (props) => {
  if (!props.images || !Array.isArray(props.images)) {
    return;
  }

  const getMovieName = (title) => {
    title = title.split("/");
    title = title[title.length - 1];

    title = title.split("_");
    title = title[0];
    return title;
  };

  return (
    <div className="category">
      <div className="name">{props.category}</div>
      <div className="movies">
        {props.images.map((img, i) => {
          return (
            <div key={i} className="photo">
              <img src={img} alt={`movie ${i}`} />
              <div className="moviename">{getMovieName(img)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
