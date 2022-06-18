import React from 'react'
import classNames from 'classnames'
import Edit from './Edit';


const List = ({ state, setState }) => {

    const [modal, toggle] = React.useState(false);
    const [job, editJob] = React.useState({
        name: "",
        priority: ""
    });

    const Delete = (item) => {
        const filtered = state.jobs.filter(job => job.name !== item.name);

        setState({
            ...state,
            jobs: [...filtered]
        })
    };

    const EditItem = (item) => {
        toggle(true);
        editJob(item)
    }

    return (
        <React.Fragment>
            <table className='w-full border-collapse border text-center'>
                <thead>
                    <tr>
                        <th className="py-2 text-left px-5">Name</th>
                        <th className="py-2">Priority</th>
                        <th className="py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(state.filteredJobs.length > 0 ? state.filteredJobs : state.jobs).map((item, index) => {
                        const priorityClass = classNames("text-white text-sm py-2 px-5 rounded font-semibold", {
                            "bg-yellow-600": item.priority === "Regular",
                            "bg-red-600": item.priority === "Urgent",
                            "bg-blue-600": item.priority === "Trivial"
                        });

                        return (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                <td className='py-2 px-5 text-left'>{item.name}</td>
                                <td className='py-2'><span className={priorityClass}> {item.priority}</span></td>

                                <td className='py-2'>
                                    <button className='focus:outline-none p-2 rounded bg-gray-200 text-gray-600 text-sm mr-3' onClick={() => Delete(item)}>
                                        <img src="/trash.svg" alt="delete" width={20} height={20} />
                                    </button>
                                    <button className='focus:outline-none p-2 rounded bg-gray-200 text-gray-600 text-sm' onClick={() => EditItem(item)}>
                                        <img src="/edit.svg" alt="edit" width={20} height={20} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <Edit modal={modal} toggle={toggle} job={job} state={state} setState={setState} />
        </React.Fragment>
    )
}

export default List;