import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Metarix Bot", a helpful and professional AI assistant for the agency METARIX.
METARIX specializes in two main areas:
1. "Metarix Alive" (AI Voice Calling Agents) (60% focus): Inbound/Outbound calls, Customer Support, Sales, lead qualification. Key benefits: 24/7 availability, zero wait times, multilingual support, ultra-low latency (300ms), and extremely affordable pricing (₹5.75 per minute).
2. AI Consultation & Implementation (40% focus): Custom automation, business growth strategy, LLM integration, workflow automation.

Your tone should be: "Cinematic Tech", professional, trustworthy, futuristic but grounded.
Keep answers concise and helpful. Encourage users to "Book a Demo" or "Get a Consultation".
If asked about technical details, mention we use state-of-the-art LLMs and low-latency (300ms) voice infrastructure.
If asked about pricing, state clearly that our rate is ₹5.75 per minute with all payments in Rupees.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const apiKey = process.env.API_KEY || '';
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the neural network right now. Please try again later.";
  }
};