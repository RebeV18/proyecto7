export const SongCard = ({ song }) => {
  return (
    <div className="custom-card cursor-pointer rounded-2xl border border-gray-200 bg-transparent shadow-md m-15">
      <div className="mx-auto flex flex-col md:flex-row justify-center object-center bg-gradient-to-br from-[#f0f4f8] to-[#e2ebf3] rounded-lg px-2 py-2 sm:py-5 lg:max-w-7xl">
        <div className="flex flex-col items-center justify-center p-7">
          <h3 className="text-white text-center font-bold mb-2 text-sm md:text-base lg:text-lg">
            {song.cancion}
          </h3>
          <div className="flex flex-col md:justify-between p-2 items-center">
            <img
              className="w-full h-auto aspect-square object-cover rounded-lg mx-18 mb-7 md:w-45 md:h-45 object-center object-cover"
              src={song.imagen}
              alt={song.cancion}
            />
            <div className="items-start md:items center">
              <h2 className="text-white text-sm md:text-lg font-semibold mb-2">
                <span className="text-white text-sm md:text-lg font-bold mb-2">
                  CD:{" "}
                </span>
                {song.cd}
              </h2>
              <p className="text-white text-sm md:text-lg mb-4-line-clamp-2">
                <span className="text-white text-sm md:text-lg font-bold mb-2">
                  Autores:{" "}
                </span>
                {song.autores}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
