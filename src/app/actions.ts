'use server';

import {
  optimizeShuttleRoutes,
} from '@/ai/flows/optimize-shuttle-routes';
import { chatbot } from '@/ai/flows/chatbot';
import type {
  OptimizeShuttleRoutesInput,
  OptimizeShuttleRoutesOutput,
  ChatbotInput,
  ChatbotOutput,
  Message,
} from '@/ai/schemas';

export type OptimizeFormState = {
  message: string;
  data: OptimizeShuttleRoutesOutput | null;
  fieldErrors: Record<string, string | undefined>;
};

export type ChatbotState = {
  messages: Message[];
};

export async function getOptimizedRoutes(
  prevState: OptimizeFormState,
  formData: FormData
): Promise<OptimizeFormState> {
  const input: OptimizeShuttleRoutesInput = {
    passengerDemand: formData.get('passengerDemand') as string,
    trafficConditions: formData.get('trafficConditions') as string,
    currentRoutes: formData.get('currentRoutes') as string,
  };

  if (
    !input.passengerDemand ||
    !input.trafficConditions ||
    !input.currentRoutes
  ) {
    return {
      message: 'All fields are required. Please fill out the form completely.',
      data: null,
      fieldErrors: {},
    };
  }

  try {
    const result = await optimizeShuttleRoutes(input);

    let formattedRoutes = result.optimizedRoutes;
    try {
      // Try to parse and re-stringify for nice formatting
      const parsedRoutes = JSON.parse(result.optimizedRoutes);
      formattedRoutes = JSON.stringify(parsedRoutes, null, 2);
    } catch (e) {
      // Ignore if parsing fails, just use the raw string.
    }

    return {
      message: 'Routes optimized successfully.',
      data: {...result, optimizedRoutes: formattedRoutes},
      fieldErrors: {},
    };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `Optimization failed: ${errorMessage}`,
      data: null,
      fieldErrors: {},
    };
  }
}

export async function sendMessage(
  prevState: ChatbotState,
  formData: FormData
): Promise<ChatbotState> {
  const message = formData.get('message') as string;
  if (!message) {
    return prevState;
  }

  const newUserMessage = {role: 'user' as const, content: message};
  const newHistory = [...prevState.messages, newUserMessage];

  try {
    const result = await chatbot({
      history: prevState.messages,
      message: message,
    });

    return {
      messages: [
        ...newHistory,
        {role: 'model' as const, content: result.response},
      ],
    };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      messages: [
        ...newHistory,
        {
          role: 'model' as const,
          content: `Sorry, something went wrong: ${errorMessage}`,
        },
      ],
    };
  }
}
