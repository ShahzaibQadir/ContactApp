import React,{useState} from 'react'

const AddContact = (props) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All field are mandatory!")
            return;
        }
        props.addContactHandler();
        setName("");
        setEmail("");

       
        console.log(name,email);
    }
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input
                     type="text"
                     name="name"
                     placeholder="Name"
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                     type="text"
                     name="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>
                <button className="ui orange button" >Add</button>
            </form>
        </div>
    )
}

export default AddContact
