import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";

import RateLimitedUI from "../components/RateLimitedUI";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error Fetching notes!!");
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Search Bar */}
        {notes.length > 0 && !isRateLimited && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search notes..."
              className="input input-bordered w-full max-w-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}

        {loading && (
          <div className="text-center text-info py-10">Loading notes...</div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {!loading && notes.length > 0 && filteredNotes.length === 0 && (
          <div className="text-center text-base-content/60 py-10">
            No notes match your search.
          </div>
        )}

        {filteredNotes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;