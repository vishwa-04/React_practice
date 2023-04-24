import React from "react";

function CreatePost(){


    function submitHandle(e) {
        e.preventDefault();

      }
 return(
    <>
     <div className="box">
      <form onSubmit={submitHandle}>
      
          <div className="container">

        
          <table>
        <h1>Add Post</h1>
            <tbody>
              <tr>
                <td>
                  <label>Post Title</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Post Title"
                    name="postTitle"
                    // value={formValues.firstname}
                    // onChange={handleChange}
                  ></input>
                  {/* <div className="errorStyle">{formError.firstname}</div> */}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Post Description</label>
                </td>              
                <td>
                 <textarea rows={5} cols={20} placeholder="Post Description"></textarea>
                </td>
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
    </>
 )   
}
export default CreatePost