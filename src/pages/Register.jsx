// import Footer from "../components/Footer";
// import Header from "../components/Header";

// const Register = () => {
//     return ( 
//         <section>
//             <Header />

//             <article className="shadow-md rounded-sm w-[50rem] h-[45rem] translate-x-1/2 mb-[4%]">
//                 <p className="text-paragraphtext mb-[3%] pt-[5%] text-xl text-center ">Opret bruger hos Din Mægler</p>

//                 <article className="w-[33rem] translate-x-1/4">
//                     <p className="text-grey">Fulde navn</p>
//                     <input type="text" name="" id="" placeholder="Fulde navn" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]" />
                    

//                     <p className="text-grey">Email adresse</p>
//                     <input type="text" name="" id="" placeholder="Email adresse" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

//                     <p className="text-grey">Password</p>
//                     <input type="text" name="" id="" placeholder="Password" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

//                     <p className="text-grey">Bekræft password</p>
//                     <input type="text" name="" id="" placeholder="Bekræft password" className="border-solid border-2 border-para02 h-[4rem] w-[33rem] rounded-sm pl-[2%] mb-[6%]"/>

//                     <button className="bg-primarycolor01 text-center rounded-sm block text-white w-[33rem] h-[4rem]">Opret bruger</button>
//                 </article>
//             </article>
//             <Footer />
//         </section>
//      );
// }
 
// export default Register;

import { Form, json, useNavigate } from "react-router-dom";
import { createErrorsObject } from "../helpers/errorhandling";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import * as z from "zod";
import axios from "axios";
import useAuth from "../hooks/useAuth";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const HidePass = () => setShowPassword(!showPassword)
  const [errors, setErrors] = useState();
  const auth = useAuth() // { user, logInUser, logOutUser }
  const navigate = useNavigate()

  const schema = z
    .object({
      email: z.string().email("Your email is not valid!"),
      password: z.string().min(1, { message: "Password is required!" }),
      confirmPassword: z
        .string()
        .min(1, { message: "Please confirm your password!" }),
    })
    .refine((values) => values.password === values.confirmPassword, {
      message: "Passwords do not match!",
      path: ["confirmPassword"],
    });

    

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null)
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    let validated = schema.safeParse(values)
    console.log(validated) // { success, data, error }

    if(validated.success){
      // poste data til axios
      let response = await axios.post("http://localhost:3000/register", {
        email: validated.data.email,
        password: validated.data.password
      })
      // console.log(response.data)
      if(response.status === 400) setErrors({ exists: "User already exists"})
      auth.logInUser(response.data, () => navigate("/"))
    } else {
      setErrors(createErrorsObject(validated.error))
    }

  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="formgroup">
        <input type="email" name="email" id="email" placeholder="Email"/>
        {errors?.email && (<p style={{color: "red"}}>{errors.email}</p>)}
      </div>
      <div className="formgroup">
      <p style={{display: "flex", alignItems: "center", gap: "1em", fontSize: "10px", margin: "0", justifyContent: "center"}}>Show password{showPassword ? <FaEye onClick={HidePass}/> : <FaEyeSlash onClick={HidePass}/>}</p> 
        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" autoComplete="false"/>
        {errors?.password && (<p style={{color: "red"}}>{errors.password}</p>)}
      </div>
      <div className="formgroup">
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" autoComplete="false"/>
        {errors?.confirmPassword && (<p style={{color: "red"}}>{errors.confirmPassword}</p>)}
      </div>
      <button type="submit">Register</button>
      {errors?.exists && (<p style={{color: "red"}}>{errors.exists}</p>)}
    </form>
  );
};

export default Register;