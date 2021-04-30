import React, { Component } from 'react';
import emailjs from 'emailjs-com';

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
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                     </div>
                     <div>
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                     </div>
                     <div>
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                     </div>
                     <div>
                        <textarea className="form-control" id="" cols="30" rows="8" placeHolder="Your Message" name="message"></textarea>
                     </div>
                     <div>
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                     </div>
                  </fieldset>
               </form>
               {/*
               <form action="" method="post" id="contactForm" name="contactForm" onSubmit={sendEmail}>
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="name" name="name" onChange={this.handleChange}/>
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="email" defaultValue="" size="35" id="email" name="email" onChange={this.handleChange}/>
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="subject" name="subject" onChange={this.handleChange}/>
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="message" name="message"></textarea>
                     </div>

                     <div>
                        <button className="submit" value="Send Message">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
				   </form>
               */}

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

            {/* contact section */}
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state}<br />
                     <span>{email}</span><br />
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
