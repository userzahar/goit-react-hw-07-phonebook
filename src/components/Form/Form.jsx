// import { addContact } from "redux/contacts/contactSlice";
import { Button } from "components/Button/Button";
import { LabelStyled } from "components/Filter/FilterStyled";
import { nanoid } from "nanoid";
import { useState } from "react";
import { InputStyled } from "./StyledInput";
import { useDispatch, useSelector } from "react-redux";
import { createContactsThunk, getContactsThunk } from "redux/contacts/thunk";

export function Form() {
    const { items } = useSelector(state => state.contacts.contacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    // !________________________________
    const createContacts = async (data) => {

    if (items.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alredy in contacts`)
      return false;
    } else {
      console.log("💥", data);
        const okay = await dispatch(createContactsThunk(data));
        dispatch(getContactsThunk());
    }
    }
    // ! -------------------------
    const inputId = nanoid();
    const inputIdNew = nanoid();
    const handleChange = ({ target }) => {
        switch (target.name) {
            case "name": setName(target.value);
                break;
            case "number": setNumber(target.value);
                break;
            default: ;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let cteateContact = await createContacts({
            name,
            phone: number,
        })

        if (cteateContact === undefined) {
           reset();
        }

    }

     function reset()  {
         setName('');
         setNumber('');
    }
        return <form onSubmit={handleSubmit}>
            <LabelStyled htmlFor={inputId}>Name</LabelStyled>
            <InputStyled
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
                id={inputId}
            />

            <LabelStyled htmlFor={inputIdNew}>Number</LabelStyled>
            <InputStyled
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
                id={inputIdNew}
            />
            <Button text="Add Contact" />
        </form>

    
}
