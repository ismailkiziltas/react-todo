import React from 'react'
import { ToastContainer } from 'react-toastify';
import CreateForm from "./components/CreateForm";
import 'react-toastify/dist/ReactToastify.css';
import List from './components/List';
import SearchForm from './components/SearchForm';

const App = () => {

  const [state, setState] = React.useState({
    jobs: JSON.parse(localStorage.getItem("jobs")) || [],
    filteredJobs: []
  })

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3001");
        const data = await response.json();
        localStorage.setItem("jobs", JSON.stringify(data || []));
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  return (
    <React.Fragment>
      <div className="grid place-items-center h-screen">
        <div className="container mx-auto">
          <CreateForm state={state} setState={setState} />
          <div className="">
            <SearchForm state={state} setState={setState} />
          </div>
          <List state={state} setState={setState} />
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
