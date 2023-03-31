import { Header } from "./components/Layout/Header.js";
import { Footer } from "./components/Layout/Footer.js";
import { MainContent } from "./components/Layout/MainContent.js";


function App() {
  return (
    <div className="container min-h-screen mx-auto max-w-5xl p-4 flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
