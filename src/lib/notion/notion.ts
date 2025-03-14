const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async(databaseId:string|undefined)=>{
    const response = await notion.databases.query({
        database_id :databaseId,
    });
    return response.results;
};