export default function SearchForm() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={function (e) {
          e.preventDefault();
          alert("You Search");
        }}
      >
        Search
      </button>
    </form>
  );
}
