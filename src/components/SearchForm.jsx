import React from 'react';


const SearchForm = ({ state, setState }) => {

    const [data, setData] = React.useState({
        name: "",
        priority: "all"
    })
    const setName = (event) => {
        setData({
            ...data,
            name: event.currentTarget.value
        })
    }

    const setPriority = (event) => {
        setData({
            ...data,
            priority: event.currentTarget.value
        })
    }

    React.useEffect(() => {
        let filteredJobs = [];

        console.log(data);

        if (data.name.length === 0 && data.priority === "all") {
            filteredJobs = [];
        }
        else if (data.name.length > 0 && data.priority === "all") {
            filteredJobs = state.jobs.filter(item => item.name.toLocaleLowerCase().match(data.name.toLocaleLowerCase()));
        } else if (data.name.length === 0 && data.priority !== "all") {
            filteredJobs = state.jobs.filter(item => item.priority.toLocaleLowerCase().match(data.priority.toLocaleLowerCase()));
        } else {
            filteredJobs = state.jobs.filter(item => item.name.toLocaleLowerCase().match(data.name.toLocaleLowerCase()) && item.priority.toLocaleLowerCase().match(data.priority.toLocaleLowerCase()));
        }

        setState({
            ...state,
            filteredJobs
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.priority, data.name])

    return (
        <React.Fragment>
            <div className="flex flex-wrap items-center justify-between mb-3">
                <div>
                    <h2 className='font-bold'>Job List</h2>
                </div>
                <div>
                    {`${state.filteredJobs.length}/${state.jobs.length}`}
                </div>
            </div>
            <form className="p-2 bg-blue-100 border-b">
                <div className="flex flex-wrap items-end">
                    <div className="flex-1 mr-5">
                        <input type="text" className="focus:outline-none w-full border rounded px-2 py-3 placeholder:text-gray-600" name="job" value={data.name} onFocus={setName} onBlur={setName} onChange={setName} placeholder="Job Name" required />
                    </div>
                    <div className="w-1/5">
                        <select className="cursor-pointer focus:outline-none w-full border px-2 py-3 appearance-none rounded" value={data.priority} onChange={setPriority} required>
                            <option value="all">Priority (all)</option>
                            <option value="Regular">Regular</option>
                            <option value="Trivial">Trivial</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};
export default SearchForm;