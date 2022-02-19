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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
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