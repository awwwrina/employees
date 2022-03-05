import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            warning: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
            warning: ''
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length < 3 || this.state.salary.length < 3)  {
           this.setState({
               warning: 'Имя и/или зарплата не может быть короче двух символов'
           })
        } else {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    getClassInput = () => {
        const {warning} = this.state;
        return warning ? "form-control new-post-label warning-outline" : "form-control new-post-label"
    }
    render() {
        const {name, salary, warning} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className={this.getClassInput()}
                        placeholder="Имя"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={this.getClassInput()}
                        placeholder="Зарплатушка" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
                {warning ? <div className="warning">{warning}</div> : null}
            </div>
        );
    }
}

export default EmployeesAddForm;