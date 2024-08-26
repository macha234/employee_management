import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  let navigate = useNavigate();
  let params = useParams();
  // this gives you back an array of employees from the localstorage
  const employees = JSON.parse(localStorage.getItem("employees"));
  // match the employee id with the params.id
  const employee = employees.find((employee) => employee.id == params.id);

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [dateOfBirth, setDateOfBirth] = useState(employee.dateOfBirth);
  const [gender, setGender] = useState(employee.gender);
  const [residence, setResidence] = useState(employee.residence);
  const [department, setDepartment] = useState(employee.department);
  const [salary, setSalary] = useState(employee.salary);

  function updateEmployee(event) {
    event.preventDefault();

    // construct object that will hold a single employee
    const data = {
      id: employee.id,
      name: name,
      email: email,
      gender: gender,
      dateOfBirth: dateOfBirth,
      residence: residence,
      department: department,
      salary: salary,
    };

    // make a copy from the list of objects inside the localstorage
    const copyOfObjects = [...employees];

    // update the list of objects from the copy
    const updatedData = copyOfObjects.map((employee) => {
      if (employee.id == params.id) {
        return {
          ...data,
        };
      } else {
        return employee;
      }
    });

    localStorage.setItem("employees", JSON.stringify(updatedData));
    navigate("/display");
  }

  return (
    <div>
      <h1>Edit Employee</h1>
      <form onSubmit={updateEmployee}>
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
          <button type="submit">edit employee</button>
        </div>
      </form>
    </div>
  );
}

export default EditPage;
