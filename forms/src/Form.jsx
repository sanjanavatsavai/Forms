import React from 'react'

function Form() {
  return (
    <div className="container">
        <h1>Form</h1>
        <form>
            <label htmlFor='firstname'>First Name*</label>
            <input type="text" placeholder='Enter First Name' name='firstname' />

              <label htmlFor='lastname'>Last Name*</label>
            <input type="text" placeholder='Enter Last Name' name='lastname' />

             <label htmlFor='email'>Email*</label>
            <input type="email" placeholder='Enter Email' name='email' />

             <label htmlFor='contact'>Contact*</label>
            <input type="text" placeholder='Enter Phone Number' name='contact' />

            <label htmlFor='gender'>Gender</label>
            <input type='radio' name='gender' /> Male
            <input type='radio' name='gender' /> Female

            <label htmlFor='subject'>Major</label>
            <select name='subject' id='subject'>
                <option value='math'>Computer Science</option>
                <option value='math'>Data Engineer</option>
                <option value='math'>Cyber Security</option>

            </select>

            <label htmlFor='resume'>Resume</label>
            <input type='file' placeholder='Select Resume' name='resume'/>

            <label htmlFor='url'>URL</label>
            <input type='text' name='url' placeholder='Enter LinkedIn URL'/>


            <label htmlFor='about'>About</label>
            <textarea name='about' id='about' cols="30" rows="10" placeholder='Tell us a little bit about yourself'></textarea>

            <button type ='button'>Reset</button>
            <button type='submit'>Submit</button>


        
            
            
        </form>
    </div>
  )
}

export default Form