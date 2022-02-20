import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';
import logo from '../../assets/logo.png'
import './Book.css'

function Book() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  let navigate = useNavigate();
  function goHome() {
    navigate("/");
}

const { currentUser } = useContext(AuthContext);

  const handleContact = (e) => {
      e.preventDefault()
      if(name && email && msg) {
        if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
            
            db.collection('msg').add({
                name: name,
                email: email,
                msg: msg,
                uid: currentUser.uid
            }).then(() => {
                alert('Submitted')
            })
        } else {
            alert('Enter valid Email')
        }

      }else {
        alert('Enter all the fields')
    }    
          
  }

  return (
      <div className='book'>
        <img onClick={goHome} src={logo} alt="" className='auth__Logo'/>
        <div className='about'>
            <h1>About Us</h1>
            <p>
               Passionately conceptualized in Kochi, India, the first FoodTopia outlet was established in the year 2000, and since then, the brand has grown to become extremely popular in 27+ countries with more than 230+ outlets.  In India First outlet opened in MG Road and now spread more than 80 outlets including Kerala, Tamil Nadu, Karnataka, Mumbai & Delhi. This impressive growth was achieved by understanding what families prefer. We are also a big favourite amongst individuals who are looking for a tasty alternative to formulaic fast food. FoodTopia, established as part of the highly reputable and renowned Dubai based Banquet Foods International, RAK-FZE, UAE. FoodTopia began its journey with a simple yet determined dream – To create a brand that brings happiness, satisfaction and smiles to our valued customers world-over. Over the years, it has successfully realized this dream by making FoodTopia a favorite destination for real and tasty fried chicken. FoodTopia – A brand that has been built with over a decade of commitment and unmatched quality continues to make tremendous strides within its sphere of business. Whether its global expansion, new menu or innovative services and outlets, the change is charismatic and the customers have been lapping it with great passion.
           </p>
        </div>
        <div className='contact'>
            <h1>Contact US</h1>
            <form className='loginSignin__form' onSubmit={handleContact}>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Sarasu Molls' className='ls_input'/>
                    </div>
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='gayugmail.com@' className='ls_input'/>
                    </div>
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Message</label>
                        <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Type Message...' className='ls_input'/>
                    </div>
                </div>

                <div className='ls_input_submit'>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
      </div>
  )
}

export default Book
