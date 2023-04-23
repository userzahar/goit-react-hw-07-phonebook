// import { deleteContact } from "redux/contacts/contactSlice";
import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteContactsThunk, getContactsThunk } from "redux/contacts/thunk";

export function ContactList() {
    const { filter } = useSelector(state => {
        return state.filter
    });
    const { items, isLoading, error } = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
    
    const filteredContacts = () => {
        if (!filter.length) {
            return items;
        }
        return items.filter(({ name }) => {
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
  }
    
    const handleDelete = async (id) => {
        const data = await dispatch(deleteContactsThunk(id))
        dispatch(getContactsThunk())
             }
    return <>
        {isLoading && <h2>IS LOADING....</h2>}
        {!error && items.length!==0 && <ListStyled>
            {filteredContacts()?.map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>handleDelete(contact.id)}/>
                </LI>)
                )}
        </ListStyled>}
            {error && <h3>Error code:404</h3> }</>
}
