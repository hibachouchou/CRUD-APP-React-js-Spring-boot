import React, { Component } from 'react'
import DepartementService from '../services/DepartementService';

class CreateDepartementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            depName: '',
          
        }
        this.changeNomDepHandler = this.changeNomDepHandler.bind(this);
        this.saveOrUpdateDepartement = this.saveOrUpdateDepartement.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DepartementService.getDepartementById(this.state.id).then( (res) =>{
                let departement = res.data;
                this.setState({
                    depName: departement.depName,
                   
                });
            });
        }        
    }
    saveOrUpdateDepartement = (e) => {
        e.preventDefault();
        let departement = {depName: this.state.depName};
        console.log('departement => ' + JSON.stringify(departement));

        // step 5
        if(this.state.id === '_add'){
            DepartementService.createDepartement(departement).then(res =>{
                this.props.history.push('/departements');
            });
        }else{
            DepartementService.updateDepartement(departement, this.state.id).then( res => {
                this.props.history.push('/departements');
            });
        }
    }
    
    changeNomDepHandler= (e) => {
        this.setState({depName: e.target.value});
    }


    cancel(){
        this.props.history.push('/departements');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Ajouter Departement</h3>
        }else{
            return <h3 className="text-center">Modifier Departement</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Nom departement: </label>
                                            <input placeholder="Nom departement" name="depName" className="form-control" 
                                                value={this.state.depName} onChange={this.changeNomDepHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateDepartement}>Sauvegarder</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateDepartementComponent
