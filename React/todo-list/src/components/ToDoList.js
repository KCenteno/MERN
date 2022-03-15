import React, { useState } from "react";

const ToDoList = (props) => {
    const [haveToDo, setHaveToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(haveToDo.length === 0) {
            return
        };
        const todoItem = {
            text: haveToDo,
            complete: false
        };
            setToDos([...toDos, todoItem]);
            setHaveToDo("");
    };

    const deleteToDoHandle = (item) => {
        const filteredToDos = toDos.filter((todo, i) => {
            return i != item
        });
        setToDos(filteredToDos);
    };

    const checkChangeHandle = (item) => {
        const updatedToDos = toDos.map((toDos, i) => {
            if(item === i) {
                const updatedToDos = {... toDos, complete: !toDos.complete};
                return updatedToDos;
            }
            return toDos
        });
        setToDos(updatedToDos);
    }


    return(
    <div>
        <form onSubmit={(event) =>{
            onSubmitHandler(event);
        }}>
            <h1>{props.text}</h1>
        <input 
        onChange={(event) => {
            setHaveToDo(event.target.value)
        }} type="text" value={haveToDo}
        />
        <div>
            <button>Add</button>
        </div>
        </form>

        {toDos.map((toDo, i) =>{
            const toDoClasses = [];

            if (toDo.complete) {
                toDoClasses.push("line")
            }
            return (
                <div className="input" key={i}>
                    <span  className={toDoClasses.join(" ")}>{toDo.text}</span><br />
                    <input onChange={() => {checkChangeHandle(i);}} checked={toDo.complete} type="checkbox"/> <br />
                    <button onClick={() => {deleteToDoHandle(i);}}>Delete</button>
                </div>
            );
        })}
    </div>
    );
};

export default ToDoList;