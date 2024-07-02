import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/teachers', { name, email });
            alert('Teacher added successfully!');
            setName('');
            setEmail('');
        } catch (error) {
            alert('Error adding teacher');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default TeacherForm;
