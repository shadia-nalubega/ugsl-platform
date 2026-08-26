import { useState } from "react";
import {
  MessageCircle,
  Heart,
  Users,
  Send,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

export default function Community() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Sarah",
      role: "Learner",
      time: "10 minutes ago",
      content:
        "I finally learned the signs for Hello and Good morning today!",
      likes: 12,
      replies: 4,
      liked: false,
    },
    {
      id: 2,
      name: "John",
      role: "Learner",
      time: "35 minutes ago",
      content:
        "Does anyone have tips for remembering new UgSL signs more easily?",
      likes: 8,
      replies: 6,
      liked: false,
    },
    {
      id: 3,
      name: "Grace",
      role: "Learner",
      time: "1 hour ago",
      content:
        "Nice to meet everyone here! I am currently working through the Beginner lessons.",
      likes: 15,
      replies: 3,
      liked: false,
    },
  ]);

  const popularTopics = [
    {
      title: "Beginner UgSL Tips",
      replies: 24,
    },
    {
      title: "How do you practice signing?",
      replies: 18,
    },
    {
      title: "UgSL signs for everyday conversations",
      replies: 15,
    },
    {
      title: "Introduce yourself in UgSL",
      replies: 11,
    },
  ];

  function handleCreatePost(event) {
    event.preventDefault();

    if (!newPost.trim()) {
      return;
    }

    const post = {
      id: Date.now(),
      name: "You",
      role: "Learner",
      time: "Just now",
      content: newPost.trim(),
      likes: 0,
      replies: 0,
      liked: false,
    };

    setPosts((currentPosts) => [post, ...currentPosts]);
    setNewPost("");
  }

  function handleLike(postId) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Users
                size={25}
                className="text-purple-600"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                UgSL Community
              </h1>

              <p className="text-gray-500 mt-1">
                Learn, share, ask questions, and connect with other learners.
              </p>
            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* COMMUNITY STATS */}
        {/* ========================= */}

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                <Users
                  size={22}
                  className="text-purple-600"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Community Members
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  128
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <MessageCircle
                  size={22}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Discussions
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  46
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingUp
                  size={22}
                  className="text-green-600"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Active Today
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  32
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* MAIN CONTENT */}
        {/* ========================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-6">

          {/* ========================= */}
          {/* LEFT COLUMN */}
          {/* ========================= */}

          <section>

            {/* CREATE POST */}

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-6">

              <h2 className="text-lg font-bold text-gray-900">
                Start a Discussion
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Share something with the UgSL community.
              </p>

              <form
                onSubmit={handleCreatePost}
                className="mt-4"
              >

                <textarea
                  value={newPost}
                  onChange={(event) =>
                    setNewPost(event.target.value)
                  }
                  rows={4}
                  placeholder="What would you like to share?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                />

                <div className="flex justify-end mt-3">

                  <button
                    type="submit"
                    disabled={!newPost.trim()}
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                  >
                    <Send size={16} />
                    Post
                  </button>

                </div>

              </form>

            </div>

            {/* DISCUSSIONS */}

            <div className="flex items-center justify-between mb-4">

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Discussions
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  See what other learners are talking about.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              {posts.map((post) => (

                <article
                  key={post.id}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
                >

                  {/* USER */}

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-700 font-bold">
                        {post.name.charAt(0)}
                      </span>
                    </div>

                    <div>

                      <div className="flex items-center gap-2">

                        <h3 className="font-semibold text-gray-900">
                          {post.name}
                        </h3>

                        <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full">
                          {post.role}
                        </span>

                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <Clock size={12} />
                        {post.time}
                      </div>

                    </div>

                  </div>

                  {/* POST CONTENT */}

                  <p className="text-gray-700 leading-relaxed mt-4">
                    {post.content}
                  </p>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-5 mt-5 pt-4 border-t border-gray-100">

                    <button
                      onClick={() => handleLike(post.id)}
                      className={`inline-flex items-center gap-2 text-sm transition ${
                        post.liked
                          ? "text-purple-600"
                          : "text-gray-500 hover:text-purple-600"
                      }`}
                    >
                      <Heart
                        size={17}
                        fill={post.liked ? "currentColor" : "none"}
                      />

                      {post.likes}
                    </button>

                    <button className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition">
                      <MessageCircle size={17} />
                      {post.replies} Replies
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>

          {/* ========================= */}
          {/* RIGHT COLUMN */}
          {/* ========================= */}

          <aside className="space-y-6">

            {/* POPULAR TOPICS */}

            <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">

              <div className="flex items-center gap-2 mb-5">

                <TrendingUp
                  size={20}
                  className="text-purple-600"
                />

                <h2 className="text-lg font-bold text-gray-900">
                  Popular Discussions
                </h2>

              </div>

              <div className="space-y-4">

                {popularTopics.map((topic) => (

                  <button
                    key={topic.title}
                    className="w-full text-left group"
                  >

                    <p className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition">
                      {topic.title}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {topic.replies} replies
                    </p>

                  </button>

                ))}

              </div>

            </section>

            {/* COMMUNITY GUIDELINES */}

            <section className="bg-purple-50 border border-purple-100 rounded-2xl p-6">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={20}
                  className="text-purple-600"
                />

                <h2 className="text-lg font-bold text-gray-900">
                  Community Guidelines
                </h2>

              </div>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">

                <li>
                  • Be respectful and supportive.
                </li>

                <li>
                  • Help other learners when you can.
                </li>

                <li>
                  • Keep discussions related to learning.
                </li>

                <li>
                  • Do not share harmful or inappropriate content.
                </li>

              </ul>

            </section>

          </aside>

        </div>

      </main>
    </>
  );
}