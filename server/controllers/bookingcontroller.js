
const eventDb=require("../models/eventmodel")
const Userdb=require("../models/usermodel")
const Booking=require("../models/bookingSchema")
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)
 

 const getCheckoutSession=async(req,res)=>{


    
        const { eventId } = req.body;

        try {
            const { eventId } = req.body;
            const { userId } = req.body;
 

    
            // You would typically fetch event details from your database here
             const event = await eventDb.findById(eventId);
             const user = await Userdb.findById(userId);
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: [
                {
                  price_data: {
                    currency: 'inr',
                    product_data: {
                      name: `Event Ticket - ${event.title}`,
                      description: event.description,
                    },
                    unit_amount: event.ticketprice * 100, // Stripe uses cents
                  },
                  quantity:1,
                },
              ],
              mode: 'payment',
              success_url: `${process.env.CLIENT_SITE_URL}/checkout-succes/`,
              cancel_url: `${process.env.CLIENT_SITE_URL}/checkout-fail`,
              metadata: {
                eventId,
                
                
                
              },
              
              
            })
           
            
           // await booking.save()

        
            res.json({ id: session.id });
            const booking=new Booking({
                event:event._id,
                eventname:event.title,
                ticketprice:event.ticketprice,
                sessionid:session.id,
                username:user.name,
                user:user._id
                
                
            
            
                
            })
            await booking.save()
          } catch (error) {
            console.error('Error creating checkout session:', error);
            res.status(500).json({ error: error.message });
          }
        };
        
    
const listBookings = async (req, res) => {
    try {
        const bookingList = await Booking.find()
        res.status(200).json(bookingList)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}
 const deletebooking=async(req,res)=>{
    try {
      const {bookingid}=req.params
              const deleteBooking=await Booking.findByIdAndDelete(bookingid)
              if(!deleteBooking){
                  return res.status(400).json({error:"booking not found"})
              }
              return res.status(400).json({message:"ticket deleted"})
      

    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  }
  const userBookings= async (req, res) => {
      try {
        const bookings = await Booking.find({ user: req.params.userId })
        .populate('event', 'title eventdate ticketprice')
        .sort({ bookingDate: -1 });
      
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
      }
  

module.exports = {getCheckoutSession,listBookings,deletebooking,userBookings}
