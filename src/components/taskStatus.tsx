interface StatusProps {
    done?: boolean;
    priority?: string;
  }

export const Status = (props: StatusProps) => {
    if (props.done === true) {
        return (
            <p title="Status" className="hover:bg-blue-300 rounded-2xl p-0.5">⚪</p>
        )
    } else {
        return (
            <p title="Status" className="hover:bg-blue-300 rounded-2xl p-0.5">🔴</p>
        )
    }
}

export const StatusOfPriority = (props: StatusProps) => {
    if (props.priority === "low") {
        return (
            <p title="Prioridade: Baixa" className="hover:bg-blue-300 rounded-2xl p-0.5">⬇</p>
        )
    } else if (props.priority === "medium") {
        return (
            <p title="Prioridade: Média" className="hover:bg-blue-300 rounded-2xl p-0.5">↔</p>
        )
    } else {
        return (
            <p title="Prioridade: Alta" className="hover:bg-blue-300 rounded-2xl p-0.5">⬆</p>
        )
    }
}

