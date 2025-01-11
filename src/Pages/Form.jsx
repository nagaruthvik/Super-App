import { useState } from "react"
import styles from '../style/form.module.css'
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/img1.png';


export default function Form() {
    var navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        toc: false
    })

    const [error, setError] = useState({
        name: null,
        userName: null,
        email: null,
        mobile: null,
        toc: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        let newErrors = {};

        if (formData.name.trim().length === 0) {
            newErrors.name = "Name should not be empty";
        }
        if (formData.mobile.trim().length === 0) {
            newErrors.mobile = "Mobile should not be empty";
        }
        if (formData.email.trim().length === 0) {
            newErrors.email = "Email should not be empty";
        }
        if (formData.userName.trim().length === 0) {
            newErrors.userName = "User name should not be empty";
        }
        if (!formData.toc) {
            newErrors.toc = "Please accept the terms and conditions";
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        setError({});
        localStorage.setItem("formData", JSON.stringify(formData));
        alert("Form submitted");
        navigate("/Selector");

    }

    return (
        <div className={styles.container}>
            
            <div className={styles.imagecont}>
                <h1>Discover new things on Superapp</h1>
                <img src={img1} alt="" />


            </div>
        <form onSubmit={handleSubmit}>
                
           <div className={styles.innerdiv1} >
             <h1 style={{ color: "#72DB73", }}>Super app</h1> <br />
             <p>Create your new account</p>
           </div>

                
                <div className={styles.innerdiv2} >
                <input
                className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={e => setFormData(() => ({ ...formData, name: e.target.value }))}
                />
                {error.name && <p>{error.name}</p>}

                <input
                 className={styles.input}
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={formData.userName}
                    onChange={e => setFormData(() => ({ ...formData, userName: e.target.value }))}
                />
                {error.userName && <p>{error.userName}</p>}

                <input
                 className={styles.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={e => setFormData(() => ({ ...formData, email: e.target.value }))}
                />
                {error.email && <p>{error.email}</p>}

                <input
                 className={styles.input}
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={e => setFormData(() => ({ ...formData, mobile: e.target.value }))}
                />
                {error.mobile && <p>{error.mobile}</p>}
                
               
                <div>
                <input
                        type="checkbox"
                        name="toc"
                        id="toc"
                        value={formData.toc}
                        onChange={e => setFormData(() => ({ ...formData, toc: e.target.checked }))}
                    />
                    <p  style={{display:"inline", color:"#7C7C7C"}}  >   Share my registration data with Superapp</p>
                    {error.toc && <p>{error.toc}</p>}
                </div>
                    
                </div>

                <button className={styles.button}  type="submit">SIGN UP</button>
                <div className={styles.para}>
                    <h6>By clicking on Sign up. you agree to Superapp <span style={{color :"#72DB73"}}> Terms and Conditions of Use</span></h6> <br />
                    <h6>To learn more about how Superapp collects, uses, shares and protects your personal data please head <span style={{color :"#72DB73" }}>Superapp Privacy Policy</span></h6>
                </div>
            </form>
        </div>
    )
}
