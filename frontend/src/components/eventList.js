import React from 'react';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import './myStyle.css'
//imported the necessary things

//in this function i again used use state to store information 
//and depending on that information then the different information will display
//on the webpage
//from the app.js i passed a token as props 
//so that token gets checked to see if it is verified so the user can read the events
//available
//firstly i also passed over if the user is admin or not as props and 
//that decided which table of events appears as if the user is not admin which any 
//user registered isnt by default then all they can do is read the events
//and that happens from my get function
//if the user is admin then the admin table of events shows up and that admin user is 
//able to implement crud and thats possible through my create, update and delete functions bellow
//i will give you an admin username and password as i didnt feel it was necessary to make a register for admin
//or you can go look in mongoDB for the details
function Events(props) {
    const [data, setData] = useState();
    const [displayData, setDisplayData] = useState(false);
    const [event, setEvent] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [createPopup, setCreatePopup] = useState(false)
    const [newEvent, setNewEvent] = useState();
    const [newDate, setNewDate] = useState();
    const [newTime, setNewTime] = useState();
    const [eventId, setEventId] = useState();
    const [updatePopup, setUpdatePopup] = useState(false)

    async function displayEvents(){
        await fetch('http://localhost:8080/getEvents', {
        method: "POST",
        headers: {
            "token": props.token
        },
        
        }).then(
          response => response.json()
        )
        .then(
          data => setData(data)
        )

        setDisplayData(true)
      }

    function createEventPopup(){
      setCreatePopup(true)
    }

    function createEvent(e){
      e.preventDefault()
      
      let Event = {
        event: event,
        date: date,
        time: time
      }
      fetch('http://localhost:8080/createEvent', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Event)
      }).then(
          response => response.json()
      )
      
      console.log('added event')
      setCreatePopup(false)
      displayEvents()
    }

    function closeCreatePopup(){
      setCreatePopup(false)
    }

    function updateEventPopup(id){
      setEventId(id)
      setUpdatePopup(true)
    }

    function updateEvent(){
        if(newEvent > 140){
          alert("You have reached character limit of 140!")
        }
        else{
          let event = {
            _id: eventId,
            event: newEvent,
            date: newDate,
            time: newTime
          }
          fetch(`http://localhost:8080/updateEvent`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event)
          }).then(response => response.json());
          console.log('Updated event')
          setUpdatePopup(false)
          displayEvents()
        } 
    }
    
    function closeUpdatePopup(){
      setUpdatePopup(false)
    }

    function deleteEvent(id){
      let eventId = {
        _id: id
      }
      fetch(`http://localhost:8080/deleteEvent`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventId)
      }).then(response => response.json());
      console.log('Deleted event')
      displayEvents()
    }

    function logout(){
      window.location.reload(false);
    }



    return (
      <div className="events-container">
        <Button className='Button' onClick={displayEvents}>Display Events</Button><br /><br />
        <Button className='Button' onClick={logout}>Logout</Button><br/><br/>
        {(displayData == true && props.isAdmin == false) ? (
          <table className='Table'>
            <thead>
              <tr>
                <th>EVENT</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {data.map((event, i) => (
                <><tr key={i}>
                      <td className='tableData1'>{event.event}</td>
                      <td className='tableData2'>{event.date}</td>
                      <td className='tableData1'>{event.time}</td>
                  </tr></>
                ))}
            </tbody>
          </table> 
        ) : " " }

        {(displayData == true && props.isAdmin == true) ? (
          <><Button className='Button' onClick={createEventPopup}>Add Events</Button><br/><br/>
            <table className='Table'>
              <thead>
                <tr>
                  <th>EVENT</th>
                  <th>DATE</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                {data.map((event, i) => (
                  <><tr key={i}>
                    <td className='tableData1'>{event.event}</td>
                    <td className='tableData2'>{event.date}</td>
                    <td className='tableData1'>{event.time}</td>
                    <td><Button className='Button' onClick={() => updateEventPopup(event._id)}>Edit</Button> <Button className='Button' onClick={() => deleteEvent(event._id)}>Delete</Button></td>
                  </tr></>
                ))}
              </tbody>
            </table>
          </> 
        ) : " " }

        {(createPopup === true) ? (
            <div className='popup'>
              <div className='popupInner'>
                <h4 className='mainHeading'>ADD INFORMATION TO CREATE EVENT:</h4><br/>
                <form >
                  <input type='text'  placeholder='Event name...' onChange={e => setEvent(e.target.value)}/><br/><br/>
                  <input type='text' placeholder='Event Date...' onChange={e => setDate(e.target.value)}/><br/><br/>
                  <input type='text' placeholder='Event Time...' onChange={e => setTime(e.target.value)}/><br/><br/>
                  <Button className='Button' onClick={createEvent}>Submit</Button>
                  <Button className='Button' onClick={closeCreatePopup}>Close</Button>
                </form>
              </div>
            </div>
          ) : ""}<br/>

        {(updatePopup === true) ? (
            <div className='popup'>
              <div className='popupInner'>
                <h4 className='mainHeading'>ADD INFORMATION TO UPDATE EVENT:</h4><br/>
                <form >
                  <input type='text'  placeholder='Event name...' onChange={e => setNewEvent(e.target.value)}/><br/><br/>
                  <input type='text' placeholder='Event Date...' onChange={e => setNewDate(e.target.value)}/><br/><br/>
                  <input type='text' placeholder='Event Time...' onChange={e => setNewTime(e.target.value)}/><br/><br/>
                  <Button className='Button' onClick={updateEvent}>Submit</Button>
                  <Button className='Button' onClick={closeUpdatePopup}>Close</Button>
                </form>
              </div>
            </div>
         ) : ""}<br/>
      </div>
    );
  }
  
  export default Events;