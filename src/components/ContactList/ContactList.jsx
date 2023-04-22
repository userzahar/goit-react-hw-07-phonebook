import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/contactSlice";

export function ContactList() {
    const dispatch = useDispatch();
    const { filter } = useSelector(state => state.filter);
    const { contacts } = useSelector(state => state.contacts);
    const filteredContacts = () => {
        if (!filter.length) {
            return contacts;
        }
        return contacts.filter(({name}) => {
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
  }
    
    const handleDelete = (id) => {
                 dispatch(deleteContact(id))
             }
        return <ListStyled>
            {filteredContacts()?.map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>handleDelete(contact.id)}/>
                </LI>)
                )}
            </ListStyled>
}
