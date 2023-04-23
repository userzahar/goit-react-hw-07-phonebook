import { ItemStyled } from "./ListItemStyled";
import PropTypes from "prop-types";
export function LI({ contact, children}) {
    const { name, phone } = contact;
    return <ItemStyled>
        <p>{name}</p>
        <span>:</span>
        <p>{phone}</p>
        {children}
    </ItemStyled>
}

LI.propTypes = {
  contact: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
};

