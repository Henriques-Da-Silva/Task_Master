import { CardTask } from "../components/CardTask";
import { useTasks } from "../hooks/useTasks";
import { useMemo } from "react";

interface filterProps {
    filter: string;
}

export const Filter = (props: filterProps) => {
    const { tasks } = useTasks();

    const doneTasks = useMemo(() => {return tasks.filter((task) => task.done === true )}, [tasks])
    const undoneTasks = useMemo(() => {return tasks.filter((task) => task.done === false )}, [tasks])
    
    const lowPriorityTasks = useMemo(() => {return tasks.filter((task) => task.priority === "low")}, [tasks])
    const mediumPriorityTasks = useMemo(() => {return tasks.filter((task) => task.priority === "medium")}, [tasks])
    const highPriorityTasks = useMemo(() => {return tasks.filter((task) => task.priority === "high")}, [tasks])


    if (props.filter === "done") {
        return (
            <div>
                <h1 className="text-2xl font-bold p-4">Não Concluídas</h1>
                <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {undoneTasks.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                        
                    </li>
                    ))}
                </ul>

                <h1 className="text-2xl font-bold p-4">Concluídas</h1>
                <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {doneTasks.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                        
                    </li>
                    ))}
                </ul>
            </div>
        )
    } else if (props.filter === "priority") {
        return (
            <div>
                <h1 className="text-2xl font-bold p-4">Alta</h1>
                <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {highPriorityTasks.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                        
                    </li>
                    ))}
                </ul>

                <h1 className="text-2xl font-bold p-4">Média</h1>
                <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {mediumPriorityTasks.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                        
                    </li>
                    ))}
                </ul>

                <h1 className="text-2xl font-bold p-4">Baixa</h1>
                <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {lowPriorityTasks.map((task) => (
                    <li key={task.id} className="flex p-3 rounded-lg justify-center">
                        <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }

}





