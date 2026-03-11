import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.userId });
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content, userId: req.userId });
    res.status(201).json(newNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, content },
      { new: true },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
