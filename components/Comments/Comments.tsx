import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import QUERY_ALLDATAMOVIES from '../../queries/AllDataMovies.graphql';

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const ADD_COMMENT = gql`
  mutation createComment($comment: String! $movie: String!) {
    createComment(comment: $comment movie: $movie) {
        comment
    }
  }
`;

export default function Comments({ id, comments }) {
    const [comment, setCommment] = useState("")

    const [createComment] = useMutation(ADD_COMMENT, {
        refetchQueries: [{ query: QUERY_ALLDATAMOVIES}],
        awaitRefetchQueries: true
    });

    const onChangeInput = (e) => {
        let value = e.target.value
        setCommment(value)
    }

    const submitComment = () => {
        createComment({ variables: { comment: comment, movie: id } });
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body text-center">
                        <h4 className="card-title">Ultimos Comentarios</h4>
                    </div>
                    <div className="comment-widgets">
                        {
                            comments.map(comment => (
                                <div key={comment._id} className="d-flex flex-row comment-row m-t-0">
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">User</h6> <span className="m-b-15 d-block">{comment.comment}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Deja tu comentario"
                            aria-describedby="basic-addon2"
                            onChange={onChangeInput}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={submitComment}>Enviar</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
            <style jsx>{`
                .row {
                        width: 70%;
                    }
                .card {
                    position: relative;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    min-width: 0;
                    word-wrap: break-word;
                    background-color: #fff;
                    background-clip: border-box;
                    border: 0px solid transparent;
                    border-radius: 0px
                }
                .card-body {
                    -webkit-box-flex: 1;
                    -ms-flex: 1 1 auto;
                    flex: 1 1 auto;
                    padding: 1.25rem
                }

                .card .card-title {
                    position: relative;
                    font-weight: 600;
                    margin-bottom: 10px
                }

                .comment-widgets {
                    position: relative;
                    height: 350px;
                    overflow: auto;
                }
                .comment-widgets .comment-row {
                    border-bottom: 1px solid transparent;
                    padding: 14px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    margin: 10px 0
                }

                .p-2 {
                    padding: 0.5rem !important
                }

                .comment-text {
                    padding-left: 15px
                }

                .w-100 {
                    width: 100% !important
                }

                .m-b-15 {
                    margin-bottom: 15px
                }
                .comment-widgets .comment-row:hover {
                    background: rgba(0, 0, 0, 0.05)
                }
            `}</style>
        </div>
    )
}