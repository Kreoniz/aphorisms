import Feed from './Feed.tsx'
import Sidebar from './Sidebar.tsx'

function App() {
  return (
    <div className="flex my-4">
      <div>
        <Feed />
      </div>

      <div className="min-w-min w-1/4 px-4">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
