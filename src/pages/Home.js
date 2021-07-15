import React from "react"
import { API } from "aws-amplify"
import awsConfig from "../aws-exports"

API.configure(awsConfig)

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    fetchTodos = () => {
        API.get("fetchTodos2", "/fetchTodos")
            .then(response => console.log(response.todos))
    }

    fetchStudents = () => {
        console.log(`fetching students`);
        API.get("fetchStudents", "/fetchStudents")
            .then(response => console.log(response.students))
    }

    render() {
        return (
            <div className='row'>
                <div className='col mx-auto'>
                    <button className="btn btn-primary" onClick={this.fetchTodos}>
                        Fetch Todos
                    </button>
                    <button className="btn btn-primary" onClick={this.fetchStudents}>
                        Fetch Students
                    </button>
                </div>
            </div>
        )
    }
}

export default Home