import Navbar from "./components/Navbar";
import InvoicesDetails from "./components/InvoicesDetails";

function App() {
  return (
    <div className="flex ">
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-2xl py-3 px-3">
        <InvoicesDetails />
      </div>
    </div>
  );
}

export default App;
