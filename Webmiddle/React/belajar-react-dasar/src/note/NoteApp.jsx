// import { useImmer } from "use-immer";
import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";
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
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
