// pages/api/chatgpt.ts

export const chatGPT = async (question: string, model?: string) => {
  try {
    // Replace with your OpenAI API key
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_CGTP_KEY;

    let useModel = 'gpt-4o-mini';
    if (model) {
      useModel = model;
    }

    // Call the OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: useModel,
        messages: [{ role: 'user', content: question }],
      }),
    });

    // Parse the response
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // Handle the response data
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data from OpenAI', error);
  }
};
