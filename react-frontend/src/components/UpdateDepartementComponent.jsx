import React, { Component } from 'react'
import DepartementService from '../services/DepartementService';

class UpdateDepartementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            depName: '',
           
        }
        this.changeNomDepHandler = this.changeNomDepHandler.bind(this);

        this.updateDepartement = this.updateDepartement.bind(this);
    }

    componentDidMount(){
        DepartementService.getDepartementById(this.state.id).then( (res) =>{
            let departement = res.data;
            this.setState({
                depName: departement.depName,
               
            });
        });
    }

    updateDepartement = (e) => {
        e.preventDefault();
        let departement = {depName: this.state.depName};
        console.log('departement => ' + JSON.stringify(departement));
        console.log('id => ' + JSON.stringify(this.state.id));
        DepartementService.updateDepartement(departement, this.state.id).then( res => {
            this.props.history.push('/departements');
        });
    }
    
    changeNomDepHandler= (e) => {
        this.setState({depName: e.target.value});
    }

   

    cancel(){
        this.props.history.push('/departements');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Modifier Departement</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom departement: </label>
                                            <input placeholder="Nom Departement" name="depName" className="form-control" 
                                                value={this.state.depName} onChange={this.changeNomDepHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updateDepartement}>Sauvegarder</button>
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

export default UpdateDepartementComponent
