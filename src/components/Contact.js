import React from 'react'

export default function Contact() {
    return (
        <div className='form'>
            <h2 className='h2-contact'>CONTACT ME</h2>
            <div className='form-1'>
            <label >
                Name:
            </label>
            <input type="text"></input>
            <label >
                Email:
            </label>
            <input type="email"></input>
            </div>
            <div className='form-2'>
            <label >
                Message:
            </label>
            <textarea rows="5" cols="40"></textarea>
            </div>
            <button type='submit' className='btn-contact'>
                Send Message
            </button>
            
        </div>
    )
}
