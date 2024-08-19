import { Link } from "react-router-dom"

function App() {


  return (
    <>
      <div className="landing">
        <h1 className="large">Empolyee Management System</h1>
        <Link to="/display">
      <button className="btn_start">Get Started</button>
      </Link>
      </div>
    </>
  )
}

export default App
