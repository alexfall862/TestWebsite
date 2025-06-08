import React, { useEffect, useState } from "react";

const Table: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apitest-production-c7d5.up.railway.app/test");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();

        // Ensure data is always an array
        const normalizedData = Array.isArray(json) ? json : [json];
        setData(normalizedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No data available.</p>;

  // Dynamically get all unique column names from the data
  const columns = Array.from(
    new Set(data.flatMap((item) => Object.keys(item)))
  );

  return (
    <div>
      <h2>Dynamic API Table</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col}>
                  {typeof item[col] === "object" && item[col] !== null
                    ? JSON.stringify(item[col])
                    : item[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;