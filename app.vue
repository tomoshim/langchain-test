<script setup lang="ts">
import { ref } from 'vue'
import type {AiResponse} from 'server/api/ai.post'

const question = ref('')
const answer = ref('')

const handleSubmit = async (e: Event) => {
  const { answer: responseAnswer }: AiResponse = await $fetch('/api/ai', {
    method: 'POST',
    body: { question: question.value }
  })

  console.log({ responseAnswer })

  answer.value = responseAnswer

  return false;
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <textarea name="question" cols="30" rows="10" v-model="question"></textarea>
      </div>

      <div>
        <button type="submit">
        送信
      </button>
      </div>
    </form>

    <div>
      <pre>{{ answer }}</pre>
    </div>
  </div>
</template>
