import React, {FunctionComponent} from 'react';
import CommentItem from "./CommentItem";

const CommentList: FunctionComponent = () => {
    const comments = [
        {
            author: 'Kalle Melender',
            date: '12.5.2020 - 12:30',
            body: 'This is a comment'
        },
        {
            author: 'Bill Boe',
            date: '12.5.2020 - 12:30',
            body: 'This is a comment'
        },
        {
            author: 'John Doe',
            date: '12.5.2020 - 12:30',
            body: 'This is a comment'
        },
        {
            author: 'Don Joe',
            date: '12.5.2020 - 12:30',
            body: 'This is a comment'
        },
        {
            author: 'Roman Seveljov',
            date: '12.5.2020 - 12:30',
            body: 'Moi'
        },
    ];

    return (
        <>
            {comments.map(comment => (
                <CommentItem
                    key={comment.author}
                    author={comment.author}
                    date={comment.date}
                    body={comment.body}
                />
            ))}
        </>
    );
};

export default CommentList;