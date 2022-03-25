import useDebould from "./useDebounce";
import { useEffect, useState } from "react";

const fetchItems = [
  "Vuong An Khang",
  "Vuong Thi Thuy Trang",
  "Tran Huong Tra",
  "Pham Minh Phuoc",
  "Pham Thi Luyen",
  "Vuong Van Cuong",
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouldedSearchTerm = useDebould(searchTerm, 500);

  useEffect(() => {
    if (debouldedSearchTerm) {
      setLoading(true);
      setResults(
        fetchItems.filter((item) => {
          return item.toLowerCase().includes(debouldedSearchTerm.toLowerCase());
        })
      );
      setLoading(false);
    } else {
      setLoading(false);
      setResults([]);
    }
  }, [debouldedSearchTerm]);

  return (
    <div>
      <h1>Type to search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
