import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id} `}>
      <div className="w-full justify-center mb-4">
        <img
          src={service.getfilePreview(featuredImage)}
          className="rounded-xl"
          alt={title}
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  );
}

export default PostCard;
