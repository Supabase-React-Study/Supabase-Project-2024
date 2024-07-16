import React, { useState, useEffect } from 'react';
import supabase from './utils/supabase';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Example: Fetch data from 'posts' table
      let { data: posts, error } = await supabase.from('posts').select('*');
      if (error) console.log('Error fetching posts:', error);
      else setData(posts);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
