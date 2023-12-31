import { useState } from "react";
import { LogoSVG } from "../../assets/svg";
import styles from "./Register.module.css";
import { registerUser } from "./RegisterApis";
import toast from "react-hot-toast";
import { comingSoon } from "../Companies/PostGigs/utils/commom";

type SignupProps = {
    setval: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Signup = ({ setval }: SignupProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.promise(registerUser(formData), {
            loading: "Signing in...",
            success: () => {
                setval(false);
                return "Signin Successful!";
            },
            error: "Signin failed. Please try again.",
        });
    };
    return (
        <div className={styles.SignupWrapper}>
            <LogoSVG />
            <div className={styles.HeaderSection}>
                <h2>Dedicated to navigating futures and shaping careers.</h2>
            </div>
            <form className={styles.FormWrapper} onSubmit={handleSubmit}>
                <div className={styles.InputContent}>
                    <p>Full Name</p>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Robert Langster"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.InputContent}>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="robert.langster@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.InputContent}>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="....."
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.RembForg}>
                    <div>
                        <input type="checkbox" />
                        Remeber Me
                    </div>
                    <a href="">Forgot Password?</a>
                </div>
                <div className={styles.ButtonWrapper}>
                    <button
                        onClick={() => {
                            setval(false);
                        }}
                        style={{ color: "#4318FF" }}
                    >
                        Log In
                    </button>
                    <button
                        style={{ backgroundColor: "#4318FF" }}
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <div className={styles.OtherLogins} onClick={comingSoon}>
                <p>Or, Login with</p>
                <a>Facebook</a>
                <a>LinkedIn</a>
                <a>Google</a>
            </div>
        </div>
    );
};
