import React from "react";
import { toast } from 'react-toastify';

const CreateForm = ({
  state,
  setState
}) => {

  const [data, setData] = React.useState({
    name: "", priority: "Choose"
  })

  const Create = (event) => {
    event.preventDefault();

    if (data.name.length > 3 && data.priority !== "Choose") {
      setState({
        ...state,
        jobs: [...state.jobs, data]
      })

      setData({
        name: "",
        priority: "Choose"
      })
    }
    else if (data.name.length < 3) {
      toast.error("İş adı 3 karakterden az olamaz")
    }
    else if (data.priority === "Choose") {
      toast.error("Lütfen bir öncelik seçin")
    }
  };

  React.useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify([...state.jobs]))
  }, [state.jobs])

  return (
    <form onSubmit={Create}>
      <h1 className="font-bold text-2xl mb-5">Create New Job</h1>
      <div className="grid grid-cols-form gap-3 items-end">
        <div>
          <label htmlFor="job" className="text-gray-600">Job Name</label>
          <input type="text" className="focus:outline-none w-full border rounded px-2 py-3" name="job" value={data.name} onChange={e => setData({ ...data, name: e.currentTarget.value })} required />
        </div>
        <div>
          <label htmlFor="job">Job Priority</label>
          <select className="cursor-pointer focus:outline-none w-full border px-2 py-3 appearance-none rounded" value={data.priority} onChange={e => setData({ ...data, priority: e.currentTarget.value })} required>
            <option value="Choose" disabled>Choose</option>
            <option value="Regular">Regular</option>
            <option value="Trivial">Trivial</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
        <div>
          <button type="submit" className="focus:outline-none rounded py-2 px-5 text-white bg-blue-600 h-[50px] flex items-center">
            <img src="/plus.svg" alt="create" width={30} height={20} />
            <span className="ml-2">Create</span>
          </button>
        </div>
      </div>
    </form>
  )
};

export default CreateForm;