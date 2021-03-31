import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const ADD_RATING = gql`
  mutation createRating($rating: Int! $movie: String!) {
    createRating(rating: $rating movie: $movie) {
        rating
    }
  }
`;

export default function StarRating({count, value, inactiveColor, size, activeColor, onChange, id}) {

    const [createRating] = useMutation(ADD_RATING);

    const stars = Array.from({length: count}, () => '★')

    // Internal handle change function
    const handleChange = (value) => {
        onChange(value + 1);
        createRating({ variables: { rating: value, movie: id } });
    }

    return (
        <div>
            {stars.map((s, index) => {
                let style = inactiveColor;
                if (index < value) {
                style=activeColor;
                }
                return (
                <span className={"star"}  
                    key={index}
                    style={{color: style, width:size, height:size, fontSize: size}}
                    onClick={()=>handleChange(index)}>{s}</span>
                )
            })}
            {value}
            <style jsx>{`
                .star {
                    display: inline-block;  
                    cursor: pointer;
                }

                .inactive, .active {
                    background: transparent;
                    user-select: none;
                }

                .inactive {
                    color: #f1f1e8;
                }

                .active {
                    color: 'gold';
                }
            `}</style>
        </div>
    )

}