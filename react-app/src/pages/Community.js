// src/pages/Community.js

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const initialPosts = [
  { id: 2, author: 'Anjali S.', avatar: '👩‍🌾', time: '5 hours ago', content: 'Urgent: One of my cows is showing early signs of FMD. What are the immediate isolation steps I should take before the vet arrives?', upvotes: 28, replies: 9 },
  { id: 1, author: 'R. Kumar', avatar: '👨‍🌾', time: '2 hours ago', content: 'Has anyone tried the new organic fertilizer for rice paddies? Seeing good results but wondering about long-term effects.', upvotes: 12, replies: 3 }
];

const Community = () => {
  const { t } = useTranslation();
  const location = useLocation(); // Hook to get navigation state

  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false);
  
  // This effect runs when the page loads to check for incoming data
  useEffect(() => {
    if (location.state?.diagnosis) {
      const prefilledText = `My animal received a preliminary diagnosis of "${location.state.diagnosis}". Has anyone in the community dealt with this before? Any advice would be appreciated.`;
      setNewPostContent(prefilledText);
      setIsModalOpen(true);
    }
  }, [location.state]);


  const handleUpvote = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
    ));
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPostContent.trim() === '') return;

    const newPost = {
      id: new Date().getTime(),
      author: 'You',
      avatar: '🧑‍🌾',
      time: 'Just now',
      content: newPostContent,
      upvotes: 0,
      replies: 0,
    };

    setPosts([newPost, ...posts]);
    setIsModalOpen(false);
    setNewPostContent('');
  };

  const CreatePostModal = () => (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Post</h2>
          <button onClick={() => setIsModalOpen(false)} className="modal-close-btn">×</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmitPost}>
            <textarea className="form-input" rows="5" placeholder="Ask a question or share your knowledge..." value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
            <br />
            <button type="submit" className="btn btn-primary" style={{marginTop: '1rem'}}>Post to Community</button>
          </form>
        </div>
      </div>
    </div>
  );

  const LearnMoreModal = () => (
    <div className="modal-overlay" onClick={() => setIsLearnMoreModalOpen(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2>Building a Strong Community</h2>
                <button onClick={() => setIsLearnMoreModalOpen(false)} className="modal-close-btn">×</button>
            </div>
            <div className="modal-body">
                <p>This community forum is a place for farmers to connect, share experiences, and help one another with challenges related to biosecurity and farm management.</p>
                <strong>Key features include:</strong>
                <ul className="alert-list">
                    <li>Asking questions to experienced farmers.</li>
                    <li>Sharing successful techniques and tips.</li>
                    <li>Getting help during emergencies like disease outbreaks.</li>
                </ul>
            </div>
        </div>
    </div>
  );

  return (
    <section>
      <h1>{t('community')}</h1>
      <p>{t('communityWelcome')}</p>

      <div className="community-layout">
        <main className="community-feed">
          <div className="button-group">
             <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Create New Post</button>
          </div>
          
          {posts.map(post => (
            <div className="post-card" key={post.id}>
              <div className="post-header">
                <span className="post-avatar">{post.avatar}</span>
                <div>
                  <div className="post-author">{post.author}</div>
                  <small style={{color: 'var(--soil-grey)'}}>{post.time}</small>
                </div>
              </div>
              <div className="post-body"><p>{post.content}</p></div>
              <div className="post-actions">
                <button className="btn btn-secondary" onClick={() => handleUpvote(post.id)}>👍 Upvote ({post.upvotes})</button>
                <button className="btn btn-secondary" onClick={() => alert('Reply feature coming soon!')}>💬 Reply ({post.replies})</button>
              </div>
            </div>
          ))}
        </main>

        <aside className="community-sidebar">
          <div className="card">
            <h3>Top Contributors</h3>
            <ul className="alert-list">
                <li>🥇 Anjali S.</li>
                <li>🥈 R. Kumar</li>
                <li>🥉 S. Priya</li>
            </ul>
            <br/>
            <button className="btn btn-secondary" onClick={() => setIsLearnMoreModalOpen(true)}>{t('learnMore')}</button>
          </div>
        </aside>
      </div>
      
      {isModalOpen && <CreatePostModal />}
      {isLearnMoreModalOpen && <LearnMoreModal />}
    </section>
  );
};

export default Community;