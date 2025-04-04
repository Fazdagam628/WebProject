import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn Javascript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn ReactJS",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Learn PHP",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Learn Laravel",
      isCompleted: false,
    },
  ];
  const todos = data.map((todo) => {
    return <Todo key={todo.id} {...todo} />;
  });
  return <ul>{todos}</ul>;
}
