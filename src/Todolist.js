import { Component } from "react";
import daw from './gg2.png'



export class TodoList extends Component {

    state = {
        userinput: "",
        todolist: []
    }
    
    onChangeEvent(e) {
        this.setState({userinput: e})
    }

    addItem(input) {
if (input === "") {
    alert("Пожалуйста, введите данные")
} else {let listArray = this.state.todolist;
    listArray.push(input);
    this.setState({todolist: listArray, userinput: ''})
    console.log(listArray)}

        
    }

    crossedWord(event) {
        const list = event.target;
        list.classList.toggle('crossed')
    }

    DelItem() {
        let listArray = this.state.todolist;
        listArray = [];
        this.setState({todolist: listArray})
    }

    onformSubmit(e) {
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onformSubmit}>
                <div className='container'>
                <input type="text" placeholder="Твои планы на сегодня"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userinput}/>
            </div>
                <div className='container'>
                <button className="add" onClick={() => {this.addItem(this.state.userinput)}}>Добавить</button>
                </div>
                <ul className='list'>
                {this.state.todolist.map((item, index) => 
                    (<li onClick={this.crossedWord} key={index}>
                        <img src={daw} alt="chek" width="35px"/>
                          {item}</li>))}
                </ul>
                <div className='container'>
                    <button className="del" onClick={() => this.DelItem()}>Удалить</button>
                </div>
                </form>
                
           
            </div>
            
        )
    }
   
}