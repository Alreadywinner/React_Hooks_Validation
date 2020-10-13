import React from 'react';
import './signUp.css';
import { faEnvelopeOpen,faUser,faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import UseForm from './UseForm';
import validate from './validateInfo';

function SignUp({ submitForm }) {
const{ handleChange,values,handleSubmit,errors,handleCheck } = UseForm(validate,submitForm);
  return (
    <div>
        <div className="main">
            <section className="sign-in">
                    <div className="signin-image">
                        <img src="https://images.unsplash.com/photo-1600137164715-42e8641b2c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="sing-up"/>
                    </div>

                    <div className="signin-form">
                        <div className = "container"> 
                            <h2 className="form-title">Signup Now</h2>
                            <p className="form-para">Creating an account is free..</p>
                            <p className="para-lite">and won't take longer than a couple as seconds</p>
                            <form onSubmit = {handleSubmit} className="register-form" noValidate>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" name="your_name" placeholder="Your Name" value={values.your_name} onChange={handleChange}/>
                                    <FontAwesomeIcon icon={faUser} color="red" className="forming"></FontAwesomeIcon>
                                    {errors.your_name && <p className="display_errors">{errors.your_name}</p>}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="your_email"  placeholder="Email" value={values.your_email} onChange={handleChange}/>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} color="red" className="forming"></FontAwesomeIcon>
                                    {errors.your_email && <p className="display_errors">{errors.your_email}</p>}
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="your_pass" placeholder="Password" value={values.your_pass} onChange={handleChange}/>
                                    <FontAwesomeIcon icon={faKey} color="red" className="forming"></FontAwesomeIcon>
                                    {errors.your_pass && <p className="display_errors">{errors.your_pass}</p>}
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" name="your_pass2" placeholder="Confirm Password" value={values.your_pass2} onChange={handleChange}/>
                                    <FontAwesomeIcon icon={faKey} color="red" className="forming"></FontAwesomeIcon>
                                    {errors.your_pass2 && <p className="display_errors">{errors.your_pass2}</p>}
                                </div>

                                    <input type="checkbox" name="your_check" className="checkbox" checked={values.your_check} onChange={handleCheck}/>  I Accept to the Terms & Conditions
                                    {errors.your_check && <p className="display_errors">{errors.your_check}</p>}
                                    <input type="submit" name="signin" className="form-submit" value="Submit" />
                                </form>
                                <div className="social-login">
                                    <br />
                                    <span className="social-label">Or  Login   with</span>
                                    <ul className="socials">
                                        <li><a href="https://www.facebook.com/" className = "fb"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                                        <li><a href="https://www.twitter.com/" className = "tw"><FontAwesomeIcon icon={faTwitter}/></a></li>
                                        <li><a href="https://www.instagram.com/" className = "insta"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                        <li><a href="https://www.linkedin.com/" className = "Li"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </section>
        </div>
    </div>
  );
}

export default SignUp;
