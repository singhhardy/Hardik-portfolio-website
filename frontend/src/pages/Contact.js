import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Contact() {
    const [submitText, setSubmitText] = useState('Send Message')
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInput = (e)  => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    

    const handleSubmit = (e) => {

        setSubmitText('Sending...')

        e.preventDefault();
        
        const url = 'https://frightened-uniform-worm.cyclic.app//api/send-email';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: `${data.message} !`,
                text: 'Thanks for reaching out, I will get back to you soon... :D',
                type: 'success'
            });
            setSubmitText('Send Message')
        })
        .catch(error => {
            console.log(`Error: ${error}`);
            Swal.fire({
                title: 'Something Went Wrong',
                text: error.message,
                type: 'error'
            })
        });
    }

  return (
    <div>
    {/* Showcase */}
        <div className='tutor-bg py-5 mb-5 showcase d-flex align-items-center justify-content-center flex-column'>
            <div className='container py-5 d-flex flex-column align-items-center justify-content-center'>
                <h1 className='text-white fw-bold'>CONTACT ME HERE</h1>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className=" text-color"><a href="#">Home</a></li>
                    <li className="mx-2 active text-light" aria-current="page">/</li>
                    <li className="active text-light" aria-current="page">CONTACT</li>
                </ol>
                </nav>
            </div>
        </div>

        <div className='container py-5 my-5'>
            <h1 className='fw-bold'>Get Personalized Solutions </h1>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='img-fluid' src='contactpage.png' alt='contact Image' />
                </div>
                <div className='col-md-6'>
                <form className='mt-4' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='form-floating '>
                            <input type='text' name='name' placeholder='Enter Full Name' required value={formData.name} onChange={handleInput} className='form-control mt-2 bg-transparent text-color shadow-primary' />
                            <label  className='mx-2 '>Enter Full Name</label>
                        </div>
                        <div className='form-floating mt-3'>
                            <input type='email' name='email' placeholder='Enter Email Address' required value={formData.email} onChange={handleInput} className='form-control mt-2 bg-transparent text-color shadow-primary' />
                            <label  className='mx-2 '>Enter Email Address</label>
                        </div>
                        <div className='form-floating mt-3'>
                            <textarea type='message' name='message' placeholder='Enter Enter a message' required value={formData.message} onChange={handleInput} className='form-control mt-2 bg-transparent text-color shadow-primary h-150' />
                            <label  className='mx-2 '>Enter a Message</label>
                        </div>
                        <div className='btn-group'>
                        <button className='btn btn-block act-bg shadow-primary text-white mt-3 py-3'>{submitText} <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact
