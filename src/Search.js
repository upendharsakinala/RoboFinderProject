import React from 'react'
import './App.css'


export default function Search({onhandleChange}){
    return(
        <div>
            <input type='text' placeholder='search' onChange={(e)=>onhandleChange(e.target.value)}/>
        </div>
    )
}























// export default function SearchBox({onInputChange}) {
//     return (
//         <div>
//             <input 
//                 type='text' 
                // placeholder="Search Robots" 
                // className="pa3 ba b--green bg-lightest-blue"
                // onChange={(event) => onInputChange(event.target.value)}/>
//         </div>
//     )
// }
