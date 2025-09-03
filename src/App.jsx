import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import Container from "./Container";
function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Student name="Dendup" age={18}></Student>
          <Student name="Dendup" age={18}></Student>
          <Student name="Dendup" age={18}></Student>
          <Student name="Dendup" age={18}></Student>
        </div>
      </div>
    </>
  );
}

export default App;
