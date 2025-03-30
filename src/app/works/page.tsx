import Hamburger from "../components/hamburger";
import Header from "../components/header";
import Deliverable from "../components/deliverable";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import { getAllmd } from "@/lib/getAllmd";


export default async function works() {

  const data = await getAllmd();

  return (
    <div>
      <div>
        <Header color="bg-[#FA904F]" text="Works"/>
        <Hamburger/>
      </div>
      
      <Deliverable data={data}></Deliverable>
    </div> 
  );
}
