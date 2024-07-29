
import { type QueryDatabaseParameters, type QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import type { Page, Project } from "../types/types";


const DATABASE_ID = "ed2299e9bb5044b3959b42c705324292"

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN
})

export const getProjects = async () => {
  const query: QueryDatabaseParameters = {
    database_id: DATABASE_ID,
    filter: {
      property: 'Estado',
      select: {
        equals: 'Done'
      }
    },
    sorts: [
      {
        property: 'ID',
        direction: 'ascending',
      },
    ],
  }

  try {
    const { results }: QueryDatabaseResponse = await notion.databases.query(query)
    const projects: Page[] = results as Page[]

    const data: Project[] = projects.map((result) => {
      const { properties, cover } = result
      const { Descripcion, Lenguajes, Nombre, Github, Preview } = properties

      return {
        description: Descripcion ? Descripcion.rich_text.map(e => e.text.content).join('') : '',
        languages: Lenguajes.multi_select,
        name: Nombre.title.map(e => (e.text.content))[0],
        image: cover.file.url,
        github: Github.url,
        preview: Preview.url
      }
    })
    return data
  } catch (error: any) {
    console.log(error.message)
  }

}