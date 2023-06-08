// import { useState } from 'react';
// import ContactInfo from "../components/ContantInfo";
// import Footer from '../components/Footer';

// const ContactUs = () => {
//     const [message, setMessage] = useState('');

//     const handleMessageChange = event => {
//         setMessage(event.target.value);
//         console.log(event.target.value);
//     };

//     return (
//         <section className=''>
//             <p className='absolute text-white text-3xl font-semibold ml-[45%] mt-[7%]'>Kontakt os</p>
//             <img className='bg-primarycolor01' src="Banner.png" alt="" />
//         <div className='ml-[12%]'>
//             <p className="text-paragraphtext text-2xl pb-[2%] pt-[6%]">Vi sidder klar til at besvare dine spørgsmål</p>
//             <hr className='bg-primarycolor01 w-[7%] h-[2px]' />
//             <p className='text-grey w-[40rem] pt-[2%] pb-[2%]'>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
//         </div>

//         <article className='flex ml-[12%]'>


//             <article className="border-solid border-2 border-para02 w-[39rem] h-[44rem] rounded">
//                 <article className='ml-[5%]'>

//                 <div class="">
//                     <div class="flex flex-wrap gap-[10%]">
//                         <div class="relative pt-[4%] pb-[2%]">
//                             <label for="name" class="">Name</label>
//                             <input type="text" id="name" name="name" placeholder='Indtast dit navn' class="w-full h-[4rem] rounded order-solid border-2 border-para02 pl-[4%]" />
//                         </div>
//                         <div class="relative pt-[4%] pb-[2%]">
//                             <label for="name" class="">Email</label>
//                             <input type="text" id="name" name="name" placeholder='Indtast din email' class="w-full h-[4rem] rounded border-solid border-2 border-para02 pl-[4%]" />
//                         </div>
//                     </div>
//                 </div>

//                 <p className='pt-[4%] pb-[2%]'>Emne</p>
//                 <input type="text" name="" id="" placeholder="Indtast emne" className="border-solid border-2 border-para02 h-[4rem] w-[34rem] rounded pl-[2%] " />

//                 <p className='pt-[4%] pb-[2%]'>Besked</p>
//                 <textarea placeholder='Indtast din besked... ' id="message" name="message" value={message} onChange={handleMessageChange} className='h-[15rem] w-[34rem] border-solid border-2 border-para02 pl-[2%]' />

//                 <span className='flex pt-[4%] pb-[4%]'>
//                     <input type="checkbox" name="" id="" className='w-6 h-6' />
//                     <p className='pl-2'>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</p>
//                 </span>
//                 <button disabled={!message} className='bg-primarycolor01 text-center rounded block text-white w-[10rem] h-[4rem]'>Submit</button>
//             </article>
//             </article>

//             <div className='flex-col ml-[4%]'>
//                 <ContactInfo />
//             </div>
//             </article>

//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.4564088860676!2d90.37299538361066!3d23.74355810165831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4b867eac79%3A0x21d7c909887e7955!2sGuhaa%20.%20.%20.%20The%20Cave%20Kitchen!5e0!3m2!1sda!2sdk!4v1685011745991!5m2!1sda!2sdk" className='w-full h-[31rem] pt-[8rem]' ></iframe>
//             <Footer />
//         </section>
//     );
// };

// export default ContactUs;
import { Form, Formik, Field } from "formik";
import validator from "validator";

function ContactUs() {
  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (!validator.isStrongPassword(values.password)) {
      errors.password =
        "Password must contain one Capital letter, Small Letter, Number & Special symbol";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }

    return errors;
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <Formik
            className="shadow-lg"
            initialValues={{ name: "", email: "", password: "",}}
            validate={validateForm}
            // onSubmit={submitHandler}
          >
            {(formik) => (
              <Form className="shadow-lg">
                <h1 className="mb-4">Sign Up</h1>
                <div className="form-group mt-4">
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    type="text"
                    className={
                      formik.touched.name && formik.errors.name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="phoneNo">Phone No</label>
                  <Field
                    name="phoneNo"
                    type="text"
                    className={
                      formik.touched.phoneNo && formik.errors.phoneNo
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <div className="invalid-feedback">
                      {formik.errors.phoneNo}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      formik.touched.password && formik.errors.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="invalid-feedback">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-block btn-primary py-3 mt-4 w-100">Register</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;