import { CardProjects } from "../ExploreProjects/ExploreProjects";
import styles from "./Profile.module.css";
import {
    BehanceLogos,
    FigmaLogos,
    GithubLogos,
    LinkedInLogos,
    LocationLogos,
    MailLogos,
    PhoneLogos,
    StackoverFlowLogos,
} from "./Logos";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserProjects } from "../SearchEngine/SearchEngineApis";

const Profile = () => {

    const userData: userData = JSON.parse(
        localStorage.getItem("userData") || "{}"
    );
    const navigate = useNavigate();

	const [project, setProject] = useState<ProjectData[]>([]);
	// const [desc, setDesc] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUserProjects();
            setProject(result);
			// const description = await getUserProjects();

        };

        fetchData();
    }, []);

    return (
        <div className={styles.ProfileWrapper}>
            <div className={styles.Header}>
                <h2>Hi, I’m {userData.username} 👋</h2>
                <button onClick={() => navigate("/editprofile")}>Update</button>
            </div>
            <p className={styles.Description}>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
            </p>
            <div className={styles.ContactDetailsWrapper}>
                <div>
                    <a href="">
                        <GithubLogos />
                    </a>
                    <a href="">
                        <StackoverFlowLogos />
                    </a>
                    <a href="">
                        <LinkedInLogos />
                    </a>
                    <a href="">
                        <BehanceLogos />
                    </a>
                    <a href="">
                        <FigmaLogos />
                    </a>
                </div>

                <div>
                    <LocationLogos />
                    <p>Ahmedabad, India</p>
                </div>
                <a href="tel:+918980500565">
                    {" "}
                    <PhoneLogos />
                    <p>+91 8980500565</p>
                </a>
                <a href="mailto:reachsagarshah@gmail.com">
                    <MailLogos />
                    <p>reachsagarshah@gmail.com</p>
                </a>
            </div>
            <div className={styles.skillsWrapper}>
                <h2>My Skills</h2>
                <div>
                    <p>Python</p>
                    <p>MongoDB</p>
                    <p>ReactJS</p>
                    <p>Django</p>
                </div>
            </div>

            <div className={styles.ExperienceWrapper}>
                <h2>My Experiences</h2>
                <div className={styles.MyExperienceContentWrapper}>
                    <div className={styles.ExperienceIndividualWrapper}>
                        <div>
                            <img src="" alt="Logo" />
                        </div>
                        <div>
                            <h3>Software Engineer Intern at Figma</h3>
                            <ol>
                                <li>
                                    Worked on the frontend of the Figma app.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </li>
                            </ol>
                        </div>
                        <p>Nov 2021 - Present</p>
                    </div>
                </div>
            </div>
            <div className={styles.ProjectWrapper}>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {" "}
                    <h3>My Projects</h3>
                    <button onClick={() => "/exploreprojects"}>Add</button>
                </div>

                <div>
                    {" "}
                    {project.map((data) => (
                        <CardProjects
                            name={"careerio"}
                            title={data.title}
                            description={data.description}
                            stacks={data.stack.split(", ")}
                            collabs={[
                                "https://shorturl.at/IJKV5",
                                "https://shorturl.at/cqSW3",
                                "https://shorturl.at/bouY2",
                            ]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
