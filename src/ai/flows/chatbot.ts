'use server';
/**
 * @fileOverview A conversational AI chatbot for the Clean and Green Shuttle Service website.
 *
 * - chatbot - A function that powers the conversational AI.
 */

import {ai} from '@/ai/genkit';
import {
  ChatbotInputSchema,
  type ChatbotInput,
  ChatbotOutputSchema,
  type ChatbotOutput,
} from '@/ai/schemas';

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const chatbotPrompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are a helpful AI assistant for "Clean and Green Shuttle Service," a university shuttle service. Your goal is to provide friendly and accurate information to students and staff.

Answer questions about:
- Shuttle routes and stops
- Live tracking and arrival times
- The sustainability benefits of the electric shuttles
- How to provide feedback
- General campus information if you know it, but prioritize shuttle-related queries.

Keep your answers concise and helpful.

Current Conversation:
{{#each history}}
- {{role}}: {{{content}}}
{{/each}}
- user: {{{message}}}
- model:`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async input => {
    const {output} = await chatbotPrompt(input);
    return output!;
  }
);
