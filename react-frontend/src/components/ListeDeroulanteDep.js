import React, { useEffect } from "react"
import { useState } from "react"
import DepartementService from "../services/DepartementService";
export default function ListeDeroulanteDep(){
    const [ departement,SetDepartement]=useState([]);
    useEffect(()=>
    DepartementService.getDepartements().then((res) => {
        this.SetDepartement(res.data)})
    )
    return(
        <div>
            
        </div>
    )
}