import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { Trash } from "phosphor-react";

export function History() {
    const { cycles } = useContext(CyclesContext)

    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map(cycle => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>{formatDistanceToNow(new Date(cycle.startDate), {
                                        addSuffix: true,
                                        locale: ptBR
                                    })}</td>
                                    <>
                                        <td>
                                            {cycle.finishedDate && (
                                                <Status statusColor="green">Concluído
                                                    <button><Trash /></button>
                                                </Status>
                                            )}

                                            {cycle.interruptedDate && (
                                                <Status statusColor="red">Interrompido
                                                    <button><Trash /></button>
                                                </Status>
                                            )}

                                            {(!cycle.finishedDate && !cycle.interruptedDate) && (
                                                <Status statusColor="yellow">Em andamento
                                                    <button><Trash /></button>
                                                </Status>
                                            )}
                                        </td>
                                    </>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}