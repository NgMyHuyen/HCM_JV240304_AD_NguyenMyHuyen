export default function InputSong({ addNewSong }) {
  //   const [addSong, setAddSong] = useState([]);

  //   const handleAdd = (event) => {
  //     event.preventDefault();
  //     setAddSong = addSong(event.target.value);
  //     console.log(addSong);
  //   };

  //     const handleChange = (event) => {
  //       setSongName(event.target.value);
  //     }

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setAddSong(event.target.value);
  //     console.log(addSong);
  //   };

  //   InputSong({ addNewSong });
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" />
        {addSong}
        <button id="addSong" onClick={handleAdd}>
          Add Song
        </button>
      </form> */}

      <form onSubmit={addNewSong}>
        <input type="text" placeholder="Enter song" />
        <button type="submit"> Add new song</button>
      </form>
    </>
  );
}
