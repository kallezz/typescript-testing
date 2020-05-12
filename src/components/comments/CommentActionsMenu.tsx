import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {ListGroup} from "react-bootstrap";

const List = styled(ListGroup)`
    position: absolute;
    top: 0;
    left: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
    :hover {
        color: #1a6dca;
        cursor: pointer;
    }
`;

const CommentActionsMenu = () => {
    let [toggle, setToggle] = useState<boolean>(false);

    const toggleMenu = () => {
        setToggle(!toggle)
    };

    return (
        <>
            <Icon
                icon={faPencilAlt}
                className="ml-3"
                onClick={toggleMenu}
            />
            {toggle &&
            <List onMouseLeave={toggleMenu}>
                <List.Item action>
                    Muokkaa
                </List.Item>
                <List.Item action>
                    Poista
                </List.Item>
            </List>
            }
        </>
    );
};

export default CommentActionsMenu;