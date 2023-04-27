import { useState, useContext } from "react";
import { TaskContext } from "../../context/taskContext";
export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //Cancela el reinicio del navegador
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4"
        action=""
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slade-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slade-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
};
