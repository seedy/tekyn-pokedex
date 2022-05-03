
export type GQLParams = {
  query: string
  variables?: Record<string, string|number>,
  operationName: string
}

const fetchGQL = async (input: RequestInfo, gqlParams?: GQLParams) => {
  const result = await fetch(input, {
    method: 'POST',
    body: JSON.stringify(gqlParams)
  })

  return await result.json();
}

export default fetchGQL