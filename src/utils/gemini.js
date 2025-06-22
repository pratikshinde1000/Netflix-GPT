import { GoogleGenerativeAI } from '@google/generative-ai'; // Import the SDK

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const genAIModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default genAIModel;
