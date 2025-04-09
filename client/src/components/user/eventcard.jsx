

import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe('pk_test_51R43O5FYKYn2pir0rr0fUb2JJlbhyQP97QADg7vMWrxebAUYy9ob0S6Ehs9mAlDNz9BBhUAzR4JK9hggmrfqQHsx00qBJHyXHi');



const handlePayment = async (eventId, userId) => {



  try {
    const stripe = await stripePromise;
// Call backend to create payment intent
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/bookings/checkout_session`, {
      eventId, userId,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventId,
        userId,
      }),
    })
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id

    });
    alert("hi")

    if (result.error) {
      console.error(result.error.message);
    }

  } catch (error) {

    console.log(error);
    alert('An error occurred. Please try again.');
  }
}
const Eventcard = ({ event }) => {
  const userData = useSelector((state) => state.user)

  return (
    <div className=" bg-base-100  shadow-sm centre flex items-center w-full">
      <figure>
        <img
          src={event.image}
          alt="img" />
      </figure>
      <div className="card-body">
      <span className="badge h-10 badge-xs badge-warning">{event.tickettype}-${event.ticketprice}</span>
      
        <h2 className="card-title">{event.title}</h2>
        <p>date:{event.eventdate}</p>
        <p>Time:{event.eventtime}</p>
        <p>ticekt price:{event.ticketprice}</p>
        <p>Location:{event.location}</p>
        <p>Event type:{event.eventtype}</p>
        <p>Ticekt type:{event.tickettype}</p>
   
        <p>{userData.user._id}</p>



        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handlePayment(event._id, userData.user._id)}>Book ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Eventcard