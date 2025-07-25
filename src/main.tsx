import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { TasksProvider } from "./contexts/TasksContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksProvider><App /></TasksProvider>
  </StrictMode>,
)
