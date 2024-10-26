import { useState } from "react";
import TaskList from "./TaskList";
export default function ReviseList({ title, tasks, onDelete, onEdit}){
  const [sortValue, setSortValue] = useState(false)

  const handleSortToggle = () => {
    setSortValue((prevValue) => !prevValue);
  };

  const sortedTasks = [...tasks]
  .filter((task) => task) 
  .sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    if (sortValue) {
      // Sort descending
      return dateB - dateA;
    } else {
      // Sort ascending
      return dateA - dateB;
    }
  });
    return (
        <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg bg-rose-500 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{title} ({tasks.length})</h3>
                  <button onClick={handleSortToggle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l9 0" />
                      <path d="M4 12l7 0" />
                      <path d="M4 18l7 0" />
                      <path d="M15 15l3 3l3 -3" />
                      <path d="M18 6l0 12" />
                    </svg>
                  </button>
                </div>
                {sortedTasks.length > 0 ? sortedTasks.map((task) => (
                  <div key={task.id} className="mb-4 rounded-lg bg-gray-800 p-4">
                    <TaskList task={task}  
                      onEdit={onEdit}
                      onDelete={onDelete} />
                </div>
                )) : (      
                  <div className="mb-4 rounded-lg bg-gray-800 p-4"> 
                    <p>No tasks found</p>
                  </div>
                )}
              </div>
            </div>
    );
}