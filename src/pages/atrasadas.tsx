import { useMemo } from "react";
import Init from "../components/init";
import { useTasks } from "../hooks/useTasks";
import { CardTask } from "../components/CardTask";
import { differenceInDays } from "date-fns";

import { MdDeleteSweep } from "react-icons/md";

export const Atrasadas = () => {
    const { tasks } = useTasks();

    function diasRestantes(dueDate: string): number {
            const today = new Date();
            function parseDataBrasileiraParaISO(dataBR: string): string {
                const [dia, mes, ano] = dataBR.split("/");
                return `${ano}-${mes}-${dia}`;
              }
    
            if (dueDate.includes("/")) {
                dueDate = parseDataBrasileiraParaISO(dueDate);
            }
        
            return differenceInDays(new Date(dueDate), today);
        }
    
    const atrasadas = useMemo(() => { return tasks.filter((task) => { return diasRestantes(String(task.dueDate)) < 0 && task.done === false; }); }, [tasks]);
    
    return (
        <Init>
            <div className="mb-5">
                <h1 className="border-b-3 border-blue-600 text-2xl font-bold p-4">Todas as Tarefas Atrasadas</h1>
                <ul className="space-y-3 gap-5 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {atrasadas.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                    </li>
                ))}
                </ul>
            </div>

            <div className="relative">
                <button title="Deletar Todas!" className="fixed right-10 bottom-10 flex items-center bg-blue-800 rounded-full shadow-lg shadow-gray-700 hover:bg-blue-500 cursor-pointer transition-transform duration-200 hover:scale-110 outline-none">
                    <MdDeleteSweep className="text-6xl p-2.5" />
                </button>
            </div>
        </Init>
    );
} 