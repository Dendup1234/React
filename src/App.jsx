import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Tailwind from "./Tailwind";
import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Dendup" />
      <Student age={20} />
      <Student isStudent={true} />
    </>
  );
}

export default App;
