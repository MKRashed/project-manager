import { useState, useContext } from "react";
import FormModal from "./FormModal";
import ToDoList from "./components/ToDoLIst";
import OnProgressList from "./components/OnProgressLIst";
import DoneList from "./components/DoneList";
import ReviseList from "./components/ReviseList";
import { ProjectContext } from "./context";

export default function ProjectList(){

    const [ modal, setModal ] = useState(false);
    const { searchValue, setSearchValue } = useContext(ProjectContext);
    const [taskData, setTaskData] = useState([]);
    const [editTaskData, setEditTaskData] = useState(null);

    const todoData = taskData.filter((task) => task.category === 'todo');
    const onProgressData = taskData.filter((task) => task.category === 'inprogress');
    const doneData = taskData.filter((task) => task.category === 'done');
    const reviseData = taskData.filter((task) => task.category === 'revised');

    const handleSubmit = (newTask) => {

      if (editTaskData) {

        const updatedIncomes = taskData.map((task) =>
          task.id === editTaskData.id ? { ...task, ...newTask } : task
        );
  
        setTaskData(updatedIncomes);  
        setEditTaskData(null);
        setModal(!modal);
  
      } else {
        const updatedIncomes = [...taskData, newTask ];
  
        setTaskData(updatedIncomes);  
        setEditTaskData(null);
        setModal(!modal);
      }
    };

    const handleDelete = (taskId) => {
        setTaskData((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    const handleEdit = (taskId) => { 
      const taskToEdit = taskData.find((task) => task.id === taskId);
      console.log(taskToEdit, taskData, taskId);
      

      if (taskToEdit) {
        setEditTaskData(taskToEdit);
        setModal(true);
      }
  }  

  const handleModal = () => {
      setEditTaskData(null);
      setModal(!modal);
  } 




    return (
        <div className="mx-auto max-w-7xl p-6 relative">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projectify</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setModal(!modal)}
                type="button"
                className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="mr-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
                  />
                  <path d="M15 12h-6" />
                  <path d="M12 9v6" />
                </svg>
                Add
              </button>


              {modal && (
                <FormModal setModal={handleModal} 
                onSubmitData={handleSubmit} 
                editTaskData={editTaskData} />
              )}
            </div>
          </div>

          <div className="-mx-2 mb-6 flex flex-wrap">
            {/* <!-- Todo --> */}
            <ToDoList title="To Do" tasks={todoData} 
             onDelete={handleDelete}
             onEdit={handleEdit}
              />
            
            {/* <!-- On Progress --> */}
            <OnProgressList title="On Progress" tasks={onProgressData} 
             onDelete={handleDelete}
             onEdit={handleEdit} />
            

            {/* <!-- Done --> */}
            <DoneList title="Done" tasks={doneData}  onDelete={handleDelete}
             onEdit={handleEdit} />
            

            {/* Revised  */}

            <ReviseList title="Revise" tasks={reviseData}  onDelete={handleDelete}
             onEdit={handleEdit} />
            
          </div>
        </div>
    );
}