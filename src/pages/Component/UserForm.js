import { useEffect, useState } from "react";
import "../userData/css/form.css";
function UserForm() {
  const initialValues = {
    gender: "",
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    interest: [],
    birthdate: "",
    address: "",
    achTitle:[]

  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [achievement, setAchievement] = useState([{service:""}]);

  function handleAdd() {
    console.log("Clicked!!!");
    const addAchievement = [...achievement, []];
    setAchievement(addAchievement);
  }
  function handleServiceChange(e,index) {
    const {name,value} = e.target
    const list = [...achievement]
    list[index][name]=value;
    setAchievement(list)
  }
function handleRemove(index){
  console.log("removed" + index)
  const list = [...achievement]
  console.log([...achievement])
  list.splice(index,1)
  setAchievement(list);
}
  function submitHandle(e) {
    e.preventDefault();

    console.log(formValues,"dfgjklllllllllllllll");
    setFormError(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formError]);
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
    } else if (values.mobile.length > 10 || values.mobile.length < 10) {
      errors.mobile = "Mobile number should be 10 digits";
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
    if (!values.gender) {
      errors.gender = "Please select gender";
    }
    if (document.querySelectorAll("input:checked").length === 0) {
      errors.check = "please select one box";
    }
    if(values.achTitle === ""&& values.achTitle.length<=1){
      errors.achTitle = "Please add some achievement"
    }
    // console.log(checked,"checkbox value")

    // console.log(errors);
    return errors;
  };
  return (
    <div className="box">
      {Object.keys(formError).length === 0 && isSubmit ? (
        <div>Registered Successfully</div>
      ) : (
        ""
      )}
      <form onSubmit={submitHandle}>
        <div className="container">
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
                  <div className="errorStyle">{formError.firstname}</div>
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
                  <div className="errorStyle">{formError.lastname}</div>
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
                  <div className="errorStyle">{formError.mobile}</div>
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
                  <div className="errorStyle">{formError.email}</div>
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
                    min="1980-01-01"
                    max="2020-12-31"
                    value={formValues.birthdate}
                    onChange={handleChange}
                  ></input>
                  <div className="errorStyle">{formError.birthdate}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender</label>
                </td>
                <td>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value="Others"
                    onChange={handleChange}
                  />
                  Others
                  <div className="errorStyle">{formError.gender}</div>
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
                  <div className="errorStyle">{formError.address}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Interest</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="dance"
                    className="check"
                    name="interest"
                    value="dance"
                    onChange={handleChange}
                  />
                  Dance
                  <input
                    type="checkbox"
                    id="music"
                    className="check"
                    name="interest"
                    value="music"
                    onChange={handleChange}
                  />
                  Music
                  <input
                    type="checkbox"
                    id="reading"
                    className="check"
                    name="interest"
                    value="reading"
                    onChange={handleChange}
                  />
                  Reading
                  <div className="errorStyle">{formError.check}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Achievements</label>
                </td>
                {achievement.map((data, i) => {
                  console.log(data.i,"map")
                  return (
                    <>
                      <div>
                        <td>
                          {" "}
                          <input
                            type="text"
                            placeholder="Enter Title"
                            name="achTitle"
                            value = {data.achTitle}
                            onChange =  {(e) => handleServiceChange(e,i)}
                          />
                          <input type="date" name="achDate" />
                          {achievement.length > 1 && <button onClick={() => handleRemove(i)}>Remove</button>}
                        </td>
                      </div>
                    </>
                  );
                })}
                <tr>
                  <td>
                  <div className="errorStyle">{formError.achTitle}</div>
                    <button onClick={() => handleAdd()}>Add</button>
                  </td>
                </tr>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
export default UserForm;
