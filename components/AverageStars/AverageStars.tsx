export default function AverageStars({ ratings }) {
    const avarage = ratings.reduce((accumulator, current) => accumulator + current.rating, 0)/ratings.length

    const styleDivRating = {
        marginTop: "10px"
    }

    const styleClipStar = {
        background: "gold",
        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        display: "inline-block",
        height: "40px",
        width: "40px"
    }

    if (avarage >= 0 && avarage < 1) {
        return (
            <div style={styleDivRating}>
                <div style={styleClipStar}></div>
            </div>
        )
    } else if (avarage >= 1 && avarage < 2) {
        return (
            <div style={styleDivRating}>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
            </div>
        )
        
    } else if (avarage >= 2 && avarage < 3) {
        return (
            <div style={styleDivRating}>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
            </div>
        )
    } else if (avarage >= 3 && avarage < 4) {
        return (
            <div style={styleDivRating}>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
            </div>
        )
    } else if (avarage >= 4 && avarage <= 5) {
        return (
            <div style={styleDivRating}>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
                <div style={styleClipStar}></div>
            </div>
        )
    } else {
        return (
            <div style={styleDivRating}>
                <div style={styleClipStar}></div>
            </div>
        )
    }
    
}