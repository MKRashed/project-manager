import { useState } from 'react'
import SideBar from './SideBar'
import ProjectList from './ProjectList'
import Header from './Header'

import { ProjectContext } from './context'


function App() {

  const [ searchValue, setSearchValue ] = useState('');

  return (
    <>
    <ProjectContext.Provider value={{ searchValue, setSearchValue}} >

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
