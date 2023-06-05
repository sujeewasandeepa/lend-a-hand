export default function Ad (props) {

    const title = props.title;
    const author = props.author;
    const description = props.description;
    const price = props.price;

    return (
    <>
        <div className="has-text-left ml-5 mb-5">
            <h1>{title}</h1>
            <h2>By {author}</h2>
            <p>{description}</p>
            <div>Payment: {price} LKR</div>
        </div>
    </>
    )
}
