import React, { useState } from 'react'

const SubmissionForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("Male");
    const [subject, setSubject] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubjectChange = (sub) => {
        setSubject((prev) => (
            {
                ...prev,
                [sub]: !prev[sub],
            }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("These are the data of user ", firstName, lastName, email, contact, gender, subject, resume, url, selectedOption, about)
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubject({
            english: false,
            maths: false,
            physics: false,
        })
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    }

    return (
        <div className="App">
            <h1>Form in react</h1>
            <fieldset>
                <form action="#" method='get'>

                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter first name' required />

                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" id='lastName' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Enter last name' required />

                    <label htmlFor="email">Email*</label>
                    <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="contact">Contact*</label>
                    <input type="tel" id='contact' name='contact' value={contact} onChange={(e) => setContact(e.target.value)} />

                    <label htmlFor="gender">Gender</label>
                    <input type="radio" id='male' name='gender' value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                    Male
                    <input type="radio" id='female' name='gender' value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                    Female
                    <input type="radio" id='other' name='gender' value='other' checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} />
                    Other

                    <label htmlFor="lang">
                        Your best subject
                    </label>
                    <input type="checkbox" id='english' name='lang' checked={subject.english === true} onChange={(e) => handleSubjectChange('english')} />
                    English
                    <input type="checkbox" id='maths' name='lang' checked={subject.maths === true} onChange={(e) => handleSubjectChange('maths')} />
                    Maths
                    <input type="checkbox" id='physics' name='lang' checked={subject.physics === true} onChange={(e) => handleSubjectChange('physics')} />
                    Physics

                    <label htmlFor="file">Upload Resume*</label>
                    <input type="file" name='file' id='file' onChange={(e) => setResume(e.target.files[0])} placeholder='Enter upload file' required />

                    <label htmlFor="url">Enter URL*</label>
                    <input type="url" name='url' id='url' onChange={(e) => setUrl(e.target.value)} placeholder='Enter URL' required />

                    <label htmlFor="choice">Select your choice</label>
                    <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="" disabled defaultValue={selectedOption === ""}>Select your choice</option>
                        <optgroup label='Beginners'>
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">Javascript</option>
                        </optgroup>
                        <optgroup label='Advanced'>
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About</label>
                    <textarea name="about" id="about" value={about} cols={30} rows={10} onChange={(e) => setAbout(e.target.value)} placeholder='About yourself'></textarea>

                    <button type='reset' value="reset" onClick={handleReset}>Reset</button>
                    <button type='submit' value="submit" onClick={handleSubmit}>Submit</button>

                </form>
            </fieldset>
        </div>
    )
}


export default SubmissionForm