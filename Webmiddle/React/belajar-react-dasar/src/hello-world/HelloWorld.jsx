import "./HelloWorld.css";
export default function HelloWorld() {
  const props = {
    text: "hello world! from spread syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
      <FooterHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "Ups,Lupa kasih teks" }) {
  //   text = "Hello world!";
  return <h1 className="title">{text.toUpperCase()}</h1>;
}
function ParagraphHelloWorld() {
  const text = "Selamat datang ReactJS";
  return <p className="content">{text.toLowerCase()}</p>;
}

function FooterHelloWorld() {
  return <footer>&copy;Masud</footer>;
}
