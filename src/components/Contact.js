import React from 'react';

 const Contact = () => {
  return (
    <div>
        <div>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
     <div>
   <form>
        <div>    
    <label for='first_name'>First name </label>
        <input type='text' name='first_name' id='first_name' placeholder='Enter your first name' />
        </div>
        <div>
    <label for='last_name'>Last name </label>
        <input type='text' name='last_name' id='last_name' placeholder='Enter your last name' />
        </div>
        <div>
        <label for='email'>Email </label>
         <input type='email' name='email' id='email' placeholder='yourname@email.com' />
         </div>
        <div>
        <label for='message'>Message: </label>
          <textarea name='message' id='message'>Send me a message and I'll reply you as soon as possible...</textarea>
        </div>
        <div>
           <input type='checkbox' id='agreement' name='agreement'  />
           <label for='agreement'>You agree to providing your data to Joyce who may contact you.</label>
         </div>
   </form>
     <button>Send Message</button>
     </div>
    </div>
  )
}

export default Contact;
