import { useMutation } from "@tanstack/react-query";

const username = 'roger.santos@global.ntt'
const password = ''
const credential = btoa(username + ':' + password)

export function useWorkItem(project: string) {
    const query = {
        query: `SELECT [System.Id], [System.State] FROM WorkItems WHERE [System.TeamProject] = '${project}' and [System.WorkItemType] = 'Product Design'`
    }
    return useMutation({
        mutationKey: ['get-projects'],
        mutationFn: async () => {
            const reponse = await fetch(`https://dev.azure.com/brsoftwareengineering/${project}/_apis/wit/wiql?api-version=7.0`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic" + credential
                },
                body: JSON.stringify(query)
            })

            const result =  await reponse.json()

            return result.workItems
        }
    })
}