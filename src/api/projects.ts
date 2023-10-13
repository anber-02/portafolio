
import {type QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";


const DATABASE_ID = "ed2299e9bb5044b3959b42c705324292"

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN
})

export const getProjects = async () => {
  const query: QueryDatabaseParameters = {
    database_id: DATABASE_ID,
    filter: {
      property: 'Estado',
      multi_select: {
        contains: 'Done'
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
    const { results } = await notion.databases.query(query)
    const data = results.map((page: any) => {
      const { properties, cover } = page
      const { ID, Descripcion, Estado, URL, Lenguajes, Nombre } = properties

      return {
        id: ID[ID.type],
        descripcion: Descripcion[Descripcion.type],
        estado: Estado[Estado.type],
        github: URL[URL.type],
        lenguajes: Lenguajes[Lenguajes.type],
        nombre: Nombre[Nombre.type],
        image: page?.cover?.file?.url

      }
    })
    return data
  } catch (error: any) {
    console.log(error.message)
  }

}