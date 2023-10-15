

// toma una id y busca los hijos directos de este

const { Client } = require("@notionhq/client")
const auth_token = process.env.NEXT_NOTION_TOKEN


// const pageId = "b2429395-4a56-49de-a524-c738a3cf449e"

const getPageCont = async (id) => {
    const notion = new Client({
        auth: auth_token,
    })

    const response = await notion.blocks.children.list({
        block_id: id,
        page_size: 50,
    });

    let list = []

    for (let index = 0; index < response.results.length; index++) {
        const element = response.results[index]
        const type = element.type
        const text = element[type].rich_text
        const line = { type, cont: text }

        
        list.push(line)
    }

 

    return list

}

export default getPageCont