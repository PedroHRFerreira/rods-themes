// Compare comentários, palavras-chave, funções, strings e números nos cinco temas.
interface ITask {
  readonly id: string
  title: string
  priority: number
  complete: boolean
}

const tasks: ITask[] = [
  { id: 'design', title: 'Escolher uma paleta', priority: 3, complete: true },
  { id: 'build', title: 'Gerar os cinco temas', priority: 2, complete: false }
]

class TaskBoard {
  constructor(private readonly items: ITask[]) {}

  public pending = () => this.items.filter((task) => !task.complete)
}

const formatTask = (task: ITask): string => {
  const status = task.complete ? 'concluída' : 'pendente'
  return `${task.title} — ${status} (${task.priority})`
}

const board = new TaskBoard(tasks)
const pending = board.pending().map(formatTask)
console.info({ pending, total: tasks.length })
