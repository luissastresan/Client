export default function Card({ redirectToCatalogMovie }) {
    return (
        <div className="box">
            <div className="card" onClick={redirectToCatalogMovie}>
                <div className="imgBx">
                    <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/06/series-netflix.jpg" alt="images" />
                </div>
                <div className="details">
                    <h2>Fly Movies</h2>
                </div>
            </div>
        
            <div className="card">
                <div className="imgBx">
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-training-education-light-effect-music-image_26572.jpg" alt="images" />
                </div>
                <div className="details">
                    <h2>Fly Music</h2>
                </div>
            </div>

            <div className="card">
                <div className="imgBx">
                    <img src="https://xombit.com/files/2012/10/libros.jpg" alt="images" />
                </div>
                <div className="details">
                    <h2>Fly Books</h2>
                </div>
            </div>
            <style jsx>{`
                body{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    min-height: 100vh;
                    background: #212121;
                    font-family: sans-serif;
                }
                .box{
                    width: 1200px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    grid-gap: 15px;
                    margin: 0 auto;
                    margin-top: 100px;
                }
                .card{
                    position: relative;
                    width: 300px;
                    height: 350px;
                    background: #fff;
                    margin: 0 auto;
                    border-radius: 4px;
                    box-shadow:0 2px 10px rgba(0,0,0,.2);
                    cursor: pointer;
                }
                .card:before,
                .card:after
                {
                    content:"";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    background: #fff;
                    transition: 0.5s;
                    z-index:-1;
                }
                .card:hover:before{
                transform: rotate(20deg);
                box-shadow: 0 2px 20px rgba(0,0,0,.2);
                }
                .card:hover:after{
                transform: rotate(10deg);
                box-shadow: 0 2px 20px rgba(0,0,0,.2);
                }
                .card .imgBx{
                position: absolute;
                top: 10px;
                left: 10px;
                bottom: 10px;
                right: 10px;
                background: #222;
                transition: 0.5s;
                z-index: 1;
                }
                
                .card:hover .imgBx
                {
                    bottom: 80px;
                }

                .card .imgBx img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .card .details{
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                    height: 60px;
                    text-align: center;
                }

                .card .details h2{
                margin: 0;
                padding: 0;
                font-weight: 600;
                font-size: 20px;
                color: #777;
                text-transform: uppercase;
                } 

                .card .details h2 span{
                font-weight: 500;
                font-size: 16px;
                color: #f38695;
                display: block;
                margin-top: 5px;
                } 
            `}</style>
 
        </div>
    )
}