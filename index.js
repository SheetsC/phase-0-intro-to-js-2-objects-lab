const employee = { name: "Sam",streetAddress: "11 Broadway",};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value;
    console.log(newEmployee);
    return newEmployee
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    console.log(employee);
    return employee
};
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    console.log(newEmployee);
    return newEmployee
};
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    console.log(employee);
    return employee
}
