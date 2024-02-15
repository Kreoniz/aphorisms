import Feed from './Feed.tsx'
import Sidebar from './Sidebar.tsx'
import { Link } from "react-router-dom";

function App() {
  function toggleSidebar() {
    const sidebar: Element | null = document.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }

  return (
    <div className="h-auto relative">

      <div className="flex justify-between items-center pt-2 px-3">
        <div>
          <Link to='/' className="text-xl sm:text-2xl font-bold hover:underline">Home</Link>
        </div>

        <button
          className="md:hidden hover:underline"
          type="button"
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex my-4">
        <div>
          <Feed />
        </div>

        <div
          id="sidebar"
          className="
            px-4 hidden absolute left-0 bg-white w-full h-full
            md:min-w-min md:block md:static md:w-2/5
            xl:w-1/4
          "
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
