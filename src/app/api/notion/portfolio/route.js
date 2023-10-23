import { getDbList } from '/src/utils/query/notion'

export async function GET(request) {
    const SkillsDB = process.env.NEXT_PORTFOLIO_DB_ID
    const query = {
        // filter: {
        //     "property": "Main",
        //     "checkbox": { "equals": true }
        // }
    }
    const data = await getDbList(SkillsDB)
    return Response.json(data)
}