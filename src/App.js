import { BasicTable } from "./components/BasicTable";
import { FilterTable } from "./components/FilterTable";
import { PaginationTable } from "./components/PaginationTable";
import { SortingTable } from "./components/SortingTable";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PaginationTable />
    </div>
  );
}
