import { useMutation } from "@tanstack/react-query";

const username = 'roger.santos@global.ntt'
const password = ''
const credential = btoa(username + ':' + password)

export function useWorkItemById(ids: [], project: string) {
    const query = {
        query: `SELECT [System.Id], [System.State] FROM WorkItems WHERE [System.TeamProject] = '${project}' and [System.WorkItemType] = 'Product Design'`
    }
    return useMutation({
        mutationKey: ['get-wk-id'],
        mutationFn: async () => {
            const response = await fetch(`https://dev.azure.com/brsoftwareengineering/_apis/wit/workitems?ids=${ids}&fields=System.State&api-v`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic" + credential
                },
                body: JSON.stringify(query)
            })
            
            const result = await response.json()

            return result
        }
    })
}