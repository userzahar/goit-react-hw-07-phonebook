import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";
import { useDispatch, useSelector } from "react-redux";
// import { deleteContact } from "redux/contacts/contactSlice";
import { useEffect } from "react";
import { deleteContactsThunk, getContactsThunk } from "redux/contacts/thunk";

export function ContactList() {
    const dispatch = useDispatch();
    const { filter } = useSelector(state => {
            return state.filter
    });
    // console.log("💤",useEffect(() => {
        // dispatch(getContactsThunk)
    // }, [dispatch]))
    // console.log(dispatch(deleteContactsThunk('contacts/delete', 3)))
    const { items,isLoading,error } = useSelector(state => state.contacts.contacts);
    console.log("🚀 ~ items:", items, isLoading, error)

    
    useEffect(() => {
        console.log("🚀 ~ :", dispatch(getContactsThunk()))
    }, [dispatch])
    
    const filteredContacts = () => {
        if (!filter.length) {
            return items;
        }
        return items.filter(({ name }) => {
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
  }
    
    const handleDelete = (id) => {
                 dispatch(deleteContactsThunk(id))
             }
        return <ListStyled>
            {filteredContacts()?.map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>handleDelete(contact.id)}/>
                </LI>)
                )}
            </ListStyled>
}
