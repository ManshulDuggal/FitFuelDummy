import styles from "./article.module.css";
const Articles = ({ news }) => {
    return (
        <div className="h-screen">
            <h1 className={styles.heading}>Trending Articles</h1>
            <div>
                {news.map((data) => (
                    <div>
                        <h1> artive</h1>
                        <h1> {data.source.name}</h1>
                        <h1> {data.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
