import React, { useState } from "react";

const CreateJob = ({submit}) => {

  const [form, setForm] = useState({
    title: '',
    company: '',
    city: '',
    description: '',
  });

  const InputHandle = (event) =>{
    setForm({...form, [event.target.name]:event.target.value})
  };

  const submitChange = (event) => {
    event.preventDefault();
    submit({...form, id:new Date().getTime().toString()});
  };

  return (
    <div>
      <div className="box">
        <h1 className="title is-5">Create a vacancy</h1>
        <form onSubmit={submitChange}>
          <input
            className="input"
            type="text"
            placeholder="Job title"
            name="title"
            value={form.title}
            onChange={InputHandle}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="company name"
            name="company"
            value={form.company}
            onChange={InputHandle}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="City name"
            name="city"
            value={form.city}
            onChange={InputHandle}
            required
          />
          <textarea
            className="input"
            type="text"
            placeholder="Description"
            name="description"
            value={form.description}
            onChange={InputHandle}
            required
          ></textarea>
          <button className="button is-primary">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
