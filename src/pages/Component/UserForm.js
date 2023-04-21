import { useEffect, useState } from "react";
import "../userData/css/form.css";
function UserForm() {
  const initialValues = {
    gender:"Male",
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    birthdate: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [achievement , setAchievement] = useState([''])

  function submitHandle(e) {
    e.preventDefault();

    console.log(formValues,"dfgjklllllllllllllll");
    setFormError(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(formError);
if(Object.keys(formError).length === 0 && isSubmit){
  console.log(formValues );
}
  },[formError])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (values.lastname === "") {
      errors.lastname = "Lastname is required";
    }
    if (values.mobile === "") {
      errors.mobile = "Mobile number is required";
    }
    else if(values.mobile.length > 10 || values.mobile.length < 10){
      errors.mobile = "Mobile number should be 10 digits"
    }
    if (values.email === "") {
      errors.email = "Email is required";
    }
    if (values.address === "") {
      errors.address = "Address is required";
    }
    if (values.birthdate === "") {
      errors.birthdate = "Birthdate is required";
    }
    if(values.gender.checked){
      errors.gender = "Please select gender"
    }
  
else if ((values.birthdate)<1980){
  console.log((values.birthdate)>1980)
errors.birthdate = "Enter birthdate between 1980 and 2020"
}

    console.log(errors);
    return errors;
  };
  return (
    <div>
      {Object.keys(formError).length === 0 && isSubmit ? (<div>Registered Successfully</div>):""}
      <form onSubmit={submitHandle}>
        <fieldset>
          <legend>User Form</legend>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Firstname</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="firstname"
                    value={formValues.firstname}
                    onChange={handleChange}
                  ></input>
                  <span className="errorStyle">{formError.firstname}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Lastname</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your surname"
                    name="lastname"
                    value={formValues.lastname}
                    onChange={handleChange}
                  ></input>
                  <span className="errorStyle">{formError.lastname}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone</label>
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={handleChange}
                  ></input>
                  <span className="errorStyle">{formError.mobile}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  ></input>
                  <span className="errorStyle">{formError.email}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Birthdate</label>
                </td>
                <td>
                  <input
                    type="date"
                    name="birthdate"
                    value={formValues.birthdate}
                    onChange={handleChange}
                  ></input>
                  <span className="errorStyle">{formError.birthdate}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender</label>
                </td>
                <td>
                  <input type="radio" name="gender" value="Male" onChange={handleChange}/>
                  Male
                  <input type="radio" name="gender" value="Female" onChange={handleChange} />
                  Female
                  <input type="radio" name="gender" value="Others" onChange={handleChange}/>
                  Others
                  <span className="errorStyle">{formError.gender}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Address</label>
                </td>
                <td>
                  <textarea
                    rows="4"
                    cols="20"
                    placeholder="Enter your address"
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                  ></textarea>
                  <span className="errorStyle">{formError.address}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Interest</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="dance"
                    value="dance"
                  />
                  Dance
                  <input
                    type="checkbox"
                    id="interest2"
                    name="music"
                    value="music"
                  />
                  Music
                  <input
                    type="checkbox"
                    id="interest3"
                    name="reading"
                    value="reading"
                  />
                  Reading
                </td>
              </tr>
              <tr>
                <td>
                  <label>Achievements</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="achTitle"
                  ></input>
                  <input type="date" name="achDate" />
                  <button>Add</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
}
export default UserForm;
