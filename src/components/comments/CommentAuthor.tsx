import React, {FunctionComponent} from 'react';
import { Toast } from 'react-bootstrap';
import styled from 'styled-components'
import CommentActionsMenu from "./CommentActionsMenu";

type AuthorProps = {
    authorName: string,
    createdAt: string
}

const Avatar = styled.img`
    max-width: 32px;
    height: auto;
`;

const CommentAuthor: FunctionComponent<AuthorProps> = ({authorName, createdAt}) => {
    return (
        <Toast.Header
            closeButton={false}
        >
            <Avatar src={`https://avatars.dicebear.com/v2/initials/${authorName}.svg`} className="rounded mr-2" alt="" />
            <strong className="mr-auto">{authorName}</strong>
            <small>{createdAt}</small>
            <CommentActionsMenu/>
        </Toast.Header>
    );
};

export default CommentAuthor;