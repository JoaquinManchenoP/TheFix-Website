import Introduction from "../public/Components/Introduction";
import About from "../public/Components/About";
import Services from "../public/Components/Services";

export default function Home() {
  return (
    <div className="indexPage">
      <Introduction />
      <About />
      <Services />
    </div>
  );
}
