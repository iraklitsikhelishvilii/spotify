"use client";
import { useState, useEffect } from "react";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";

export default function UploadSongForm() {
  const { songs, loadSongs, addSong, removeSong } = useStates();
  const { language } = useStates();
  const t = translations[language];

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    loadSongs();
  }, [loadSongs]);

  const handleFileUpload = (file: File, setFile: (val: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => setFile(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (name && author && image) {
      const newSong = {
        id: `${Date.now()}`,
        name,
        author,
        image,
      };

      addSong(newSong);

      setName("");
      setAuthor("");
      setImage(null);
    } else {
      alert(t.alertFillFields);
    }
  };

  const handleRemoveSong = async (songId: string) => {
    try {
      await removeSong(songId);
    } catch (error) {
      console.error("Error removing song:", error);
    }
  };

  return (
    <div className="h-[100vh] bg-black text-white p-[24px]">
      <div className="max-w-[765px] mx-auto">
        <h1 className="text-[30px] font-[700] mb-[24px]">{t.uploadHeader}</h1>

        <div className="bg-[#121212] p-[24px] rounded-[1px] shadow-md flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder={t.songName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-[12px] rounded-[8px] bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder={t.authorName}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-[12px] rounded-[8px] bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file, setImage);
            }}
            className="file:bg-green-600 file:hover:bg-green-700 file:text-white file:rounded-[8px] file:px-[16px] file:py-[8px] bg-[#2a2a2a] w-full text-gray-300 rounded-[8px]"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 transition text-white py-[12px] rounded-[8px] font-[600]"
          >
            {t.saveToLibrary}
          </button>
        </div>

        {songs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[24px] font-[600] mb-[16px]">
              {t.libraryHeader}
            </h2>
            <div className="flex gap-[20px] overflow-x-auto scrollbar-thin scrollbar-thumb-[#4caf50] pb-[8px]">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className="bg-[#181818] hover:bg-[#252525] transition rounded-[12px] p-[16px] w-[280px] min-w-[280px] shadow-sm flex-shrink-0"
                >
                  <img
                    src={song.image}
                    alt={song.name}
                    className="w-full h-[160px] object-cover rounded-[6px] mb-[12px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="max-w-[150px]">
                      <div className="text-white text-[28px] font-[700] truncate">
                        {song.name}
                      </div>
                      <div className="text-gray-400 text-[14px] truncate mb-[8px]">
                        by {song.author}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveSong(String(song.id))}
                      className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full"
                    >
                      {t.removeButton}
                    </button>
                  </div>
                  <audio controls className="w-full"></audio>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
