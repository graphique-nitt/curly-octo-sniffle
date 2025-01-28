
import React from 'react';

import { getDatabase } from '../../../lib/notion';

const HomePage = async () => {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const posts = await getDatabase(databaseId);
  

    const sortedPosts = posts.sort((a, b) => {
        const priorityA = a.properties.Priority.number || 0;
        const priorityB = b.properties.Priority.number || 0;
        return priorityA - priorityB;
      });
    
      return (
        <div>
          <h1>My Notion Data</h1>
          <ul>
            {sortedPosts.map((post) => (
              <li key={post.id}>
                <h2>{post.properties.Name.title[0].plain_text}</h2>
                <p><strong>Priority:</strong> {post.properties.Priority.number || 'N/A'}</p>
                <img 
              src={post.properties.Photo.files[0]?.file?.url || ''} 
              style={{ width: '100px', height: '100px' }}
               />
              </li>
            ))}
          </ul>
        </div>
      );
  };
  
  export default HomePage