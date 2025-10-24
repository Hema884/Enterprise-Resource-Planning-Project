export async function fetchEmployees() {
  const res = await fetch('/api/employees');
  const response = await res.json();
  
  if (!response.success) {
    throw new Error('Failed to fetch employees');
  }

  // Transform the data to match the expected format
  return response.data.map(employee => ({
    emp_code: employee.id,
    name: `${employee.first_name} ${employee.last_name}`,
    role: employee.position,
    email: employee.email,
    contact: employee.phone,
    joining_date: employee.hire_date,
    department: employee.department,
    status: employee.status
  }));
}

export async function getEmployee(emp_code) {
  const res = await fetch(`/api/employees/${encodeURIComponent(emp_code)}`);
  const response = await res.json();
  
  if (!response.success) {
    throw new Error('Failed to fetch employee details');
  }

  const employee = response.data;
  return {
    emp_code: employee.id,
    name: `${employee.first_name} ${employee.last_name}`,
    role: employee.position,
    email: employee.email,
    contact: employee.phone,
    joining_date: employee.hire_date,
    department: employee.department,
    status: employee.status
  };
}

export async function addEmployee(payload) {
  const res = await fetch('/api/employees', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  return res.json();
}

export async function updateEmployee(emp_code, payload) {
  const res = await fetch(`/api/employees/${encodeURIComponent(emp_code)}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  return res.json();
}

export async function deleteEmployee(emp_code, force = false) {
  const res = await fetch(`/api/employees/${encodeURIComponent(emp_code)}${force ? '?force=1' : ''}`, { method: 'DELETE' });
  return res.json();
}

export async function deleteEmployeeForce(emp_code) {
  return deleteEmployee(emp_code, true);
}

export async function getEmployeeDependencies(emp_code) {
  const res = await fetch(`/api/employees/${encodeURIComponent(emp_code)}/dependencies`);
  return res.json();
}
