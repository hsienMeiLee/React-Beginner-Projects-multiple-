import React, { useState } from "react";
import { Button, FormControl, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const addItem = () => {
    if (userInput !== "") {
      setList((prevList) => [...prevList, userInput]);
      setUserInput("");
    }
  };
  const deleteItem = (item) => {
    setList(list.filter((e)=> item!== e));
  };
  const editItem = (item) => {
    const editedTodo = prompt("Edit the todo",item);
    if(editedTodo !== null && editedTodo.trim() !== ""){
        const updatedList = list.map((e)=>e === item? editedTodo : e);
        setList(updatedList);
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded-md">
        <Row>Todo list</Row>
        <hr />
        <Row>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="add items"
                size="lg"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </InputGroup>

            <Button
              onClick={() => addItem()}
              className="px-2 py-1 mt-3 bg-gray-900 text-white rounded-md"
            >
              ADD
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              {list.map((item) => (
                <li key={Math.random()} className="flex items-center justify-between mt-2">
                    {item}
                    <div className="ml-3">
                    <Button variant="light" onClick={()=>deleteItem(item)} className="px-2 py-1 bg-gray-900 text-white rounded-md mr-2">
                        Delete
                    </Button>
                    <Button variant="light" onClick={()=>editItem(item)} className="px-2 py-1 bg-gray-900 text-white rounded-md">
                        Edit
                    </Button>
                    </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TodoList;
