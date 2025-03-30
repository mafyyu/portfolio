import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

export async function getAllmd() {
  const markdownDir = path.join(process.cwd(),"public/work");
  const files = fs.readdirSync(markdownDir);
  const works = files.map((file) => {
    const filePath = path.join(markdownDir, file);
    const mdcontent = fs.readFileSync(filePath, "utf-8");
    const { content,data } = matter(mdcontent);
    return { 
      data,content
    };
  })
  return works
}