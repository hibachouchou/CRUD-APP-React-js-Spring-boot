import React from 'react';
import EmployeeService from '../services/EmployeeService';
import DepartementService from '../services/DepartementService';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';





export default  function CreateEmployeeComponent1 (){





let history = useHistory();
const{id}  = useParams()
const [firstName,SetFirstName]=useState('')
const[lastName,SetLastName]=useState('')
const[emailId,SetEmailID]=useState('')
const[departement,SetDepartement]=useState('')
        
       
 

    // step 3
    useEffect(()=>
    DepartementService.getDepartements().then((res) => {
        this.setState({ departement: res.data});   }
    ))
   


        // step 4
        if(id === '_add'){
            return
        }else{
          
            EmployeeService.getEmployeeById(id).then( (res) =>{
                let employee = res.data;
            SetDepartement(employee.departement)
            SetEmailID(employee.emailId)
            SetFirstName(employee.firstName)
            SetLastName(employee.lastName)
          
            });
          
        }        
    
    
    function saveOrUpdateEmployee(e) {
        e.preventDefault();
        let employee = {firstName: firstName, lastName: lastName, emailId: emailId,departement:departement};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, id).then( res => {
               history.push('/employees');
            });
        }
    }
    
    function changeFirstNameHandler(e) {
        SetFirstName(e.target.value);
    }

    function changeLastNameHandler(e) {
        SetLastName(e.target.value);
    }

    function changeEmailHandler(e) {
        SetEmailID(e.target.value);
    }
    function changeDepartementHandler (e){
        SetDepartement(e.target.value);
    }
    function cancel(){
        history.push('/employees');
    }

   function getTitle(){
        if(id === '_add'){
            return <h3 className="text-center">Ajouter Employee</h3>
        }else{
            return <h3 className="text-center">Modifier Employee</h3>
        }
    }
 
        return(
           <div>
             <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Prénom: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={firstName} onChange={changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={lastName} onChange={changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email : </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={emailId} onChange={changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Departement : </label>
                                            <select className="form-control" name='departement' onChange={changeDepartementHandler} value={departement}  >
                                           {departement.map( (dep)=>
                                                <option  value={dep.id}>{dep.depName}</option>
                                              
                                            )
                                           }
                                              </select>    
                                        </div>
                                        <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Sauvegarder</button>
                                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
           </div>
        )
    }


