import React from 'react'
import { useState } from 'react'
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper, Typography, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';


const TodoTask = () => {

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if(input.trim() !== '') {
            setTasks([...tasks, input])
            setInput('')
        }
    }

    const removeTask = (index) => {
        const remainingTasksExceptCurrentMatch = tasks.filter((_, i) => i !== index);
        console.log(remainingTasksExceptCurrentMatch)
        setTasks(remainingTasksExceptCurrentMatch);
    }

  return (
    <Box width="400px" margin="50px auto" padding="20px" component={Paper} elevation={3}>
        <Typography variant='h5' gutterBottom align='center'>
            To-Do List
        </Typography>

        <Box display="flex" mb={2}>
            <TextField label="Enter task" variant='outlined' fullWidth value={input} onChange={(e) => setInput(e.target.value)} />
            <Button variant='contained' color='primary' onClick={ addTask } sx={{ marginLeft: 1}}> Add </Button>
        </Box>

        <List>
            {tasks.map((task, index) => (
                <ListItem key={index} secondaryAction={<IconButton edge="end" arial-label="delete" onClick={() => removeTask(index)}><Delete/></IconButton>}>
                    <ListItemText primary={task} />
                </ListItem>
            ))}
        </List>
        
    </Box>
  )
}

export default TodoTask;