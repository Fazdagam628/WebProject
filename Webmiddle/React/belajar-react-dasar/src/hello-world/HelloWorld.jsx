export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
      <FooterHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  return <h1>Hello World!</h1>;
}
function ParagraphHelloWorld() {
  return <p>Selamat datang ReactJS</p>;
}

function FooterHelloWorld() {
  return <footer>&copy;Masud</footer>;
}
