import "./section.scss";

export default function Section() {
    return (
        <div className="featured">
            <img className="background-image" src="./background.png" alt="Background" />
            <div className="overlay">
                <h1>The Best Movie Library,<br />Anytime Anywhere.</h1>
                <p>
                    The search is over! Let Cageflix help you find perfect Nicolas Cage  movies for free. 
                </p>
                <strong>Unlimited movies, TV Episodes, and more.</strong>
            </div>
        </div>
    );
}

