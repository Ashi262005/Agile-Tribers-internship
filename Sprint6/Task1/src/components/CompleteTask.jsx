import TaskCard from "./TaskCard";
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../store/taskSlice';
import { Link } from "react-router-dom";
const CompleteTask = () => {
    const tasks = useSelector(selectAllTasks);
    const completedTasks = tasks.filter(task => task.status === 'Completed');

    return (
        <div className="w-[70%] mx-auto">
            <div className="mt-10">
                <h1 className="text-3xl font-bold my-8 text-center">Completed Tasks</h1>
            </div>
            {
                completedTasks.length > 0 ? (
                    <div className="flex flex-wrap gap-y-4 gap-x-14 justify-center overflow-y-scroll mt-5 h-[50vh] sm:h-[80vh]">
                        {completedTasks.map(task => (
                            <TaskCard
                                key={task.id}
                                title={task.title}
                                description={task.description}
                                startDate={task.startDate}
                                endDate={task.endDate}
                                status={task.status}
                                assignee={task.assignee}
                                priority={task.priority}
                            />
                        ))}
                    </div>
                ) : (<div className="text-center mt-[17vh] sm:mt-[30vh]">
                    <p>No tasks found. <Link to="/addTask" className="text-indigo-500">Add a new task</Link></p>
                </div >)
            }

        </div >
    );
};


export default CompleteTask;

// import TaskCard from "./TaskCard";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectAllTasks, removeTask } from '../store/taskSlice'; // Import removeTask action
// import { Link } from "react-router-dom";

// const CompleteTask = () => {
//     const dispatch = useDispatch();
//     const tasks = useSelector(selectAllTasks);
//     const completedTasks = tasks.filter(task => task.status === 'Completed');

//     const handleDelete = (id) => {
//         dispatch(removeTask(id)); // Dispatch the removeTask action with the task ID
//     };

//     return (
//         <div className="w-[70%] mx-auto">
//             <div className="mt-10">
//                 <h1 className="text-3xl font-bold my-8 text-center">Completed Tasks</h1>
//             </div>
//             {
//                 completedTasks.length > 0 ? (
//                     <div className="flex flex-wrap gap-y-4 gap-x-14 justify-center overflow-y-scroll mt-5 h-[50vh] sm:h-[80vh]">
//                         {completedTasks.map(task => (
//                             <div key={task.id} className="relative bg-white shadow-md rounded p-4">
//                                 <TaskCard
//                                     title={task.title}
//                                     description={task.description}
//                                     startDate={task.startDate}
//                                     endDate={task.endDate}
//                                     status={task.status}
//                                     assignee={task.assignee}
//                                     priority={task.priority}
//                                 />
//                                 <button
//                                     onClick={() => handleDelete(task.id)}
//                                     className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="text-center mt-[17vh] sm:mt-[30vh]">
//                         <p>No tasks found. <Link to="/addTask" className="text-indigo-500">Add a new task</Link></p>
//                     </div>
//                 )
//             }
//         </div>
//     );
// };

// export default CompleteTask;