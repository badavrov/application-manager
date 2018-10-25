import React from 'react';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:"",
            data:[],
            newData:[]
        }
    }
    componentDidMount(){
        this.setState({
            index: this.props.match.params.index
        })
        const apps = localStorage.getItem("apps")
        const appsJSON = JSON.parse(apps)
        this.setState({
            data:{...appsJSON}
        })
    }

    
    toggleChange=()=>{
        if(this.state.isChecked===false){
        this.setState({
            isChecked: true
        });
        }else{
            this.setState({
                isChecked: false
            })
        }
    }

    componentDidUpdate() {
        var data=this.state.data
        var index=this.state.index
        if(data[index]){
            this.setState({
                data:{...data[index]}
            })
        }
    }
    

    formSubmit = (e) => {
        e.preventDefault();

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
        datas.splice(this.state.index, 1);
        let data = {
            id: 1 + Math.random(),
            name, email, age, pref, english, startdate, skills, personal, study
        }
        datas.push(data);
        console.log(datas)
        var datasJSON = JSON.stringify(datas)
        localStorage.setItem('apps', datasJSON)
        this.setState({
            isChecked:false
        })
        window.location.replace('/view')
    }

    render() {
        return (
                <form ref="regForm" className="regForm">
            <h2>Edit participant with index {this.state.index}</h2>
                    <div className="name">
                        <span>Change name*</span>
                        <input type="text"
                            ref="name"
                            placeholder={this.state.data.name}
                            className="formField"
                            name="name"
                        /></div>

                    <div className="email">
                        <span>Change email*</span>
                        <input type="text"
                            ref="email"
                            placeholder={this.state.data.email}
                            className="formField"
                            name="email"
                        /></div>

                    <div className="age">
                        <span>Student age*</span>
                        <input type="number"
                            ref="age"
                            placeholder={this.state.data.age}
                            className="formField"
                            name="age"
                        /></div>

                    <div className="checkbox">
                        <label>Preferred Way of Communication *: </label>
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
                        /></div>

                    <div className="skills">
                        <p>Technical Skills and Courses: </p>
                        <textarea
                            placeholder={this.state.data.name}
                            className="formField"
                            rows="4" cols="50"
                            ref="skills"
                        /></div>

                    <div className="personal">
                        <p>Short Personal Presentation (e.g. reason for joining the program): </p>
                        <textarea
                            placeholder={this.state.data.personal}
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
        );
    }
}
