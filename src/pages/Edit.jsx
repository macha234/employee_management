import { useState } from "react"
import { useParams } from "react-router-dom";

function editEmployees() {
    let params = useParams()
    const employees = JSON.parse(localStorage.getItem("employees"))
    const employee = employees.find((employee) => employee.id == params.id)
    
    const [name, setName] = useState(employee.name)
    const [email,setEmail]  = useState(employee.email)
    const [dateOfBirth, setDateOfBirth] = useState(employee.dateOfBirth);
    const [gender, setGender] = useState(employee.gender);
    const [residence, setResidence] = useState(employee.residence);
    const [department, setDepartment] = useState(employee.department);
    const [salary, setSalary] = useState(employee.salary);
    
    return(
     <>
     <h1>EDIT EMPLOYEE</h1>
    <form>
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="Date of birth">Date of birth</label>
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Residence">Residence</label>
          <input
            type="text"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Department">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Salary">Salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
    </form>
    <button>Submit</button>
     </>
    )
}

export default editEmployees