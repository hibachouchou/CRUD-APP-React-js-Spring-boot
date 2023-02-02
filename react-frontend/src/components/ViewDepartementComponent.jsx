import React, { Component } from 'react'
import DepartementService from '../services/DepartementService'

class ViewDepartementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            departement: {}
        }
    }

    componentDidMount(){
        DepartementService.getDepartementById(this.state.id).then( res => {
            this.setState({departement: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Voir Details de Departement </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nom departement: </label>
                            <div> { this.state.departement.depName }</div>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDepartementComponent
