import React from 'react';
import './view.css';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    remove(id) {
        var apps = localStorage.getItem('apps') ? JSON.parse(localStorage.getItem('apps')) : [];
        var index;
        for (var i = 0; i < apps.length; i++) {
            if (apps[i].id === id) {
              index=i;
              break;
            }
        }
        if(index === undefined) return 
        apps.splice(index, 1);
        localStorage.setItem('apps', JSON.stringify(apps));
        window.location.reload();
    }
    
    edit(id) {
        var apps = localStorage.getItem('apps') ? JSON.parse(localStorage.getItem('apps')) : [];
        var index;
        for (var i = 0; i < apps.length; i++) {
            if (apps[i].id === id) {
              index=i;
              break;
            }
        }
        if(index === undefined) return 
        window.location.replace('/edit/'+index)
    }


    render() {
        const apps = localStorage.getItem("apps")
        const appsJSON = JSON.parse(apps)
        var items = '';
        if (appsJSON === null) {
            items = <h1>No Applications! Start by creating your first one... <a href="/create">go to create page</a></h1>
        } else {
            items = appsJSON.map((d) =>
                <ul className="app_list" key={d.id}>
                    <li><h4>Name: </h4><p>{d.name}</p></li>
                    <li><h4>Email: </h4><p>{d.email}</p></li>
                    <li><h4>Age: </h4><p>{d.age}</p></li>
                    <li><h4>Preferred Way of Communication: </h4><p>{d.pref}</p></li>
                    <li><h4>English Level: </h4><p>{d.english}</p></li>
                    <li><h4>Available to Start: </h4><p>{d.startdate}</p></li>
                    <li><h4>Technical Skills and Courses: </h4><p>{d.skills}</p></li>
                    <li><h4>Short Personal Presentation: </h4><p>{d.personal}</p></li>
                    <li><h4>"Study from home": </h4><p>{d.study}</p></li>
                    <button className="delete" onClick={this.remove.bind(this, d.id)}>X</button>
                    <button className="edit" onClick={this.edit.bind(this, d.id)}>E</button>
                    </ul>
            );
        }

        return (
            <div className="app_container">
            <h2>Application List</h2>
                {items}
            </div>
        );
    }
}
