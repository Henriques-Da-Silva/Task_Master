import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "../hooks/useSidebar";

interface InitProps {
    children?: React.ReactNode;
}

export default function Init(props: InitProps) {
  const {openSidebar, setOpenSidebar} = useSidebar();

  return (
    <div className="flex min-h-screen bg-neutral-900 text-white">
        <aside className={`flex flex-col duration-300 bg-gray-900 rounded-l-[8px] text-gray-300 ${!openSidebar ? 'w-62' : 'w-20'} p-2 pl-4 border-x border-t border-gray-400`}>
          <nav className="flex flex-col gap-2">

            <NavLink to="/" className="flex text-2xl font-bold text-white mb-8 mt-5 hover:text-blue-200">
            <img title="Status" src="/image.png" alt="Ícone" width={32} height={32} />
            TaskMaster</NavLink>

            <NavLink to="/novatarefa" className="font-bold text-center bg-blue-300 text-black p-2 rounded-xl hover:bg-blue-500">Nova tarefa</NavLink>

            <NavLink to="/listatarefas" className="font-bold text-center bg-blue-300 text-black p-2 rounded-xl hover:bg-blue-500">Exibir tarefas</NavLink>

          </nav>
        </aside>

        <div className="flex flex-col flex-1">
            <header className="bg-stone-950 flex justify-between p-6 items-center border-y border-gray-400 rounded-tr-[8px]">
              <FiMenu title={`${!openSidebar ? 'Abrir Menu' : 'Fechar Menu'}`}  className="text-3xl hover:cursor-pointer hover:text-blue-200" onClick={() => setOpenSidebar(!openSidebar)}/>
              <h2 className="text-cyan-100 text-lg">Bem vindo ao seu app To-do!</h2>
            </header>

            <div className="flex-1">

            <div className="p-5 min-h-[550px] max-h-[calc(100vh-90px)] overflow-y-auto scrollbar scrollbar-thumb-gray-800 scrollbar-hover:scrollbar-thumb-slate-700">
                  <div>
                      {props.children}
                  </div>
              </div>

          </div>

        </div>
    </div>
  );
}
