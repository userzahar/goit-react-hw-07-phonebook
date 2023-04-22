import { InputStyled } from "components/Form/StyledInput";
import { LabelStyled } from "./FilterStyled";

import { useDispatch } from "react-redux";
import { filterContacts } from "redux/filter/filterSlice";

export function Filter() {
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "filter") {
      dispatch(filterContacts(value))
    }
  }
        return <>
            <LabelStyled htmlFor="filter">Find Contacts By Name </LabelStyled>
            <InputStyled type="text" id="filter" name="filter" onChange={handleChange} />
        </>
}


