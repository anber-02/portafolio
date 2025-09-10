import {
  type PageObjectResponse,
  type QueryDatabaseParameters,
  type QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import NodeCache from "node-cache";

const DATABASE_ID = "ed2299e9bb5044b3959b42c705324292";

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

const cache = new NodeCache({ stdTTL: 60 * 60 });

type Project = {
  description: string;
  languages: { name: string; color: string }[];
  name: string;
  image: string;
  github: string;
  preview: string;
};

export const getProjects = async (): Promise<Project[]> => {
  console.log("asdas");
  const cacheData = cache.get("projects") as Project[];
  if (cacheData) {
    return cacheData;
  }
  console.log("llamadas a la api");

  const query: QueryDatabaseParameters = {
    database_id: DATABASE_ID,
    filter: {
      property: "status",
      status: {
        equals: "Done",
      },
    },
    sorts: [
      {
        property: "ID",
        direction: "ascending",
      },
    ],
  };

  try {
    const { results }: QueryDatabaseResponse = await notion.databases.query(
      query
    );

    const data = results.map((page: any) => {
      const { properties, cover } = page;
      const { description, languages, name, github, preview } = properties;

      return {
        description: description
          ? description.rich_text.map((e: any) => e.text.content).join("")
          : "",
        languages: languages.multi_select,
        name: name.title.map((e: any) => e.text.content)[0],
        image: cover.file.url,
        github: github.url,
        preview: preview.url,
      };
    });
    cache.set("projects", data);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
