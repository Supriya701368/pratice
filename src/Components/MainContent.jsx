import React from 'react'
import Styles from "../Components/Style.module.css"
const MainContent = () => {
  return (
    <div>
      <div className={Styles.Main}>
        <div className={Styles.Add}>
            <button style={{margin:"5%"}} >Add Course</button>
           
            </div>
            <div>
            <label>Search</label>
            <input type="text" placeholder='Search...' />
            <button style={{margin:"5%"}}>Search</button>
            </div>
            <div>
            <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Supriya</td>
        <td>22</td>
        <td>Hyderabad</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Rahul</td>
        <td>24</td>
        <td>Delhi</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Anjali</td>
        <td>21</td>
        <td>Mumbai</td>
      </tr>
    </tbody>
  </table>
            </div>
        </div>
    </div>
  )
}

export default MainContent