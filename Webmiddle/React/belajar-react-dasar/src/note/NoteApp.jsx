// import { useImmer } from "use-immer";
import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
// import { useReducer } from "react";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn ReactJS", done: false },
];

export default function NoteApp() {
  //   const [notes, setNotes] = useImmer(initialNotes);
  //   const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    if (text !== "") {
      //   setNotes((draft) => {
      //     draft.push({
      //       id: id++,
      //       text: text,
      //       done: false,
      //     });
      //   });
      dispatch({
        type: "ADD_NOTE",
        text: text,
      });
    }
  }

  function handleChangeNote(note) {
    // setNotes((draft) => {
    //   const index = draft.findIndex((item) => item.id === note.id);
    //   draft[index] = note;
    // });
    dispatch({
      type: "CHANGE_NOTE",
      ...note,
      //   id: note.id,
      //   text: note.text,
      //   done: note.done,
    });
  }

  function handleDeleteNote(note) {
    // setNotes((draft) => {
    //   const index = draft.findIndex((item) => item.id === note.id);
    //   draft.splice(index, 1);
    // });
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  //   function notesReducer(notes, action) {
  function notesReducer(notes, action) {
    // switch (action.type) {
    //   case "ADD_NOTE":
    //     return [
    //       ...notes,
    //       {
    //         id: id++,
    //         text: action.text,
    //         done: false,
    //       },
    //     ];
    //   case "CHANGE_NOTE":
    //     return notes.map((note) =>
    //       note.id === action.id
    // ? { ...note, text: action.text, done: action.done }
    //         : note
    //     );
    //   case "DELETE_NOTE":
    //     return notes.filter((note) => note.id !== action.id);
    //   default:
    //     return notes;
    // }
    if (action.type === "ADD_NOTE") {
      notes.push({
        id: id++,
        text: action.text,
        done: false,
      });
    } else if (action.type === "CHANGE_NOTE") {
      const index = notes.findIndex((note) => note.id === action.id);
      notes[index].text = action.text;
      notes[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
      const index = notes.findIndex((note) => note.id === action.id);
      notes.splice(index, 1);
    }
  }
  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
