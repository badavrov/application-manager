import React from 'react';
import './create.css';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            datas: [],
            nameError: '',
            emailError: '',
            ageError: '',
            dateError: ''
        }
    }
    componentDidMount() {
        this.refs.name.focus();
    }


    toggleChange = () => {
        if (this.state.isChecked === false) {
            this.setState({
                isChecked: true
            });
        } else {
            this.setState({
                isChecked: false
            })
        }
    }

    validate = () => {
        let isError = false;
        const errors = {};
        let t = this.refs
        if (t.name.value.length < 5) {
            isError = true;
            errors.nameError = '<<< Name must be atleast 5 symbols'
        }
        if (t.email.value.indexOf("@",".") === -1) {
            isError = true;
            errors.emailError = "<<< Requires valid email";
        }
        if (t.age.value>100 || t.age.value<12) {
            isError = true;
            errors.ageError = "<<< You must be younger than 100years old and older than 12";
        }
        if (isError) {
            this.setState({
                ...errors
            })
        }

        return isError;
    }

    formSubmit = (e) => {
        e.preventDefault();

        const err = this.validate();
        if (!err) {
            let name = this.refs.name.value;
            let email = this.refs.email.value;
            let age = this.refs.age.value;
            let pref = this.refs.pref.value;
            let english = this.refs.english.value;
            let startdate = this.refs.startdate.value;
            let skills = this.refs.skills.value;
            let personal = this.refs.personal.value;
            let study = this.state.isChecked;

            var str = localStorage.getItem("apps");
            if (str === "") {
                str = "[]";
            }

            let datas = JSON.parse(str) || [];
            let data = {
                id: 1 + Math.random(),
                name, email, age, pref, english, startdate, skills, personal, study
            }
            datas.push(data);
            var datasJSON = JSON.stringify(datas)
            localStorage.setItem('apps', datasJSON)
            this.refs.regForm.reset();
            this.refs.name.focus();
            this.setState({
                isChecked:false
            })
        }
    }


    render() {
        return (
            <div className="content">
                <form ref="regForm" className="regForm">
                    <h2>Create an Application</h2>
                    <p>Please fill up the form...</p>
                    <div className="name">
                        <span>Student name*</span>
                        <input type="text"
                            ref="name"
                            placeholder="Name..."
                            className="formField"
                            name="name"
                        /><span className="errorText">{this.state.nameError}</span></div>

                    <div className="email">
                        <span>Student email*</span>
                        <input type="email"
                            ref="email"
                            placeholder="Email..."
                            className="formField"
                            name="email"
                        /><span className="errorText">{this.state.emailError}</span></div>

                    <div className="age">
                        <span>Student age*</span>
                        <input type="number"
                            ref="age"
                            placeholder="Age..."
                            className="formField"
                            name="age"
                        /><span className="errorText">{this.state.ageError}</span></div>

                    <div className="checkbox">
                        <label>Preferred Way of Communication*: </label>
                        <input type="radio" name="pref" id="pref" className="pref" ref="pref" value="email" /> Email
                        <input type="radio" name="pref" id="pref" className="pref" ref="pref" value="telephone" /> Telephone
                    </div>

                    <div className="english">
                        <span>English Level*: </span>
                        <select ref="english" className="formField">
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                        </select>
                    </div>

                    <div className="startdate">
                        <span>Available to Start*: </span>
                        <input type="date"
                            className="formField"
                            ref="startdate"
                        /><span className="errorText">{this.state.dateError}</span></div>

                    <div className="skills">
                        <p>Technical Skills and Courses: </p>
                        <textarea
                            className="formField"
                            rows="4" cols="50"
                            ref="skills"
                        /></div>

                    <div className="personal">
                        <p>Short Personal Presentation (e.g. reason for joining the program): </p>
                        <textarea
                            className="formField"
                            rows="4" cols="50"
                            ref="personal"
                        /></div>


                    <div className="study">
                        <label htmlFor="study">*Study from home* </label>
                        <input ref="study" className="studybox" type="checkbox"
                            onChange={this.toggleChange} /></div>

                    <button onClick={(e) => this.formSubmit(e)} className="formSubmit">Submit</button>
                </form>
            </div>
        );
    }
}
