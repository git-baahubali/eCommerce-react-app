import React from 'react'

function Dropdown() {
    return (    
        <div className="dropdown dropdown-hover py-2">
        <label tabIndex={0} className="btn hover:text-blue-500">Category</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><p>Category 1</p></li>
          <li><p>Category 2</p></li>
          <li><p>Category 3</p></li>

        </ul>
      </div>
    )
}

export default Dropdown
