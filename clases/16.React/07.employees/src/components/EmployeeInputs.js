import React from 'react';

function EmployeeInputs ({index}, {inputs}, {handleInputChange}) {

    return(
        <React.Fragment>
            <input 
                type="text" 
                name={index}
                onChange={handleInputChange}
                value={inputs.first_name+index}
                placeholder="First Name"
            />

            <input 
                type="text"
                name="last_name"
                onChange={handleInputChange}
                value={inputs.last_name}
                placeholder="Last Name"
            />

            <input 
                type="email" 
                name="email" 
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="Email"
            />

            <input 
                type="number" 
                name="salary" 
                onChange={handleInputChange}
                value={inputs.salary}
                placeholder="Salary"
            />

            <input 
                type="number" 
                name="days" 
                onChange={handleInputChange}
                value={inputs.days}
                placeholder="Days"  
            />
        </React.Fragment>
    )
}

export default EmployeeInputs;