import { useReducer } from 'react'
import Header from './Header'
import ProjectList from './ProjectList'
import SideBar from './SideBar'
import { ProjectContext } from './context'
import { initialSearch, searchReducer } from './reducers/searchReducer.jsx'

function App() {
  const  [ state, dispatch ] = useReducer(searchReducer, initialSearch );

  return (
    <>
    <ProjectContext.Provider value={{ state, dispatch }} >
        <div className="bg-gray-900 text-white">
          <div className="flex h-screen">
          <SideBar/>
          <main className='flex-1 overflow-y-auto overflow-x-hidden'>
              <Header/>
              <ProjectList/>
          </main>
          </div>
        </div>
    </ProjectContext.Provider>
    </>
  )
}

export default App
