interface StatusProps {
    done?: boolean;
    priority?: string;
    dueDate: string;
  }

export const StatusOfPriority = (props: StatusProps) => {
    if (props.priority === "low") {
        return (
            <img title="Prioridade: baixa" className="rounded-2xl" src="/low.png" alt="Ícone" width={32} height={32} />
        )
    } else if (props.priority === "medium") {
        return (
            <img title="Prioridade: média" className="rounded-2xl" src="/medium.png" alt="Ícone" width={32} height={32}/>
        )
    } else {
        return (
            <img title="Prioridade: alta" className="rounded-2xl" src="/high.png" alt="Ícone" width={32} height={32} />
        )
    }
}

