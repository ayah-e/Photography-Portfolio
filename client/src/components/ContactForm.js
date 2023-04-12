import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          comment,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert('Your message has been submitted!');
      setName('');
      setEmail('');
      setComment('');
    } catch (error) {
      console.log(error);
      alert('An error occurred while submitting your message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const [contacts, setContacts] = useState([]);

  const handleGetContacts = async () => {
    try {
      const response = await fetch('/contacts');
      const data = await response.json();
      console.log(data);
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ui raised very padded text container segment">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Comment</label>
          <textarea
            rows="4"
            placeholder="Comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </Form.Field>
        <Button type="submit" primary>Submit</Button>
      </Form>

      <button onClick={handleGetContacts}>Get Contacts</button>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} ({contact.email}): {contact.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactForm;
