import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PAGE_SIZE = 10; // Number of employees per page
import {Pagination} from './Pagination';
export const Employees = () =>
{
  const [currentPage, setCurrentPage] = useState(0);
  const [employees, setEmployees] = useState([]);
  const noOfPages = Math.ceil(employees.length / PAGE_SIZE); // Calculate the number of pages based on the number of employees
  console.log("Number of pages:", noOfPages);
  const startIndex = PAGE_SIZE * currentPage; // Calculate the start index for slicing the employees array
  // console.log(employees.length)
  const endIndex = startIndex + PAGE_SIZE; // Calculate the end index for slicing the employees array

 const fetchData = async () => {
  try {
    const { data } = await axios.get('https://dummyjson.com/users');
    console.log("Data fetched successfully:", data);

    setEmployees(data.users); // No need for .json()
    
    console.log("Employees fetched successfully:", employees);
  } catch (error) {
    console.error(error);
  }
};    
  useEffect(() =>
  {
fetchData();
  }
    , [employees ]);
  return (
    <div>
{      employees.slice(startIndex,endIndex).map((employee, index) => (
        <div key={index} className="p-4 border-b border-gray-400">
          <p>{employee.firstName} {employee.lastName} </p>
           
        </div>
      ))}
     <Pagination setCurrentPage={setCurrentPage} noOfPages={noOfPages} /> 
    </div>

  )
}
