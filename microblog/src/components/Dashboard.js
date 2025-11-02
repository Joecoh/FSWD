import React, { useState } from 'react';
import UserCard from './UserCard';
import PostCard from './PostCard';

const Dashboard = () => {
  // Static data for users and posts
  const [users] = useState([
    { id: 1, name: 'John Doe', bio: 'Frontend Developer' },
    { id: 2, name: 'Jane Smith', bio: 'Backend Developer' },
    { id: 3, name: 'Jons Hawk', bio: 'UI Designer' },
  ]);

  const [posts] = useState([
    { id: 1, title: 'My First Post', content: 'Hello, world!', author: 'John Doe' },
    { id: 2, title: 'Exciting News', content: 'Just launched my new website!', author: 'Jane Smith' },
    { id: 3, title: 'Design Update', content: 'Working on a new UI for our app!', author: 'Jons Hawk' },
  ]);

  const [following, setFollowing] = useState([]);

  const handleFollowToggle = (userId, isFollowing) => {
    if (isFollowing) {
      setFollowing([...following, userId]);
    } else {
      setFollowing(following.filter((id) => id !== userId));
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <h3>Users</h3>
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onFollowToggle={handleFollowToggle}
          />
        ))}
      </div>

      <h3>Posts</h3>
      <div className="post-list">
        {posts
          .filter((post) =>
            following.includes(users.find((u) => u.name === post.author)?.id)
          )
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

        {following.length === 0 && (
          <p style={{ color: 'gray' }}>Follow a user to see their posts here.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
