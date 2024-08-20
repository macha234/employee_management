function editEmployees() {

    return(
     <>
     <h1>EDIT EMPLOYEE</h1>
    <form>
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="email" />
        </div>
        <div>
            <label htmlFor="DateOFBirth">DateOfBirth</label>
            <input type="date" />
        </div>
        <div>
            <label htmlFor="Gender">Gender</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="Residennce">Residence</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="Department">Department</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="Salary">Salary</label>
            <input type="text" />
        </div>

    </form>
    <button>Submit</button>
     </>
    )
}

export default editEmployees