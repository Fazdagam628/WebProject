export default function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "✅"}
      </li>
    );
    //   <li>{isCompleted ? <del>{text}</del> : text}</li>;
  }
}
