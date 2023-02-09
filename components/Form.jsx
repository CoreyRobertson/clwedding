import React from 'react'

const Form = () => {
    return (
        <div className='form_container'>
            <div className='form_form-container'>
                <h1>RSVP</h1>
                <div className='form_form-list-container'>
                    <a>Your Name</a>
                    <a>Your Attendance</a>
                    <a>Your Dietary Requirements</a>
                </div>
                <form action="https://formsubmit.co/lisaktaranto@gmail.com" method="POST">
                    <input className='text' type="text" name='Name' placeholder='' required></input>
                    <select name="attendance" id="attendance">
                        <option value="Attending">Attending</option>
                        <option value="Not Attending">Not Attending</option>
                        <option value="Tentative">Tentative</option>
                    </select>
                    <input className='text' type="text" name='dietary' placeholder='' required></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Form