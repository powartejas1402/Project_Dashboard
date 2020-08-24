import React, {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Form = () => {

    var style_form = {
        margin: 'auto',
        textAlign: 'center',
    };

    const [data, setData] = useState({
        firstname : '',
        lastname : '',
        empid : '',
        msg : '',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name] : value, 
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`First-Name: ${data.firstname}, Last-name: ${data.lastname}, EmployeeID: ${data.empid}, Message: ${data.msg}`);
    };

    return (
        <>
            <h1 style={style_form}> Send us your Files! </h1>
            <form onSubmit={formSubmit}>
                <div className="col-6 p-5">
                    <div className="mb-3">
                        <label for="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" onChange={InputEvent} value={data.firstname} placeholder="Enter your first name" required />
                    </div>
                    <div className="mb-3">
                        <label for="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" onChange={InputEvent} value={data.lastname} placeholder="Enter your last name" required />
                    </div>
                    <div className="mb-3">
                        <label for="employeeid" className="form-label">Employee ID</label>
                        <input type="number" className="form-control" id="employeeid" name="empid" onChange={InputEvent} value={data.empid} placeholder="Enter your Employee ID" required />
                    </div>
                    <div style = {{border : '0px'}}>
                        <label for="selectfile" className="form-label">Upload your files in (.doc, .jpg, .pdf, .mp4)</label>
                        <br />
                        <input type="file" id="selectfile" accept=".pdf, .jpg, .doc, .mp4" required/>
                    </div>
                    <br />
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Any message?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" onChange={InputEvent} value={data.msg} placeholder="Enter your message..." rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;