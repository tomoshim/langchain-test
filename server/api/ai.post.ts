export type AiRequest = {
    question: string
}

export type AiResponse = {
    answer: string
}

export default defineEventHandler(async (event) => {
    const body: AiRequest = await readBody(event)

    console.log({ q: body.question })

    return { answer: body.question }
})
