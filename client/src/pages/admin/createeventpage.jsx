// EventForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createeventpage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventdate, setEventdate] = useState('');
    const [eventtime, setEventime] = useState('');
    const [eventtype, setEventtype] = useState('');
    const [location, setLocation] = useState('');
    const [organisedby, setOrganisedby] = useState('');
    const [ticketprice, setTicketprice] = useState('');
    const [tickettype, setTickettype] = useState('');



    const [image, setImage] = useState(null);
    const navigate=useNavigate()


    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('eventdate', eventdate);
        formData.append('eventtime', eventtime);
        formData.append('eventtype', eventtype);
        formData.append('location', location);
        formData.append('organisedby', organisedby);
        formData.append('ticketprice', ticketprice);
        formData.append('tickettype', tickettype);
        formData.append('image', image);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/event/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Event created:', response.data);
            alert('Event created successfully!');
            navigate('/adminevents')
        
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Failed to create event.');
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Event!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">title</label>
                            <input type="text" className="input" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">Description</label>
                            <input type="text" className="input"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">Time</label>
                            <input type="text" className="input"
                                value={eventtime}
                                onChange={(e) => setEventime(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">Date</label>
                            <input type="date" className="input" 
                                value={eventdate}
                                onChange={(e) => setEventdate(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">Location</label>
                            <input type="text" className="input" 
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">Type of event</label>
                            <input type="text" className="input" 
                                value={eventtype}
                                onChange={(e) => setEventtype(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">Ticket price</label>
                            <input type="text" className="input" 
                                value={ticketprice}
                                onChange={(e) => setTicketprice(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">oraganised by</label>
                            <input type="text" className="input" 
                                value={organisedby}
                                onChange={(e) => setOrganisedby(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">ticket type</label>
                            <input type="text" className="input" 
                                value={tickettype}
                                onChange={(e) => setTickettype(e.target.value)}
                                required

                            />
                            <label className="fieldset-label">image</label>
                            <input type="file" className="input" 
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                            <button className="btn btn-neutral mt-4" onClick={onSubmit}>create event</button>

   
                        
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Createeventpage