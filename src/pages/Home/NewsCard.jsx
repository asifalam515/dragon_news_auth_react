import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, details, image_url, thumbnail_url, _id } = news;
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl mb-16 border-b-2">
        <figure>
          <img src={thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read More ..
              </Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
