import React, { Component } from 'react';
import { render } from 'react-dom';
import emailjs from 'emailjs-com';
import Clock from 'react-live-clock';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_4rke66v', 'template_woy2gj7', e.target, 'user_7SmHK1wdhTzUD4B3uf6WU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form onSubmit={sendEmail} id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                     </div>
                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                     </div>
                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                     </div>
                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea className="form-control" id="" cols="30" rows="8" placeHolder="Your Message" name="message"></textarea>
                     </div>
                     <div>
                        <label htmlFor="contactMessage"> </label>
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                     </div>
                  </fieldset>
               </form>
           </div>

            {/* contact section */}
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Raymond's Timezone</h4>

                  <Clock 
                     format={'h:mm:ssa'}
                     style={{fontSize: '1.5em'}}
                     ticking={true}
                  />

                  {/*
					   <p className="address">
						   {name}<br />
						   {city}, {state}<br />
                     <span>{email}</span><br />
                  </p>
                  */}
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
