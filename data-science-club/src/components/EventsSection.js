import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles for the calendar

function EventsSection() {
  const events = [
    {
      id: 1,
      title: 'Yorku DSC Presents: Project Showcase Networking Event',
      description: 'Join us for an exciting networking event where you can get to showcase your projects!',
      date: '2024-12-05', // Format as yyyy-mm-dd
      isUpcoming: true,
      imageUrl: '/eventPoster1.jpg', // Replace with actual image URL in public folder
    },
    {
      id: 2,
      title: 'Cracking Codes With Professors',
      description: 'Collaborative Coding workshop hosted by Professors Sonya Allin and Aditya Potukuchi!',
      date: '2024-11-22',
      isUpcoming: false,
      imageUrl: '/cracking_codes_with_professors_eventposter.png',
    },
    {
      id: 3,
      title: 'York University Data Science Club Orientation',
      description: 'Learn more about our club and what exciting events we have planned for you!',
      date: '2024-11-12',
      isUpcoming: false,
      imageUrl: '/orientation_eventposter.jpg', // Add image for orientation event
    },
  ];

  const upcomingEvent = events.filter(event => event.isUpcoming)[0];
  const pastEvents = events.filter(event => !event.isUpcoming);

  const [selectedDate, setSelectedDate] = useState(new Date()); // Track selected date
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

  // Filter events based on selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0]; // Convert to yyyy-mm-dd format
    const eventsOnSelectedDate = events.filter(event => event.date === formattedDate);
    setEventsForSelectedDate(eventsOnSelectedDate);
  };

  return (
    <section id="events" className="section" data-aos="fade-in">
      <h2>Upcoming Events</h2>

      {/* Main Upcoming Event */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card h-100" data-aos="zoom-in">
              <img
                src={upcomingEvent.imageUrl}
                className="card-img-top"
                alt={upcomingEvent.title}
              />
              <div className="card-body">
                <h5 className="card-title">{upcomingEvent.title}</h5>
                <p className="card-text">{upcomingEvent.description}</p>
                <p className="card-text"><strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Previous Events</h3>
      <div className="container">
        <div className="row">
          {pastEvents.map((event) => (
            <div className="col-md-4" key={event.id}>
              <div className="card h-100" data-aos="zoom-in">
                <img
                  src={event.imageUrl}
                  className="card-img-top"
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>Event Calendar</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
        </div>
      </div>

      {/* Display Events for Selected Date */}
      {eventsForSelectedDate.length > 0 && (
        <div className="container">
          <h3>Events on {selectedDate.toLocaleDateString()}</h3>
          <div className="row">
            {eventsForSelectedDate.map((event) => (
              <div className="col-md-4" key={event.id}>
                <div className="card h-100" data-aos="zoom-in">
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt={event.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">
                      <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default EventsSection;
