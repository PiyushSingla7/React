const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-line shimmer-title"></div>
            <div className="shimmer-line shimmer-subtitle"></div>
            <div className="shimmer-line shimmer-subtitle"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
