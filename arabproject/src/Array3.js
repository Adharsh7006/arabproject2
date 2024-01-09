import React, { useContext, useState } from 'react'
import { samplecontext } from './App'
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom'

function Array3() {
    const {value,setvalue} = useContext(samplecontext)
    const navigate = useNavigate()
  return (
    <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item)=>{
                return(
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mark}</td>
            </tr>
             )
            })}
          </tbody>
        </Table>
        <button onClick={()=>navigate("/Chart")}>chart</button>
        <button onClick={()=>navigate("/Create")}>Add</button>
        </div>
  )
}

export default Array3