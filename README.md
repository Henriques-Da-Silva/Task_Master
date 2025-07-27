# TaskMaster (Gerenciador de Tarefas)

  Este é um projeto de gerenciamento de tarefas, feito usando: TYPESCRIPT + REACT + VITE.
  
## Funcionalidades

  1. Permite criar tarefas, inserindo um título pra esta, uma descrição(opcional), data de vencimento obrigatória, etc.

  2. É possível ainda editá-las, alterando todos os dados se necessário. Pra tal, basta apenas clicar sobre a task.

  3. Permite também eliminá-las.

## Interface do Card da Task

### Header

    Temos um header(cabeçalho), onde é exibido o título da task à esquerda, alguns ícones e ainda um botão à direita.
    
      • O primeiro ícone representa o status de prioridade da task.
        1. O vermelho é de prioridade alta.
        2. O amarelo é de prioridade média.
        3. E o verde é de prioridade baixa.

      • O segundo representa o status da task, quanto a a proximidade da data de vencimento.

      • Já o botão, serve para marcar a task como completa ou incompleta.

### Body

    No body do card da task é apresentado um trecho da descrição da task.

    • Clicando aqui, você abre a task e consegue editá-la.

### Footer

    Já no footer(rodapê) do card, temos a esquerda a informação da data de vencimento da task e um botão a direita.
    
    • O botão serve para deletar a task.