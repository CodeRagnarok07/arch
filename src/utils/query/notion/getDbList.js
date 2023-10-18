const { Client } = require("@notionhq/client")

// Query filter
// "filter": {
//     "property": "name",
//         "title": {
//         "equals": "CSS"
//     }
// }
// Query Short
// "sorts": [
//     {
//         "property": "Name",
//         "direction": "ascending"
//     }
// ]

const auth_token = process.env.NEXT_NOTION_TOKEN

const getDbList = async (dbId, query) => {

    const notion = new Client({ auth: auth_token, })

    const database = await notion.databases.query({
        database_id: dbId,
        filter: query?.filter,
        sorts: query?.sorts,
    })

    
    const fields_DB = Object.keys(database.results[0].properties)
    const list = database.results.map((v, k) => {
        let element = {}

        for (let index = 0; index < fields_DB.length; index++) {
            const field = fields_DB[index];
            const item = v.properties[field][v.properties[field].type]
            element[field] = item
        }
        // console.log(v.id);
        element["id"] = v.id

        return element
    });

    return list

}

export default getDbList