import { useEffect, useState } from 'react'
import './App.css'
import { Column } from './components/Column'
import { Card } from './components/Card'
import { ColumnContent } from './components/ColumnContent'
import { Title } from './components/Title'
import { Button } from './components/Button'
import { Modal } from './components/Modal'

function App() {

  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    try {
      const url = "http://localhost:3000/tasks"
      const response = await fetch(url, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      setTasks(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

    useEffect(() => {
      fetchTasks();
    }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    {/* Heading */}
      <Title title={"gestor de tareas"}></Title>
      <Button buttonType={"Agregar"} label={"Agregar tarea"} onClick={openModal} ></Button>

    {/* Columns */}
      <div className='columns is-mobile is-multiline'>
        <Column>
          <ColumnContent title="Backlog" tasks={tasks.filter( task => task.estado == "Backlog" )} >
          </ColumnContent>
        </Column>

        <Column>
          <ColumnContent title="To Do" 
            tasks={tasks.filter( task => task.estado == "To do" )}>
          </ColumnContent>
        </Column>

        <Column>
          <ColumnContent title="In progress" tasks={tasks.filter( task => task.estado == "In progress" )}>
          </ColumnContent>
        </Column>

        <Column>
          <ColumnContent title="Done" tasks={tasks.filter( task => task.estado == "Done" )}>
          </ColumnContent>
        </Column>

        <Column>
          <ColumnContent title="Blocked" tasks={tasks.filter( task => task.estado == "Blocked" )}>
          </ColumnContent>
        </Column>
      </div>
      
      {/* Modal add task */}
      <Modal isActive={isModalOpen} onClose={closeModal} > </Modal>
    </>
  )
}

export default App
