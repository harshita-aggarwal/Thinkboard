import { useEffect, useState } from "react";
import { useNavigate, Link, useParams, useSearchParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderPinwheelIcon, Trash2Icon, PenSquareIcon } from "lucide-react";
import { formatDate } from "../lib/utils";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
        setEditedTitle(res.data.title);
        setEditedContent(res.data.content);
        if (searchParams.get("edit") === "true") setIsEditing(true);
      } catch (error) {
        console.error("Error Fetching note!!", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id, searchParams]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting note", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!editedTitle.trim() || !editedContent.trim()) {
      toast.error("All fields are required");
      return;
    }
    setSaving(true);
    try {
      const res = await api.put(`/notes/${id}`, {
        title: editedTitle,
        content: editedContent,
      });
      setNote(res.data);
      setIsEditing(false);
      toast.success("Note updated successfully!");
    } catch (error) {
      console.error("Error updating note", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedTitle(note.title);
    setEditedContent(note.content);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderPinwheelIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">

          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />Back to Notes
            </Link>
            <div className="flex gap-2">
              {!isEditing && (
                <button onClick={() => setIsEditing(true)} className="btn btn-outline btn-primary">
                  <PenSquareIcon className="h-5 w-5" /> Edit
                </button>
              )}
              <button onClick={handleDelete} className="btn btn-error btn-outline">
                <Trash2Icon className="h-5 w-5" /> Delete
              </button>
            </div>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              {isEditing ? (
                <>
                  <div className="form-control mb-4">
                    <label className="label"><span className="label-text">Title</span></label>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label"><span className="label-text">Content</span></label>
                    <textarea
                      className="textarea textarea-bordered h-48"
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                    />
                  </div>
                  <div className="card-actions justify-end gap-2">
                    <button className="btn btn-ghost" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                      {saving ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="card-title text-2xl text-primary">{note.title}</h2>
                  <p className="text-base-content/60 text-sm mb-4">
                    {formatDate(new Date(note.createdAt))}
                  </p>
                  <p className="text-base-content/90 whitespace-pre-wrap">{note.content}</p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;