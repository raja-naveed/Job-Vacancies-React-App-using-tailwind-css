import React, { useState, useEffect } from "react";
import { vacancies as jobs } from "../data";
import Vacancy from "../components/Vacancy";
import CreateJob from "../components/CreateJob";

const Home = () => {
  const [vacancies, setvacancies] = useState([]); // vacancies is an array of objects

  useEffect(() => {
    setvacancies(jobs);
  }, []);

  const handleSubmit=(form)=>{
    setvacancies([form, ...vacancies]);
    console.log(form)
  };
  const handleDelete = (id) =>{

    const updatedvacancies = vacancies.filter(vacancy => vacancy.id !== id)

    setvacancies(updatedvacancies); 
  };

  return (
    <>
      {/* This is hero section  */}
      <section className="hero">
        <div className="hero-body">
          <p className="title">Find your dream job today</p>
          <p className="subtitle">Apply for any vacancies below</p>
        </div>
      </section>

      {/* This is Create Vacancy Section  */}
      <section>
        <CreateJob submit={handleSubmit} />
      </section>
      {/* This is Table Section Wheere all vancies shown  */}
      <section>
      {vacancies.map((vacancy) => {
        return <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete={handleDelete} />;
      })}
      </section>
      
    </>
  );
};

export default Home;
