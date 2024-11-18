import React from 'react'
import './Student.css'

function Student(props) {
  return (
    <div className='icard'>
        <table>
        <tbody>
            <tr style={{backgroundColor:'cyan'}}>
                <td colSpan={2}>props.college</td>
            </tr>
            <tr>
                <td>49</td>
                <td>Ayushmaan</td>
                <td>CSE A</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Student