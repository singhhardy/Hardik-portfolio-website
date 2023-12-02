import ContactForm from '../components/ContactForm'

function Contact() {

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
                    <ContactForm />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact
