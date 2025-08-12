import {CardTask} from "../components/CardTask";
import Init from "../components/init";
import { useTasks } from "../hooks/useTasks";
import { OutOfTask } from "../components/outOfTask";
import { useState, useMemo } from "react";

import { FiChevronDown } from "react-icons/fi";
import { compareAsc } from "date-fns";

export default function ListaTarefas() {
  const { tasks } = useTasks();
  const [classifier, setClassifier] = useState('')

  const handleClassifier = (e: React.ChangeEvent<HTMLSelectElement>) => {const novoClassifier = e.target.value; setClassifier(novoClassifier)}

  const dueDateOrder = useMemo(() => {return [...tasks].sort((a, b) => compareAsc(new Date(a.dueDate), new Date(b.dueDate)))}, [tasks])
  const createDateOrder = useMemo(() => {return [...tasks].sort((a, b) => compareAsc(new Date(b.createdAt), new Date(a.createdAt)))}, [tasks])

  const lowPriorityTasks = useMemo(() => {return tasks.filter((task) => task.priority === "low")}, [tasks])
  const mediumPriorityTasks = useMemo(() => {return tasks.filter((task) => task.priority === "medium")}, [tasks])
  const highPriorityTasks = useMemo(() => {return tasks.filter((task) => task.priority === "high")}, [tasks])

  const priorityOrder = [...highPriorityTasks, ...mediumPriorityTasks, ...lowPriorityTasks];

  function List(list: any[]) {
    return (
    <ul className="m-3 space-y-3 gap-5 gap-y-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            {list.map((task) => (
            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                
            </li>
              ))}
          </ul>
    )
  }

  if (tasks.length === 0) { 
     return( <Init>
              <OutOfTask></OutOfTask>
            </Init>); 
  } else {
     return (
      <Init>
  
          <div className="px-2">
            <div className="flex items-center justify-between sticky top-0 bg-neutral-900 border-b-3 border-blue-600 p-3">
              <h2 className="text-2xl font-bold ">Todas as Tarefas</h2>
  
              <div className="px-3 flex items-center">           
                <div className="relative inline-block w-40">
                  <select
                    value=""
                    onChange={handleClassifier}
                    id="classifier"
                    className="pl-4 appearance-none w-full p-2 pr-10 bg-neutral-800 text-white border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-neutral-700">
                    <option value="" disabled>Ordenar por</option>
                    <option value="dueDate">Data de Vencimento</option>
                    <option value="createDate">Data de Criação</option>
                    <option value="priority">Prioridade</option>
                  </select>
  
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                    <FiChevronDown className={`text-lg `} />
                  </div>
                </div>
              </div>
            </div>
            
            {classifier === "dueDate" && List(dueDateOrder)}
            {classifier === "createDate" && List(createDateOrder)}
            {classifier === "priority" && List(priorityOrder)}
            {classifier === "" && List(tasks)}
          </div>
  
      </Init>
     );
  }

}
