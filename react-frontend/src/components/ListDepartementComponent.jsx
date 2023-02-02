import React, { Component } from 'react'
import DepartementService from '../services/DepartementService'
class ListDepartementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departements: []
        }
        this.addDepartement = this.addDepartement.bind(this);
        this.editDepartement = this.editDepartement.bind(this);
        this.deleteDepartement = this.deleteDepartement.bind(this);
    }

    //Supprimer Departement

    deleteDepartement(id){
        DepartementService.deleteDepartement(id).then( res => {
            this.setState({departements: this.state.departements.filter(departement => departement.id !== id)});
        });
    }
     //Afficher Departement

    viewDepartement(id){
        this.props.history.push(`/view-departement/${id}`);
    }
    //Modifier Departement
    editDepartement(id){
        this.props.history.push(`/add-departement/${id}`);
    }

    componentDidMount(){
        DepartementService.getDepartements().then((res) => {
            this.setState({ departements: res.data});
        });
    }
//Ajouter Departement
    addDepartement(){
        this.props.history.push('/add-departement/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">List des Departements</h2>
                 <div className = "row">
                    <button className="btn btn-success" onClick={this.addDepartement}> Ajouter Departement</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nom Departement</th>
                                 
                               
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.departements.map(
                                        departement => 
                                        <tr key = {departement.id}>
                                             <td> { departement.depName} </td>   
                                        
                    
                                             <td>
                                                 <button onClick={ () => this.editDepartement(departement.id)} className="btn btn-primary">Modifier </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDepartement(departement.id)} className="btn btn-danger">Supprimer </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDepartement(departement.id)} className="btn btn-info">Voir </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDepartementComponent
