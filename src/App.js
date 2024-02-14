import Navbar from "./components/Navbar";
import InvoicesForms from "./components/InvoicesForms";
import InvoicesDetails from "./components/InvoicesDetails";
import InvoiceList from "./components/InvoiceList";

function App() {
  return (
    <div className="flex ">
      <Navbar />
      {/* Main Content */}
      <article className="flex-1">Invoices</article>
    </div>
  );
}

export default App;
