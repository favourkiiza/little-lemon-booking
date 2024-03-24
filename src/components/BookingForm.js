import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
          <div className="card">
              <div className="card-body">
                  <h5 className="card-title">Booking Form</h5>
                  <form onSubmit={handleSumbit}>
                      <fieldset>
                          <div>
                              <label htmlFor="book-date" >Choose Date</label>
                              <input id="book-date" className="form-control" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                          </div>
                          <div>
                              <label htmlFor="book-time">Choose Time</label>
                              <select id="book-time" className="form-select" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                  <option value="">Select a Time</option>
                                  {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                              </select>
                          </div>
                          <div>
                              <label htmlFor="book-guests">Number of Guests</label>
                              <input id="book-guests" className="form-control" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                          </div>
                          <div>
                              <label htmlFor="book-occasion">Occasion</label>
                              <select id="book-occasion" className="form-select" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                  <option value="">Select an Option</option>
                                  <option>Birthday</option>
                                  <option>Anniversary</option>
                              </select>
                          </div>
                          <div className="my-3">
                              {/*<input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>*/}
                              <button type="submit" className="btn" style={{backgroundColor: '#495e57', color: '#fff'}}>Make Your Reservation</button>
                          </div>
                      </fieldset>
                  </form>
              </div>
          </div>

      </section>
    </header>
  );
};

export default BookingForm;
