import React, { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

const postsData = [
  {
    id: 1,
    author: {
      name: "Shridhant",
      username: "shridhant",
      avatar: "https://i.waifu.pics/HNEg0-Q.png",
      timeAgo: "2h ago",
    },
    content:
      "Practiced Chopin's Nocturne in E-flat major for an hour today. Focusing on the left-hand arpeggios and overall dynamics.",
    engagement: {
      likes: 128,
      comments: 32,
      isLiked: false,
    },
    comments: [
      {
        id: 1,
        author: "Alice",
        avatar: "https://i.waifu.pics/HNEg0-Q.png",
        text: "Great work!",
        timeAgo: "1h ago",
      },
      {
        id: 2,
        author: "Bob",
        avatar: "https://i.waifu.pics/HNEg0-Q.png",
        text: "Can't wait to hear your progress!",
        timeAgo: "30m ago",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Alice",
      username: "alice",
      avatar: "https://i.waifu.pics/HNEg0-Q.png",
      timeAgo: "1h ago",
    },
    content:
      "Started learning a new piece today. It's challenging but exciting!",
    engagement: {
      likes: 72,
      comments: 14,
      isLiked: false,
    },
    comments: [],
  },
];

export default function Journal() {
  const [posts, setPosts] = useState(postsData);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const toggleLike = (postId: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              engagement: {
                ...post.engagement,
                isLiked: !post.engagement.isLiked,
              },
            }
          : post
      )
    );
  };

  const toggleComments = (postId: number) => {
    setExpandedPost((prev) => (prev === postId ? null : postId));
  };

  const addComment = (postId: number, text: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  author: "You",
                  avatar: "https://i.waifu.pics/HNEg0-Q.png",
                  text,
                  timeAgo: "Just now",
                },
              ],
            }
          : post
      )
    );
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-violet-300 rounded-lg shadow p-4 space-y-4"
        >
          {/* Post Header */}
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                @{post.author.username} • {post.author.timeAgo}
              </p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-gray-700">{post.content}</p>

          {/* Engagement Buttons */}
          <div className="flex space-x-4 text-gray-600">
            <button
              className={`flex items-center ${
                post.engagement.isLiked ? "text-red-500" : "hover:text-red-500"
              }`}
              onClick={() => toggleLike(post.id)}
            >
              <Heart className="h-5 w-5 mr-1" />
              {post.engagement.likes + (post.engagement.isLiked ? 1 : 0)}
            </button>
            <button
              className="flex items-center hover:text-blue-500"
              onClick={() => toggleComments(post.id)}
            >
              <MessageCircle className="h-5 w-5 mr-1" />
              {post.engagement.comments}
            </button>
          </div>

          {/* Comments Section with Animation */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedPost === post.id
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {expandedPost === post.id && (
              <div className="mt-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.target as HTMLFormElement;
                    const text = input.comment.value.trim();
                    if (text) {
                      addComment(post.id, text);
                      input.reset();
                    }
                  }}
                  className="flex items-center space-x-2"
                >
                  <textarea
                    name="comment"
                    placeholder="Add a comment..."
                    className="flex-grow p-2 border border-gray-300 rounded resize-none"
                    rows={1}
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>

                {/* Render Comments */}
                <div className="mt-4 space-y-2">
                  {post.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex items-start space-x-2"
                    >
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{comment.author}</p>
                        <p className="text-sm text-gray-600">{comment.text}</p>
                        <p className="text-xs text-gray-500">
                          {comment.timeAgo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
