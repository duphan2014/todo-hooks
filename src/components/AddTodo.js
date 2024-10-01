import React, {useState} from "react";

function AddToDo (props){
    const [title, setTitle] = useState("")

    const onInputChange = e => {
        setTitle(e.target.value)
    };

    const addTodo = e => {
        e.preventDefault();
        this.props.addTodo(title);
        setTitle("")
    };

    return (
        <form className="form-container" onSubmit={addTodo}>
            <input 
                type="text" 
                placeholder="Add Todo..." 
                className="input-text" 
                value={title}
                onChange={onInputChange}
            />
            <input type="submit" value="submit" className="input-submit"/>
        </form>
    )
}
export default AddToDo;