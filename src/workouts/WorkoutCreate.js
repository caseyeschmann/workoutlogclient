import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) => {
const [description, setDescription] = useState('');
const [definition, setDefinition] = useState('');
const [result, setResult] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://Localhost:3000/log/', {
    method: 'POST',
    body: JSON.stringify({log: {description: description, definition: definition, result: result}}),
    headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': props.token
    })
}) .then((res) => res.json())
    .then((logData) => {
    console.log(logData);
    setDescription('');
    setDefinition('');
    setResult('')
    props.fetchWorkouts();
})
}

return(
    <>
    <h3>Log a Workout</h3>
    <form>
        <FormGroup>
            <label htmlFor="description"/>
            <input name = "description" value={description} onChange={(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="definition"/>
            <input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
                <option value="Time">Time</option>
                <option value="Weight">Weight</option>
                <option value="Distance">Distance</option>
            </input>
        </FormGroup>
        <FormGroup>
            <label htmlFor="result"/>
            <input name="result" value={result} onChange={(e)=>setResult(e.target.value)}/>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
    </form>
    </>
)
}

export default WorkoutCreate;