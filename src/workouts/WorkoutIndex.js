import React, { useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';

const WorkoutIndex = (props) => {

    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = () => {
        fetch('http://localhost:3000/log', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then ((res) => res.json())
        .then((logData) => {
            setWorkouts(logData)
        })
    }

    useEffect(() => {
        fetchWorkouts();
    }, [])

    return(
        <Container>
            <Row>
                <col md="3">
        
                </col>
                <col md="9">
                    <h2>Log a workout to see a table. This will be added in later pages.</h2>
                </col>
            </Row>
        </Container>
    )
}


export default WorkoutIndex;

