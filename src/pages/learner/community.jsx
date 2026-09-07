import { useState } from "react";
import {
  MessageCircle,
  Heart,
  Users,
  Send,
  TrendingUp,
  Clock,
  ShieldCheck,
  Sparkles,
  Home,
  BookOpen,
  Compass,
  FileText,
  Award,
  Trophy,
  Calendar,
  Search,
  Bell,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

export default function Community() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "BrainYolivia",
      role: "Learner",
      time: "2 hours ago",
      content:
        "What's the best way to stay consistent with learning?",
      likes: 34,
      replies: 120,
      liked: false,
      tags: ["LearningHabits", "Motivation", "TimeManagement"],
    },
    {
      id: 2,
      name: "Katie02",
      role: "Learner",
      time: "4 hours ago",
      content:
        "How I landed a freelance gig after completing the Business Strategy course...",
      likes: 28,
      replies: 43,
      liked: false,
      tags: ["CareerJourney", "Freelancing", "BusinessCourse"],
    },
    {
      id: 3,
      name: "Sarah_M",
      role: "Learner",
      time: "6 hours ago",
      content:
        "Just finished my first UI/UX project! Here's what I learned about designing for impact.",
      likes: 52,
      replies: 67,
      liked: false,
      tags: ["Design", "UIUX", "Portfolio"],
    },
  ]);

  const trendingHashtags = [
    "LearningStreak",
    "DesignInspo",
    "ChallengeAccepted",
    "StudySetup",
    "WomenTech",
    "CareerSwitch",
    "DailyWin",
    "MyFirstCourse",
  ];

  const peopleToFollow = [
    { name: "Uchiha_Obito", role: "UX Enthusiast" },
    { name: "Karina01", role: "Developer" },
    { name: "JaneDoe", role: "Data Scientist" },
    { name: "AlexSmith", role: "Product Designer" },
  ];

  const peerGroups = [
    {
      name: "Business & Leadership Learners",
      description: "For future entrepreneurs, marketers, and business strategists.",
      members: "4.2k",
    },
    {
      name: "Design & Creative Circle",
      description: "A space for UI/UX designers, illustrators, and visual storytellers.",
      members: "3.5k",
    },
  ];

  function handleCreatePost(event) {
    event.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      name: "You",
      role: "Learner",
      time: "Just now",
      content: newPost.trim(),
      likes: 0,
      replies: 0,
      liked: false,
      tags: [],
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* User Profile Bar - Top */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              BR
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Budiarti R.</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Available for work</span>
                <span className="text-xs text-gray-400">Follow</span>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-400">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900">8</p>
              <p className="text-xs text-gray-400">Certificates</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900">156</p>
              <p className="text-xs text-gray-400">Following</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Center - Feed (spans 2 columns) */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  Y
                </div>
                <form onSubmit={handleCreatePost} className="flex-1">
                  <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your learning journey..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      type="submit"
                      disabled={!newPost.trim()}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                    >
                      <Send className="inline w-4 h-4 mr-2" />
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Trending Discussions */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Trending Discussions</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">See all →</button>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {post.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{post.name}</h3>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{post.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span className="bg-gray-100 px-2 py-0.5 rounded-full">Learner</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mt-3 leading-relaxed">{post.content}</p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full hover:bg-indigo-100 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-6 mt-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`inline-flex items-center gap-2 text-sm font-medium transition ${
                        post.liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart className="w-4 h-4" fill={post.liked ? "currentColor" : "none"} />
                      {post.likes}
                    </button>
                    <button className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition font-medium">
                      <MessageCircle className="w-4 h-4" />
                      {post.replies} replies
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Live Session Card */}
            <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Session This Friday</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2">"Designing for Impact"</h3>
                  <p className="text-indigo-100 mt-1 text-sm">May 24 • 6 PM (GMT)</p>
                  <p className="text-indigo-50 mt-2 text-sm max-w-md">
                    Join our expert-led live workshop on creating meaningful user experiences.
                  </p>
                  <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    Save Your Seat →
                  </button>
                </div>
                <div className="hidden sm:block">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-12 h-12 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Trending Hashtags */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Trending Hashtags</h3>
              <div className="flex flex-wrap gap-2">
                {trendingHashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full hover:bg-indigo-100 cursor-pointer transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Peer Groups */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Peer Groups</h3>
              <div className="space-y-4">
                {peerGroups.map((group) => (
                  <div key={group.name} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <h4 className="font-semibold text-sm text-gray-800">{group.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{group.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">{group.members} members</span>
                      <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                        Join Group +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* People to Follow */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-3">People to Follow</h3>
              <div className="space-y-3">
                {peopleToFollow.map((person) => (
                  <div key={person.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{person.name}</p>
                        <p className="text-xs text-gray-400">{person.role}</p>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                      + Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}