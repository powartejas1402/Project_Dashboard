import React, {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

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

    const [file, setFile] = useState(); 
    const [name, setName] = useState();



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

        const formData = new FormData();
        formData.append('First-Name', data.firstname);
        formData.append('Last-name', data.lastname);
        formData.append('Employee Id', data.empid);
        formData.append('File Type', file);
        formData.append(`${file} Image`, name);

        // let info = [data, name, file];
        //console.log(formData);
        e.preventDefault();
        //console.log(data);
        console.log(formData);
        alert(`First-Name: ${data.firstname}, Last-name: ${data.lastname}, EmployeeID: ${data.empid}, Message: ${data.msg}, File-type: ${file}, File: ${name}`);


        axios.post("https://intense-beach-75357.herokuapp.com/file" , formData)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });    
    };

    return (
        <>
            <h1 style={style_form}> Send us your Files! </h1>
            <form onSubmit={formSubmit}>
                <div className="col-lg-6 p-5 col-10">
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
                    <div className="mb-3">
                        <label for="filetype" className="form-label">Select your file types</label>
                        <select 
                            id="filetype" 
                            value={file}   
                            name="type" 
                            onChange={(event) => {
                                setFile(event.target.value);
                            }}
                            className="form-select" required> 
                            <option selected></option>
                            <option value="DOC">DOC</option>
                            <option value="PDF">PDF</option>
                            <option value="MP4">MP4</option>
                            <option value="JPG">JPG</option>

                        </select>
                        
                    </div>
                    <div style = {{border : '0px'}}>
                        <label for="selectfile" className="form-label">Upload your file</label>
                        <br />
                        <input 
                            type="file" 
                            value={name} 
                            name="filename" 
                            onChange={(event) => {
                                setName(event.target.value);
                            }} 
                            id="selectfile" 
                            accept={`.${file}`} />
                    </div>
                    <br />
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Any message?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" onChange={InputEvent} value={data.msg} placeholder="Enter your message..." rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success" type="submit">Submit form</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;