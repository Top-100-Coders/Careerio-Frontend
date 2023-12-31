import { useState } from "react";
import { LocationLogos, MailLogos, PhoneLogos } from "../Logos";
import styles from "./EditProfile.module.css";

type SocialMediaInput = {
  platform: string;
  link: string;
};

type EducationInput = {
  classOrStandard: string;
  schoolOrCollege: string;
  university: string;
  passOutYear: string;
};

type ExperienceInput = {
  companyName: string;
  role: string;
  description: string;
  duration: string;
};

export const EditProfile = () => {
  const [socialMediaInputs, setSocialMediaInputs] = useState<
    SocialMediaInput[]
  >([]);
  const socialMediaOptions = [
    "Instagram",
    "LinkedIn",
    "StackOverflow",
    "Behance",
    "Facebook",
    "Other",
  ];

  const addSocialMediaInput = () => {
    setSocialMediaInputs([...socialMediaInputs, { platform: "", link: "" }]);
  };

  // Use a type for the 'field' parameter to ensure it's a valid key of SocialMediaInput
  const handleSocialMediaChange = (
    index: number,
    field: keyof SocialMediaInput,
    value: string
  ) => {
    const newInputs = [...socialMediaInputs];
    newInputs[index][field] = value; // TypeScript knows that field is a valid key of SocialMediaInput
    setSocialMediaInputs(newInputs);
  };

  // Explicitly declare the type of state
  const [educationInputs, setEducationInputs] = useState<EducationInput[]>([]);

  const addEducationInput = () => {
    setEducationInputs([
      ...educationInputs,
      {
        classOrStandard: "",
        schoolOrCollege: "",
        university: "",
        passOutYear: "",
      },
    ]);
  };

  const handleEducationChange = (
    index: number,
    field: keyof EducationInput,
    value: string
  ) => {
    const newInputs = [...educationInputs];
    newInputs[index][field] = value; // TypeScript knows that field is a valid key of EducationInput
    setEducationInputs(newInputs);
  };

  const [experienceInputs, setExperienceInputs] = useState<ExperienceInput[]>(
    []
  );

  const addExperienceInput = () => {
    setExperienceInputs([
      ...experienceInputs,
      { companyName: "", role: "", description: "", duration: "" },
    ]);
  };

  const handleExperienceChange = (
    index: number,
    field: keyof ExperienceInput,
    value: string
  ) => {
    const newInputs = [...experienceInputs];
    newInputs[index][field] = value;
    setExperienceInputs(newInputs);
  };

  return (
    <div className={styles.EditProfileWrapper}>
      <h2>Edit your Profile</h2>
      <div className={styles.BasicDetailsWrap}>
        <div>
          <h3>Name</h3>
          <input type="text" placeholder="Enric S Neelamkavil" />
        </div>{" "}
        <div>
          <h3>Role</h3>
          <input type="text" placeholder="UI / UX Designer" />
        </div>
        <div>
          <h3>Hobbies</h3>
          <input type="text" placeholder="Games,Dancing" />
        </div>
        <div>
          <h3>Experience</h3>
          <input type="text" placeholder="2 Years" />
        </div>
        <div>
          <h3>Location</h3>
          <div>
            <input type="text" placeholder="Pavarty,Kerala" />
            <LocationLogos />
          </div>
        </div>{" "}
        <div>
          <h3>Phone</h3>
          <div>
            <input type="text" placeholder="+91 94007 43624" />
            <PhoneLogos />
          </div>
        </div>{" "}
        <div>
          <h3>Email</h3>
          <div>
            <input type="text" placeholder="enricsneelamkavil@gmail.com" />
            <MailLogos />
          </div>
        </div>
      </div>
      <div className={styles.SocialWrapper}>
        <h3>Social Media</h3>
        <div>
          <div className={styles.DataTAkingList}>
            {socialMediaInputs.map((input, index) => (
              <div key={index}>
                <select
                  value={input.platform}
                  onChange={(e) =>
                    handleSocialMediaChange(index, "platform", e.target.value)
                  }
                  className={styles.selectPlatform}
                >
                  <option value="">Select Platform</option>
                  {socialMediaOptions.map((option, idx) => (
                    <option
                      key={idx}
                      value={option}
                      className={styles.selectPlatform}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Enter link"
                  value={input.link}
                  onChange={(e) =>
                    handleSocialMediaChange(index, "link", e.target.value)
                  }
                  className={styles.inputLink}
                />
              </div>
            ))}
          </div>
          <button onClick={addSocialMediaInput}>+</button>
        </div>
      </div>
      <div className={styles.EducationDetailWrapper}>
        <h3>Education</h3>
        <div>
          {educationInputs.map((input, index) => (
            <div key={index} className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Class/Standard"
                value={input.classOrStandard}
                onChange={(e) =>
                  handleEducationChange(
                    index,
                    "classOrStandard",
                    e.target.value
                  )
                }
              />
              <input
                type="text"
                placeholder="School/College Name"
                value={input.schoolOrCollege}
                onChange={(e) =>
                  handleEducationChange(
                    index,
                    "schoolOrCollege",
                    e.target.value
                  )
                }
              />
              <input
                type="text"
                placeholder="University Name"
                value={input.university}
                onChange={(e) =>
                  handleEducationChange(index, "university", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Pass Out Year"
                value={input.passOutYear}
                onChange={(e) =>
                  handleEducationChange(index, "passOutYear", e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <button onClick={addEducationInput}>+</button>
      </div>
      <div className={styles.ExperienceDetailsWrapper}>
        <h3>Experience</h3>
        <div>
          {experienceInputs.map((input, index) => (
            <div key={index} className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Company Name"
                value={input.companyName}
                onChange={(e) =>
                  handleExperienceChange(index, "companyName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Role"
                value={input.role}
                onChange={(e) =>
                  handleExperienceChange(index, "role", e.target.value)
                }
              />
              <textarea
                placeholder="Brief Description"
                value={input.description}
                onChange={(e) =>
                  handleExperienceChange(index, "description", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Nov 2023 - Nov 2024"
                value={input.duration}
                onChange={(e) =>
                  handleExperienceChange(index, "duration", e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <button onClick={addExperienceInput}>+</button>
      </div>
    </div>
  );
};
