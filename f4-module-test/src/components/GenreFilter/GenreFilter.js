import "./style.css";
const GenreFilter = ({ genres, onGenreChange }) => {
  function clickHandler(genre) {
    console.log("Filter By " + genre);
    onGenreChange(genre);
  }
  return (
    <div className="genre">
      <h2>Filter By Genre</h2>
      <span className="btns">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => clickHandler(genre)}>
            {genre}
          </button>
        ))}
      </span>
    </div>
  );
};
export default GenreFilter;
