import React from 'react'
import data from './Data'
function Header(){
return(
<header  className="p-3 mb-2 bg-success text-white">
    <label>Numero de Empleados</label>
            <input type="text" readOnly cursor="pointer" value={data.length}></input><br></br>
</header>
)
}

export default Header