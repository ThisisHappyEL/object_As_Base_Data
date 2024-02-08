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
        needEmployeeData[key] = value;
        
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

// Часть 3

let newEmployeeDB = {};

const cloneEmployeeDB = (EmployeeDB) => {
  newEmployeeDB = structuredClone(EmployeeDB);
  return newEmployeeDB
};

const mergeEmployeeDB = (newEmployeeDB, EmployeeDB) => {
  const mergeNewEmployeeDB = Object.assign(newEmployeeDB, EmployeeDB);
  return mergeNewEmployeeDB;
};

console.log('Работа функии cloneEmployeeDB', JSON.stringify(cloneEmployeeDB(EmployeeDB), null, '   '));
console.log('Работа функии mergeEmployeeDB', JSON.stringify(mergeEmployeeDB(newEmployeeDB, EmployeeDB), null, '   '));

//Для проверки работы следующей функции сделаю нового сотрудника с таким же отделом, как у 'Froggistone'
newEmployee('Toadston', ' Additional Croacer', 'bouncy room');

const uniqueDepartaments = (EmployeeDB) => {
  const departamentList = [];
  for (const employee of EmployeeDB) {
    const { departament } = employee;
    if (departament !== undefined && departament !== null && !departamentList.includes(departament))
    departamentList.push(departament)
  }
  return departamentList
};

console.log('Работа функии uniqueDepartaments', uniqueDepartaments(EmployeeDB));

// Часть 4

const comprasionEmployee = (firstEmployeeDataObj, secondEmployeeDataObj) => {
  for (const key1 in firstEmployeeDataObj) {
    for (const key2 in secondEmployeeDataObj)
    if (firstEmployeeDataObj[key1] === secondEmployeeDataObj[key2]) {
      console.log(`"${firstEmployeeDataObj[key1]}", у первого сотрудника и "${secondEmployeeDataObj[key2]}" у второго полностью свопадают`)
    }
  }
};

// Данная функция печатает в консоль о том, какие value объектов сотрудников совпали
comprasionEmployee({name: 'Froggistone', departament: 'bouncy room'}, {name: 'Toadston', departament: 'bouncy room'})
