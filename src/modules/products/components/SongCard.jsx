export const SongCard = ({ song }) => {
  return (
    <div className="rounded-lg shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="w-full h-48 overflow-hidden overflow-visible py-2">
        <img
          className="text-white w-48 h-48 overflow-visible py-2"
          src={song.imagen}
          alt={song.cancion}
        />
      </div>
      <div>
        <h2 className="text-white text-x1 font-semibold mb-2">
          {song.cancion}
        </h2>

        <p className="text-white mb-4-line-clamp-2">{song.autores}</p>
      </div>
    </div>
  );
};
