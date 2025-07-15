import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blogs{
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": null;
    }
}


export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token missing. Please login.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBlogs(response.data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { loading, blogs, error };
};


export interface Blog {
  "content": string;
  "title": string;
  "id": number;
  "author":{
    "name": string 
  }
}


export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | undefined>();
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      const rawToken = localStorage.getItem("token");
      let jwt = "";

      try {
        jwt = rawToken?.startsWith("{")
          ? JSON.parse(rawToken)?.jwt
          : rawToken || "";
      } catch (e) {
        console.error("Failed to parse token:", e);
        setLoading(false);
        return;
      }

      if (!jwt) {
        console.warn("Token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/blog/${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (isMounted) {
          setBlog(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        if (isMounted) {
          setError("Failed to fetch blog");
          setLoading(false);
        }
      }
    };

    fetchBlog();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { loading, blog, error };
};
