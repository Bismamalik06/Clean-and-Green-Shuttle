/**
 * @fileOverview Zod schemas and TypeScript types for AI flows.
 */

import {z} from 'zod';

// Schemas for chatbot
const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type Message = z.infer<typeof MessageSchema>;

export const ChatbotInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string(),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export const ChatbotOutputSchema = z.object({
  response: z.string(),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

// Schemas for optimize-shuttle-routes
export const OptimizeShuttleRoutesInputSchema = z.object({
  passengerDemand: z
    .string()
    .describe(
      'A JSON string containing real-time passenger demand data for each shuttle stop.'
    ),
  trafficConditions: z
    .string()
    .describe(
      'A JSON string containing real-time traffic conditions data for the shuttle routes.'
    ),
  currentRoutes: z
    .string()
    .describe(
      'A JSON string containing the current shuttle routes and schedules.'
    ),
});
export type OptimizeShuttleRoutesInput = z.infer<
  typeof OptimizeShuttleRoutesInputSchema
>;

export const OptimizeShuttleRoutesOutputSchema = z.object({
  optimizedRoutes: z
    .string()
    .describe(
      'A JSON string containing the optimized shuttle routes and schedules.'
    ),
  reasoning: z
    .string()
    .describe('The AI’s reasoning for the route optimizations.'),
});
export type OptimizeShuttleRoutesOutput = z.infer<
  typeof OptimizeShuttleRoutesOutputSchema
>;
