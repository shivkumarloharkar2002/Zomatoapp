import './login.css'
import mail from './mail.png'
import google from './google.png'


export function Login(props){
  return(
    <>
    <div className='first'>
        <div className='Container'>
        <p className='log'>Login</p>

        <div className='optn'>

        <select className='slte'>

     <option>+ 91</option><br/>
       <option>+ 93</option><br/>
         <option>+ 355</option><br/> 
          <option>+ 213</option><br/>
          <option>+ 1684</option><br/>
          <option>+ 376</option><br/>
          <option>+ 224</option>
          
       
          </select>
          
         
          <input type='text' placeholder='Phone' className='inputBoxtwo'/>

          </div><br></br><br></br>

          <button type='submit' className='bttn'>Send One Time Password</button><br></br>

          <p className='or'>or</p>

          <div className='mailbox'>
            <img alt={props} src={mail} className='mailimg'/>

            <a href="/login" className='email'> Continue With Email</a>
          </div>

           <b></b>

           <div className='mailbox'>
         
            <img alt={props} src={google} className='googleimg'/>

            <a href="#" className='email signgoogle'> Sign in with Google</a>
          
         </div>


         <p className='paragraph'>New to Zomato? <a href='/signup' className='create'> Create account</a></p>
        
          {/* <input type='text'  placeholder="Enter your Full Name here" className={'inputBox'}/><br/>
          <input type='email'   placeholder="Enter your email here" className={'inputBox'}/> */}

        </div>
        </div>
        
    </>
  );

}