import { useState } from "react";

function Form({ employees, setEmployees }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [gender, setGender] = useState("")
    const [residence, setResidence] = useState("")
    const [department, setDepartment] = useState("")
    const [salary, setSalary] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newData = [...employees]

        const data = {
            id: Math.random(),
            name: name,
            email: email,
            dateOfBirth: dateOfBirth,
            gender: gender,
            residence: residence,
            department: department,
            salary: salary,
        }

            newData.push(data)

            setEmployees(newData)
        }

        return(
            <>
            <h1>Form</h1>

<div>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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

    <div>
      <button>create employee</button>
    </div>
  </form>
</div>
            </>
        )
    }

    export default Form
