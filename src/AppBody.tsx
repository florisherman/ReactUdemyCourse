import { BaseSyntheticEvent, useState } from "react";


function AppBody() {
    const [contact, setnameContact] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        optInt: "Off",
    });

    function handleChange(event: BaseSyntheticEvent) {
        console.log(event.target);
        const {name, value, translate} = event.target;
        console.log(name, value, translate);
        setnameContact(prevValue => {
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div className="formcontainer">
            <h3>enter some some stuff here</h3>
            <p>{contact.firstName} + {contact.lastName}</p>
            <input name="firstName" type='Text' onChange={handleChange} value={contact.firstName} placeholder="your first name ..." />
            <input name="lastName" type='Text' onChange={handleChange} value={contact.lastName} placeholder="your last name ..." />
            <input name="mobileNumber" type='Text' onChange={handleChange} value={contact.mobileNumber} placeholder="your mobile number..."/>
            <input type='submit' value="Press Me!" onClick={() => (console.log(contact))}/>
           
        </div>
    );
}

export default AppBody;
