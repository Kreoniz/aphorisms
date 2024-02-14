import Feed from './Feed.tsx'
import Sidebar from './Sidebar.tsx'

function App() {
  function toggleSidebar() {
    const sidebar: Element | null = document.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }

  return (
    <div className="h-auto relative">
      <button
        className="md:hidden hover:underline"
        type="button"
        onClick={toggleSidebar}
      >
        Toggle
      </button>

      <div className="flex my-4">
        <div>
          <Feed />
        </div>

        <div
          id="sidebar"
          className="
            px-4 hidden absolute left-0 bg-white w-full h-full p-4
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
