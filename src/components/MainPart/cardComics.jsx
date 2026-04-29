function CardComics({
    thumb,
    title = 'Titolo'
}) {
    return (
        <div >
            <img src={thumb} alt={title} />
            <span>{title.toUpperCase()}</span>
        </div>
    );
}

export default CardComics;