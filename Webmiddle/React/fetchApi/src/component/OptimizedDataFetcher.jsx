import useFetch from "../hooks/useFetch";

const OptimizedDataFetcher = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <div className="p-4 text-blue-500">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-2">
        {data.map((item) => (
          <li
            key={item.id}
            className="p-3 border rounded shadow-sm hover:bg-gray-50"
          >
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizedDataFetcher;