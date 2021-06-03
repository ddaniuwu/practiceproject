import React from 'react'
import './styles/App.css'
import {BootstrapTable , TableHeaderColumn } from 'react-bootstrap-table'
import Header from './components/Header'
import data from './components/Data'
import Recorder from './components/Recorder'


export default class TextFilter extends React.Component{
  state={
   data:data     
  }
  render(){
    const createCustom =(onClick) =>{
      return(
        <button onClick={ onClick } >
          Add employee
          </button>
      )
    }
  const options ={
    onAddRow: this.onAddRow,
    insertBtn: createCustom,
    ignoreEditable:true
  };
    const cellEdit = {
      mode: 'click'
    };

    function formatoMX(cell,row){
      return `$${cell}.00`
    }
    
    function formato(fieldValue ) {
      return  fieldValue >=10000 ?  'class-more': 'minus';
    }
    return(
      
      <main >
        <section>
        <div className="container">
        <Header/>
        <Recorder/>
        <button className="button">USD</button>

      <BootstrapTable  
            data={ data }
            cellEdit = {cellEdit} options={options}
            keyField = 'id'
            insertRow striped hover  maxHeight='120px'
            bordered={ false }
             >

        <TableHeaderColumn dataField='id' >
          ID
        </TableHeaderColumn>
          
        <TableHeaderColumn
         dataField='employee_name'
          filter={ { type: 'TextFilter', delay: 1 }}>
            Employee Name
        </TableHeaderColumn>

        <TableHeaderColumn dataField='first_surname' >
          First Surname
        </TableHeaderColumn>

        <TableHeaderColumn dataField='second_surname'>
          Second Surname
        </TableHeaderColumn>

        <TableHeaderColumn 
        dataField='salary' 
        dataAlign="right" dataFormat={formatoMX}
        columnClassName={ formato }>
          Salary
        </TableHeaderColumn>

        <TableHeaderColumn dataField='company' 
        filter={{type: 'TextFilter' , delay: 1 }}
        editable={false}
        >Organization</TableHeaderColumn>
      </BootstrapTable>
          </div>
          </section>
      </main>
    )
  }
}
