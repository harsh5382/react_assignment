
import './App.css'
import UserCard from './UserCard'

function App() {

  return (
    <>
      <UserCard user={{ name: 'John Doe', age: 30, location: 'New York' }} />
    </>
  )
}

export default App
