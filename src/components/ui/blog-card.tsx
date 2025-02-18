import { Card } from "./card";
import { Button } from "./button";
import { ArrowRight, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

export function BlogCard({
  title,
  description,
  image,
  date,
  readTime,
  slug,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <a href={`/blog/${slug}`}>
          <Button variant="outline" className="group">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </Card>
  );
}
