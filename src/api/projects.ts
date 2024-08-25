
import { type PageObjectResponse, type QueryDatabaseParameters, type QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";


const DATABASE_ID = "ed2299e9bb5044b3959b42c705324292"

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN
})

export const getProjects = async () => {
  const query: QueryDatabaseParameters = {
    database_id: DATABASE_ID,
    filter: {
      property: 'status',
      status: {
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

    const data = results.map((page: any) => {
      const { properties, cover } = page
      const { description, languages, name, github, preview } = properties

      return {
        description: description ? description.rich_text.map((e: any) => e.text.content).join('') : '',
        languages: languages.multi_select,
        name: name.title.map((e: any) => (e.text.content))[0],
        image: cover.file.url,
        github: github.url,
        preview: preview.url
      }
    })
    return data
  } catch (error: any) {
    console.log(error.message)
  }
}