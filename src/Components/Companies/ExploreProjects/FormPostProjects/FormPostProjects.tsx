import { useState } from "react";
import styles from "./FormPostProjects.module.css";

interface FormData {
  title: string;
  companyName: string;
  description: string;
  budget: string;
  duration: string;
  skills: string[];
}

export const FormPostProjects = () => {
  const skillData = ["Python", "React", "Django", "Flask", "Node", "Express"];

  // Initial state for the form
  const [formData, setFormData] = useState<FormData>({
    title: "",
    companyName: "",
    description: "",
    budget: "",
    duration: "",
    skills: [],
  });

  // Handle change in input fields
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle skill selection
  const handleSkillSelect = (skill: string) => {
    setFormData((prevState) => ({
      ...prevState,
      skills: prevState.skills.includes(skill)
        ? prevState.skills.filter((s) => s !== skill)
        : [...prevState.skills, skill],
    }));
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Generate a unique ID for the new gig
    const newId = Date.now();

    // Create a new gig object
    const newGig = { ...formData, id: newId };

    // Get existing gigs from local storage
    const gigsFromStorage = localStorage.getItem("gigs");
    const existingGigs = gigsFromStorage ? JSON.parse(gigsFromStorage) : [];

    // Append the new gig to the existing ones
    const updatedGigs = [...existingGigs, newGig];

    // Save the updated gigs array to local storage
    localStorage.setItem("gigs", JSON.stringify(updatedGigs));

    console.log(newGig);

    // Optionally, reset the form here
    setFormData({
      title: "",
      companyName: "",
      description: "",
      budget: "",
      duration: "",
      skills: [],
    });
  };

  // Clear form data
  const handleClear = () => {
    setFormData({
      title: "",
      companyName: "",
      description: "",
      budget: "",
      duration: "",
      skills: [],
    });
  };

  return (
    <div className={styles.FormPostWrapper}>
      <h1>Post a Project</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.InputContentWrapper}>
          <div className={styles.BasicDetailsWrap}>
            <div>
              <p>Title</p>
              <input
                type="text"
                name="title"
                placeholder="UI/UX Designer"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Company Name</p>
              <input
                type="text"
                name="companyName"
                placeholder="FAYA"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.Description}>
            <p>Description</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.Description}>
            <p>Project Deliverables:</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className={styles.skillsRequired}>
          <h2>Skill Required</h2>
          <div>
            {skillData.map((skill, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSkillSelect(skill)}
                className={
                  formData.skills.includes(skill) ? styles.selected : ""
                }
              >
                {skill}
              </button>
            ))}
            <button>+</button>
            <input type="text" />
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button type="submit">Post Project</button>
          <button
            type="button"
            onClick={handleClear}
            style={{ backgroundColor: "white", color: "#4c27ff" }}
          >
            Clear all
          </button>
        </div>
      </form>
    </div>
  );
};
