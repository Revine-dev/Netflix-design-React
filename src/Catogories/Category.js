const Category = (props) => {
  if (!props.images || !Array.isArray(props.images)) {
    return;
  }
  return (
    <div className="category">
      <div className="name">{props.category}</div>
      <div className="movies">
        {props.images.map((img, i) => {
          return <img key={i} src={img} alt="movi" />;
        })}
      </div>
    </div>
  );
};

export default Category;
