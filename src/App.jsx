import newImage from "../src/assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const discription = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={newImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {discription} Fundamental React concepts you will need for B`almost any
        app you are going to build!
      </p>
    </header>
  );
}

const CoreConcept = ({imag, title, desc}) => {
  return (
    <li>
      <img src={imag} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>CoreConcept</h2>
          <ul>
            <CoreConcept
              imag={newImage}
              title="sai"
              desc="i am a great developer"
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
