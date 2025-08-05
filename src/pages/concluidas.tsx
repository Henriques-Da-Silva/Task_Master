import { useMemo, useState } from "react";
import Init from "../components/init";
import { useTasks } from "../hooks/useTasks";
import { CardTask } from "../components/CardTask";

import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const Concluidas = () => {
    const { tasks } = useTasks();
    
    const concludedTasks = useMemo(() => {return tasks.filter(task => task.done === true);}, [tasks]);
    const [showconfirm, setShowConfirm] = useState(false);
    
    return (
        <Init>
            <div className="mb-5">
                <h1 className="border-b-3 border-blue-600 text-2xl font-bold p-4">Todas as Tarefas Concluídas</h1>
                <ul className="space-y-3 gap-5 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {concludedTasks.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                    </li>
                ))}
                </ul>
            </div>

            <div className="relative">
                <button title="Deletar Todas!" className="fixed right-10 bottom-10 flex items-center bg-blue-800 rounded-full shadow-lg shadow-gray-700 hover:bg-blue-500 cursor-pointer transition-transform duration-200 hover:scale-110 outline-none"
                onClick={() => setShowConfirm(true)}>
                    <MdDeleteSweep className="text-6xl p-2.5" />
                </button>
            </div>

            {showconfirm && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="flex flex-col p-10 bg-gray-700 rounded-xl gap-13 shadow-lg shadow-gray-600">
                        <div className="relative">
                            <IoClose className="absolute p-1 text-3xl left-73.5 rounded-full bottom-12 hover:bg-gray-800 cursor-pointer" onClick={() => setShowConfirm(false)} />
                            <h1 className="text-lg font-semibold mb-4">Apagar todas as tarefas concluídas?</h1>
                        </div>
                        <div className="flex justify-around">
                            <button className="py-2 px-10 bg-blue-600 rounded-xl hover:bg-blue-800 cursor-pointer" onClick={() => setShowConfirm(false)}>Não</button>
                            <button className="py-2 px-10 bg-blue-600 rounded-xl hover:bg-blue-800 cursor-pointer">Sim</button>
                        </div>
                    </div>
                </div>)}
        </Init>
    );
}