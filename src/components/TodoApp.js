import React, {useState, useEffect} from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddToDo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
//import Footer from "../components/layout/Footer";
import Footer from "../store/containers/Footer";

function TodoApp() {
    const [state, setState] = useState({
        todos: []
    });

    const handleCheckboxChange = (id) => {
        this.setState({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    const deleteTodo = id => { 
        console.log("deleted", id);
        this.setState({
            todos: [
                ...state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    };

    const addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...state.todos, newTodo]
        });
    };

    // addTodo = title => {
    //     const todoData = {
    //         title: title,
    //         completed: false
    //     }
    //     axios.post("https://jsonplaceholder.typicode.com/todos", todoData).then(response => {
    //         console.log(response.data);
    //         this.setState({
    //             todos: [...this.state.todos, response.data]
    //         })
    //     });
    // };

    // deleteTodo = id => {
    //     axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    //     .then(response => this.setState({
    //         todos: [
    //             ...this.state.todos.filter(todo => {
    //                 return todo.id !== id;
    //             })
    //         ]
    //     }));
    // };

    useEffect( () => {
        const config = {
            params: {
                _limit: 5
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos", config).then(response => setState({todos: response.data}));
    }, []);

    return (
        <div className="container">
            <Header/>
            <AddToDo addTodo={addTodo}/>
            <Todos todos={state.todos} 
                    handleChange={handleCheckboxChange}
                    deleteTodo={deleteTodo}/>
            <Footer/>
        </div>
    );
}

export default TodoApp;