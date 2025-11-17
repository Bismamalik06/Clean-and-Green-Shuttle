'use server';

/**
 * @fileOverview An AI-powered tool to automatically optimize shuttle routes based on real-time passenger demand and traffic conditions.
 *
 * - optimizeShuttleRoutes - A function that optimizes shuttle routes.
 */

import {ai} from '@/ai/genkit';
import {
  OptimizeShuttleRoutesInputSchema,
  type OptimizeShuttleRoutesInput,
  OptimizeShuttleRoutesOutputSchema,
  type OptimizeShuttleRoutesOutput,
} from '@/ai/schemas';

export async function optimizeShuttleRoutes(
  input: OptimizeShuttleRoutesInput
): Promise<OptimizeShuttleRoutesOutput> {
  return optimizeShuttleRoutesFlow(input);
}

const optimizeShuttleRoutesPrompt = ai.definePrompt({
  name: 'optimizeShuttleRoutesPrompt',
  input: {schema: OptimizeShuttleRoutesInputSchema},
  output: {schema: OptimizeShuttleRoutesOutputSchema},
  prompt: `You are an AI-powered tool that automatically optimizes shuttle routes based on real-time passenger demand and traffic conditions.

You will receive real-time passenger demand data, traffic conditions data, and the current shuttle routes and schedules. You will analyze this data and generate optimized shuttle routes and schedules to reduce wait times for students and improve the efficiency of the shuttle service.

Passenger Demand Data: {{{passengerDemand}}}
Traffic Conditions Data: {{{trafficConditions}}}
Current Routes and Schedules: {{{currentRoutes}}}

Provide the optimized routes and schedules in JSON format, along with a clear explanation of your reasoning for the changes.
`,
});

const optimizeShuttleRoutesFlow = ai.defineFlow(
  {
    name: 'optimizeShuttleRoutesFlow',
    inputSchema: OptimizeShuttleRoutesInputSchema,
    outputSchema: OptimizeShuttleRoutesOutputSchema,
  },
  async input => {
    const {output} = await optimizeShuttleRoutesPrompt(input);
    return output!;
  }
);
