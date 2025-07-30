import { differenceInDays } from 'date-fns'
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

    function diasRestantes(dueDate: string): number {
        const today = new Date();
        const [dia, mes, ano] = dueDate.split("/");
        const dueDateobj = `${ano}-${mes}-${dia}`

        return differenceInDays(dueDateobj, today)
    }
    
    const overdueTasks = useMemo(() => { return tasks.filter((task) => { return diasRestantes(String(task.dueDate)) < 0 && task.done === false; }); }, [tasks]);
    const todayTasks = useMemo(() => { return tasks.filter((task) => { return diasRestantes(String(task.dueDate)) === 0 && task.done === false; }); }, [tasks]);
    const weekTasks = useMemo(() => { return tasks.filter((task) => { return diasRestantes(String(task.dueDate)) <= 7 && task.done === false && diasRestantes(String(task.dueDate)) > 0; }); }, [tasks]);
    const otherTasks = useMemo(() => { return tasks.filter((task) => { return diasRestantes(String(task.dueDate)) > 7 && task.done === true; }); }, [tasks]);

    if (props.filter === "done") {
        return (
            <div>
                {undoneTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Não Concluídas</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {undoneTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}

                {doneTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Concluídas</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {doneTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        )
    } else if (props.filter === "priority") {
        return (
            <div>
                {highPriorityTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Alta</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {highPriorityTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}
                
                {mediumPriorityTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Média</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {mediumPriorityTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}

                {lowPriorityTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Baixa</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {lowPriorityTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                            </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        )
    } else if (props.filter === "prazo") {
        return (
            <div>
                {overdueTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Atrasadas</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {overdueTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}

                {todayTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Para Hoje</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {todayTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}

                {weekTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Para Esta Semana</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {weekTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}

                {otherTasks.length !== 0 && (
                    <>
                        <h1 className="text-2xl font-bold p-4">Outras</h1>
                        <ul className="space-y-3 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {otherTasks.map((task) => (
                            <li key={task.id} className="flex p-3 rounded-lg justify-center">
                                <CardTask id={task.id} title={task.title} description={task.description || "Sem descrição"} dueDate={new Date(task.dueDate).toLocaleDateString()} done={task.done} priority={task.priority || "low"}></CardTask>
                                
                            </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        )
    }

}





