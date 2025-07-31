import { useState } from "react";
import { Filter  } from "../components/filter";
import Init from "../components/init";


export default function Home() {
  const [filter, setFilter] = useState("done")
  const [search, setSearch] = useState("")

  return (
          <Init>
            <div className="flex items-start justify-between p-3 mb-5">
                <input type="search" value={search} onChange={(text) => setSearch(text.target.value) } className="p-2 bg-neutral-700 border border-gray-600 rounded-3xl w-90" placeholder="Pesquisar" />

                <select value={filter} onChange={(text) => setFilter(text.target.value) } id="filter" className="p-2 bg-neutral-700 border border-gray-600 rounded-3xl w-50" >
                  <option value="done">Status</option>
                  <option value="priority">Prioridade</option>
                  <option value="prazo">Prazo</option>
                  <option value="tag">Tag</option>
                </select>

            </div>

            <div>
                <Filter filter={filter}></Filter>
            </div>
          </Init>
  );
};
