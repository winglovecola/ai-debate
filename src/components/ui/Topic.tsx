// Import necessary modules
import React, { useState, useEffect } from 'react';
import { chatGPT } from '@/components/api/chatGPT';
import { gemini } from '@/components/api/gemini';
import { CircleLoader } from 'react-spinners';
import { debateUpdate } from '@/components/api/debateApi';

// Define the component
const TopicForm = (props: {affirmativePoints:any, setAffirmativePoints: any, negativePoints: any, setNegativePoints:any, debateFinished:any, setDebateFinished: any}) => {
  const [topic, setTopic] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);




  const [affirmativeLoading, setAffirmativeLoading] = useState<boolean>(false);
  const [negativeLoading, setNegativeLoading] = useState<boolean>(false);
  const [judgeLoading, setJudgeLoading] = useState<boolean>(false);

  

  const [judgeResult, setJudgeResult] = useState<string | null>(null);

  


  useEffect(() => {
    if (props.debateFinished && props.affirmativePoints.length > 0 && props.negativePoints.length > 0) {
      debateResult();
    }
  }, [props.debateFinished, props.affirmativePoints, props.negativePoints]);
 


  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior


    //reset the points
    props.setAffirmativePoints([]);
    props.setNegativePoints([]);
    props.setDebateFinished (false);


    try {
      // Use the chatGpt function to send the topic to OpenAI's API


      for (let round = 1; round <= 4; round++) {
        // Increment conversation count
        const debateTurn = round % 2;
        if (debateTurn === 0) {
          setAffirmativeLoading(true);
        } else {
          setNegativeLoading(true);
        }
    
        await debateStart(round);

        if (round === 4)
          props.setDebateFinished (true);
      }

      
      
    } catch (error) {
      console.error('Error fetching data from OpenAI', error);
      setResponse('An error occurred while fetching the response.');
    }

    // Clear the input field after submission
    setTopic('');
  };


  const debateStart = async (debateRound: number) => {
    
    let data: any;
    let topicTemplate: string = '';
    let opponentPoints: string = '';




    const debateTurn = debateRound % 2;


    if (debateRound === 1) 
    {
      topicTemplate = `Assume you are in a debate contest and you are the negative side. The topic is "${topic}". You have to provide 3 points to support your argument. Don't provide conclusion.`;
    }
    else if (debateRound === 2) 
    {
      topicTemplate = `Assume you are in a debate contest and you are the affirmative side. The topic is "${topic}". You have to provide 3 points to support your argument. Don't provide conclusion.`;
    }
    else
    {
      if (debateTurn === 0) 
        opponentPoints = 'Opponent points: ' + props.negativePoints.join('\n\n');
      else
        opponentPoints = 'Opponent points: ' + props.affirmativePoints.join('\n\n');



      topicTemplate = `Assume you are in a debate contest and you are the affirmative side. The topic is "${topic}".

      ${opponentPoints}
      
      Base on your opponent's point. You have to provide one final point to support your argument. Also give a conclusion.`;
    }


    
    if (debateTurn === 0) {
      const rawData = await chatGPT(topicTemplate);

      data = rawData.choices[0].message.content;
    } else {
      const rawData = await gemini(topicTemplate);

      data = rawData.response.text();
    }

    if (data) {
      const responseContent = data;

      // Update the corresponding points array based on the conversation count
      if (debateTurn === 0) {
        
        props.setAffirmativePoints((prev:any) => [...prev, responseContent]);

        setAffirmativeLoading(false);

        


        //update dynamodb via Lambda
        debateUpdate({action: 'save', topic: topic, username: 'gemini', debateRound: debateRound, debateSide: 'affirmative', msg: responseContent});
      } else {
        props.setNegativePoints((prev:any) => [...prev, responseContent]);

        setNegativeLoading(false);


        //update dynamodb via Lambda
        debateUpdate({action: 'save', topic: topic, username: 'gpt-4o-mini', debateRound: debateRound, debateSide: 'nagative', msg: responseContent});
      }
    } 
    else
    {
      if (debateTurn === 0) {
        setAffirmativeLoading(false);
      } else {
        setNegativeLoading(false);
      }
    }


  }





  const debateResult = async () => {
    
    let data: any;
    let debateResult = '';
    let topicTemplate: string = '';

    //judge the debate

    setJudgeLoading(true);
    setJudgeResult('');

    if (props.affirmativePoints.length > 0 && props.negativePoints.length > 0)
    {
      debateResult = 'AFFIRMATIVE POINTS: ' + props.affirmativePoints.join('\n\n') + '\n\n' + 'NEGATIVE POINTS: ' + props.negativePoints.join('\n\n');
      
      topicTemplate = `Assume you are in a debate contest and you are the judge to determine which is the winning side base on the following information.
      
      TOPIC: "${topic}".

      ${debateResult}
      
      Base on the above information. Determine which is the winning side. Affirmative or Negative? Also give a conclusion why.`;

      const rawData = await chatGPT(topicTemplate);

      data = rawData.choices[0].message.content;
      if (data) {
        setJudgeResult(data);
      }
    }
    setJudgeLoading(false);
  }


  


  // Convert newlines to <br /> tags
  const formatResponse = (text: string | null) => {
    if (!text) return null;
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col w-full max-w-[1000px] mx-auto mt-2 p-4 bg-white rounded shadow-md">
     
      <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Enter a Debate Topic</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>




      


        {props.debateFinished && (
          <div className='flex flex-col justify-center items-center mt-6 rounded-lg bg-slate-100 p-4'>
            <h3 className='text-xl font-semibold'>Judge: </h3>
            <h3 className='text-lg'>AI Model: gpt-4o-mini</h3>

            {judgeLoading && (
              <div className='flex flex-1 flex-row justify-center text-center items-center text-2xl'><CircleLoader loading={judgeLoading} size={25} color='#d8d8d8'/>&nbsp;Thinking ...</div>
            )}

            {judgeResult && (
              <div className='w-full bg-slate-100 p-4 mt-4 rounded'>{formatResponse(judgeResult)}</div>
            )}
          </div>
        )}
      





      <div className='flex flex-row justify-between mt-6'>
        
        <div className='flex flex-col max-w-[450px] w-full items-center'>
          <h3 className='text-xl font-semibold'>Negative Side: </h3>
          <h3 className='text-lg'>AI Model: Google Gemini</h3>
          
          {negativeLoading && (
            <div className='flex flex-1 flex-row justify-center text-center items-center text-2xl'><CircleLoader loading={negativeLoading} size={25} color='#ff7373'/>&nbsp;Thinking ...</div>
          )}

          {props.negativePoints.length > 0 && props.negativePoints.map((point:string, index:number) => (
            <div className='w-full bg-red-100 p-4 mt-4 rounded' key={index}>{formatResponse(point)}</div>
          ))}
    
        </div>



        <div className='flex flex-col max-w-[450px] w-full items-center'>
          <h3 className='text-xl font-semibold'>Affirmative Side:</h3>
          <h3 className='text-lg'>AI Model: gpt-4o-mini</h3>

          {affirmativeLoading && (
            <div className='flex flex-1 flex-row justify-center text-center items-center text-2xl'><CircleLoader loading={affirmativeLoading} size={25} color='#55bd79'/>&nbsp;Thinking ...</div>
          )}

          {props.affirmativePoints.length > 0 && props.affirmativePoints.map((point:string, index:number) => (
            <div className='w-full bg-green-100 p-4 mt-4 rounded' key={index}>{formatResponse(point)}</div>
          ))}

        </div>
  

      </div>
    </div>
  );
};

// Export the component as the default export
export default TopicForm;
