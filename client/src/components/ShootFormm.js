import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import "./ShootFormm.css"

function ShootFormm() {
  const [name, setName] = useState("");
  const [models, setModels] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // toggle for showing shoot ideas when button is clicked
  const [showShootIdeas, setShowShootIdeas] = useState(false);

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

  // Get

  const handleGetShootIdeas = async () => {
    try {
      const response = await fetch("/shoot_ideas");
      const data = await response.json();
      console.log(data);
      setShootIdeas(data);
      setShowShootIdeas(!showShootIdeas); // toggle the state of showShootIdeas
    } catch (error) {
      console.log(error);
    }
  };

  // Delete

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

  // Patch
  const [editingShootIdea, setEditingShootIdea] = useState(null);

  const handleEditShootIdea = (shootIdea) => {
    setEditingShootIdea(shootIdea);
    setName(shootIdea.name);
    setModels(shootIdea.models);
    setDescription(shootIdea.description);
  };

  const handleUpdateShootIdea = async (id, updatedData) => {
    try {
      const response = await fetch(`/shoot_ideas/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      console.log(data);
      alert('Shoot idea updated successfully');
      // Update the shoot idea in the state
      setShootIdeas(shootIdeas.map((shootIdea) => {
        if (shootIdea.id === id) {
          return { ...shootIdea, ...updatedData };
        }
        return shootIdea;
      }));
      setEditingShootIdea(null);
      setName("");
      setModels("");
      setDescription("");
    } catch (error) {
      console.log(error);
      alert('An error occurred while updating the shoot idea. Please try again later.');
    }
  };



return (
  <div className="ui raised very padded text container segment" >
    <h2>Shoot Ideas</h2>
    <Form onSubmit={handleSubmit} class="shadow-inner ...">
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
      <Button type="submit" primary disabled={submitting}>
        Submit
      </Button>
    </Form>

    <Button onClick={handleGetShootIdeas}>{showShootIdeas ? "Hide Shoot Ideas" : "View Shoot Ideas"}</Button>
      {showShootIdeas && ( // render the ul element based on showShootIdeas
        <ul>
          {shootIdeas.map((shootIdea) => (
            <li key={shootIdea.id}>
              {editingShootIdea && editingShootIdea.id === shootIdea.id ? (
                <>
                  <Form onSubmit={() => handleUpdateShootIdea(editingShootIdea.id, { name, models, description })}>
                    <Form.Field>
                      <label>Shoot Name</label>
                      <input type="text" placeholder="Shoot Name" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Field>
                    <Form.Field>
                      <label>Models</label>
                      <input type="text" placeholder="Models" value={models} onChange={(event) => setModels(event.target.value)} />
                    </Form.Field>
                    <Form.Field>
                      <label>Description</label>
                      <textarea rows="4" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                    </Form.Field>
                    <Button type="submit" primary disabled={submitting}>
                      Update
                    </Button>
                    <Button onClick={() => setEditingShootIdea(null)}>Cancel</Button>
                  </Form>
                </>
              ) : (
                <>
                  {shootIdea.name} ({shootIdea.models}): {shootIdea.description}
                  <Button onClick={() => handleDeleteShootIdea(shootIdea.id)}>Delete</Button>
                  <Button onClick={() => handleEditShootIdea(shootIdea)}>Edit</Button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
  </div>
);
          }


          export default ShootFormm;