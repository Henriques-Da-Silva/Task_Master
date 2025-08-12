import { useState } from "react";
import { Filter  } from "../components/filter";
import { useTasks } from "../hooks/useTasks";
import Init from "../components/init";
import { OutOfTask } from "../components/outOfTask";

import { FiChevronDown } from "react-icons/fi";


export default function Home() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("done")

  if (tasks.length === 0) {
    return <Init>
            <OutOfTask></OutOfTask>
          </Init>
  } else {
    return (
            <Init>
              <div className="flex flex-row-reverse p-3">
                  
              <div className="relative inline-block">
                <div className="absolute pointer-events-none inset-y-0 right-0 flex items-center pr-3 pt-3 text-white">
                  <FiChevronDown className={`text-lg `} />
                </div>
                
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  id="filter"
                  className="pl-4 appearance-none w-fit p-2 pr-10 bg-neutral-800 text-white border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-neutral-700 mt-3">
                  <option value="done">Status</option>
                  <option value="priority">Prioridade</option>
                  <option value="prazo">Prazo</option>
                </select>
  
              </div>
  
  
              </div>
  
              <div>
                  <Filter filter={filter}></Filter>
              </div>
            </Init>
    );
  }
};
