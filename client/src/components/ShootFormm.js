import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";

function ShootFormm() {
  const [name, setName] = useState("");
  const [models, setModels] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/shoot_ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          models,
          description,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert("Your message has been submitted!");
      setName("");
      setModels("");
      setDescription("");
    } catch (error) {
      console.log(error);
      alert(
        "An error occurred while submitting your message. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const [shootIdeas, setShootIdeas] = useState([]);

  const handleGetShootIdeas = async () => {
    try {
      const response = await fetch("/shoot_ideas");
      const data = await response.json();
      console.log(data);
      setShootIdeas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteShootIdea = async (id) => {
    try {
      const response = await fetch(`/shoot_ideas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Shoot idea deleted successfully');
        // Remove the deleted item from the state
        setShootIdeas(shootIdeas.filter((shootIdea) => shootIdea.id !== id));
      } else {
        alert('Failed to delete shoot idea');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while deleting the shoot idea. Please try again later.');
    }
  };
  

  return (
    <div className="ui raised very padded text container segment">
      <h2>Shoot Ideas</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Shoot Name</label>
          <input
            type="text"
            placeholder="Shoot Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Models</label>
          <input
            type="text"
            placeholder="Models"
            value={models}
            onChange={(event) => setModels(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            rows="4"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </Form.Field>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>

      <button onClick={handleGetShootIdeas}>View Shoot Ideas</button>

      <ul>
        {shootIdeas.map((shootIdea) => (
          <li key={shootIdea.id}>
            {shootIdea.name} ({shootIdea.models}): {shootIdea.description}
            <button onClick={() => handleDeleteShootIdea(shootIdea.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShootFormm;