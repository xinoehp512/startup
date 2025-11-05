import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

export function Profile({ userName }) {
    const [comic, setComic] = React.useState("NULL");
    const [comicNum, setComicNum] = React.useState(3164);
    React.useEffect(() => {
        getComic(comicNum);
    }, [comicNum]);
    function getComic(num) {
        let url = "https://xkcd.vercel.app/?comic=" + num;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setComic(data);
            });
    }
    function handlePrevious() {
        setComicNum((prev) => Math.max(prev - 1, 1));
    }
    return (
        <main className='profile'>
            <div className="profile-card">
                <div className="profile-img"><img src="favicon.png" /></div>
                <div className="profile-name">{userName}</div>
            </div>
            <div>
                <h1>{comic.title}</h1>
                <button onClick={() => setComicNum((prev) => Math.max(prev - 1, 1))}>Prev</button>
                <button onClick={() => setComicNum((prev) => prev + 1)}>Next</button>
                <p>
                    Comic #{comicNum} - {comic.day}/{comic.month}/{comic.year}
                </p>
                <div>
                    <img src={comic.img} alt={comic.alt} title={comic.alt} />
                </div>
            </div>
        </main>
    );
}