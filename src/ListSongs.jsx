import InputSong from "./InputSong.jsx";

// export default function ListSong({ id, songName }) {
//   return (
//     <>
//       <InputSong />
//       <ul>
//         <li>
//           <p>Bài số {id}</p>
//           <p>{songName}</p>
//         </li>
//       </ul>
//     </>
//   );
// }

export default function ListSongs({ listSong, handleDelete }) {
  return (
    <ul>
      {listSong?.map((song) => (
        <li key={song.id}>
          <span>{song.title}</span>
          <button onClick={() => handleDelete(song.id)}>Delete song</button>
        </li>
      ))}
    </ul>
  );
}
