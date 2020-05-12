import React, {FunctionComponent} from 'react';
import CommentAuthor from "./CommentAuthor";
import {Toast} from "react-bootstrap";
import styled from "styled-components";

const CommentToast = styled(Toast)`
    overflow: visible;
`;

type CommentProps = {
    author: string,
    date: string,
    body: string
}

const CommentItem: FunctionComponent<CommentProps> = ({author, date, body}) => {
    return (
        <CommentToast>
            <CommentAuthor
                authorName={author}
                createdAt={date}
            />
            <Toast.Body>{body}</Toast.Body>
        </CommentToast>
    );
};

export default CommentItem;