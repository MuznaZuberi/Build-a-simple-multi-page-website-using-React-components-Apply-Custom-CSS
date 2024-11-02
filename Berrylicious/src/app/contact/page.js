export default function Contact_Us() {
	return(

     <div>
       
        <h3>We’re Here for You</h3>
          
          <div className = "form-container">
            <h4>Freshness at Your Doorstep | Luscious Berries, Daily | Experience Nature’s Finest with Berrylicious!</h4>

            {/*ContactForm Section*/}
              <form>

                 <fieldset>
                   <legend><b>Essentials</b></legend>

                      <label><b>Name:</b></label>
                      <input type = "text"/>

                      <label><b>Email:</b></label>
                      <input type = "email"/>

                      <label><b>Phone Numb:</b></label>
                      <input type = "text"/>

                      <label><b>Message:</b></label>
                      <textarea/>

                    {/*ContactButton Section*/}
                       <button className = "form-btn"><b>Send Now</b></button>
                </fieldset>

                </form>

           </div>

     </div>
)
}