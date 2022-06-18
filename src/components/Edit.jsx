import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Edit = ({ job, modal, toggle, state, setState }) => {

    const [priority, setPriority] = React.useState(job.priority);

    const EditItem = () => {
        const filteredList = state.jobs.filter(item => item.name !== job.name)

        setState({
            ...state,
            jobs: [...filteredList, {
                name: job.name,
                priority
            }]
        })
        toggle(false)
    }

    return (
        <Transition appear show={modal} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => toggle(false)}>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Edit Job
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div>
                                        <label htmlFor="job" className="text-gray-600">Job Name</label>
                                        <input type="text" className="focus:outline-none w-full border rounded px-2 py-3" value={job.name} disabled />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="job" className="text-gray-600">Job Priority</label>
                                        <select className="cursor-pointer focus:outline-none w-full border px-2 py-3 appearance-none rounded" defaultValue={job.priority} onChange={e => setPriority(e.currentTarget.value)}>
                                            <option value="Choose" disabled>Choose</option>
                                            <option value="Regular">Regular</option>
                                            <option value="Trivial">Trivial</option>
                                            <option value="Urgent">Urgent</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 items-center justify-center mt-4">
                                    <button className="focus:outline-none py-2 px-5 rounded bg-gray-200 text-gray-600" onClick={() => toggle(false)}>Cancel</button>
                                    <button className="focus:outline-none py-2 px-5 rounded bg-red-600 text-white" onClick={EditItem}>Save</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
};

export default Edit;