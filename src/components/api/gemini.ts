
export const gemini = async (question: string, model?: string) => {

  let useModel = 'gemini-1.5-flash';
  if (model) {
    useModel = model;
  }


  try {

    const {
      GoogleGenerativeAI,
      HarmCategory,
      HarmBlockThreshold,
    } = require("@google/generative-ai");
    
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const aiModel = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    
    const chatSession = aiModel.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(question);
    console.log(result.response.text());
    return result;


  } catch (error) {

    console.error('Error fetching data from OpenAI', error);
  }
};
