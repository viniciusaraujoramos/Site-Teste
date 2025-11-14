import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, User } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface BlogPageProps {
  posts: BlogPost[];
}

export function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-center text-primary mb-16">Blog AZOUS</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm mb-6 aspect-[4/3] bg-neutral/10">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            <div className="space-y-3">
              <span className="text-primary-light text-xs uppercase tracking-wider">{post.category}</span>
              <h3 className="group-hover:text-primary transition-colors duration-300">{post.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-foreground/50 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}