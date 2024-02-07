// Часть 1

const EmployeeDB = [
    { name: 'froggistone', post: 'Main Croacer', departament: 'Bouncy Room' },
    { name: 'cattington', post: 'Main Meower', departament: 'Paws Room' },
];

const newEmployee = (name, post, departament) => {
    newEmplo = {'name': name, 'post': post, 'departament': departament}
    EmployeeDB.push(newEmplo)
};

const readEmployeed = () => (console.log(JSON.stringify(EmployeeDB, null, '   ')))

newEmployee('birdon', 'Main Singing', 'Sing Room');
readEmployeed(); // В консоль вывелась информация по двум старым сотрудникам и по одному новому.

// Часть 2

const capitalizeName = (EmployeeDB) => {
  for (const employee of EmployeeDB) {
    const { name } = employee;
    const [first, ...rest] = name;
    const nameToName = first.toUpperCase() + rest.join('');
    employee.name = nameToName;
  }
  return EmployeeDB;
};

const lowRegisterDepartament = (EmployeeDB) => {
    for (const employee of EmployeeDB) {
      const { departament } = employee;
      const lowDepartament = departament.toLowerCase();
      employee.departament = lowDepartament;
    }
    return EmployeeDB;
  };

console.log('Работа функии capitalizeName', JSON.stringify(capitalizeName(EmployeeDB), null, '   '));
console.log('Работа функии lowRegisterDepartament', JSON.stringify(lowRegisterDepartament(EmployeeDB), null, '   '));

const deleteEmployee = (name, EmployeeDB) => {
  for (const employee of EmployeeDB) {
    if (employee.name === name) {
        delete employee.name;
        delete employee.post;
        delete employee.departament;
    }
  }
  return EmployeeDB;
};

const updateEmployee = (EmployeeDB, nameInterestEmployee, ...employeeDataArr) => {
  let needEmployeeData;
  for (const employee of EmployeeDB) {
    if (employee['name'] === nameInterestEmployee) {
        needEmployeeData = employee;
    }
  }
  for (const [key, value] of employeeDataArr) {
    if (Object.hasOwn(needEmployeeData, key)) {
        needEmployeeData[key] = [value];
    }
  }
  for (const employee of EmployeeDB) {
    if (employee['name'] === nameInterestEmployee) {
      for (const data of employee) {
        employee.data = needEmployeeData.data;
        console.log(data)
      }
    }
  }
  return EmployeeDB
};

console.log('Работа функии deleteEmployee', JSON.stringify(deleteEmployee('Birdon', EmployeeDB), null, '   '));
console.log('Работа функии updateEmployee', JSON.stringify(updateEmployee(EmployeeDB, 'Cattington', ['name', 'kittington'], ['post', 'Main Slippers Killer'], ['departament', 'WardRobe']), null, '   '));
console.log(EmployeeDB)