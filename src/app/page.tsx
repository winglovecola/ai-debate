'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/utility/authContext';
import Topic from '@/components/ui/Topic';
import { debateUpdate } from '@/components/api/debateApi';
import { signIn, getCurrentUser } from 'aws-amplify/auth';


interface Topic {
  id: string;
  topic: string;
  createdAt: string;
}

export default function Home() {

  const router = useRouter();

  const { USER, setUSER } = useAuthContext();

  const [topics, setTopics] = useState<Topic[]>([]); // State to store topics
  const [affirmativePoints, setAffirmativePoints] = useState<string[]>([]);
  const [negativePoints, setNegativePoints] = useState<string[]>([]);
  const [debateFinished, setDebateFinished] = useState<boolean>(false);

  useEffect(() => {
    const loadDebateTopics = async () => {
      try {
        // Fetch the list of topics
        const topicListData:any = await debateUpdate({ action: 'topicList' });


          
        // Update the topics state with the data from the response
        setTopics(topicListData.responseRes || []);
      } catch (error) {
        console.error('Failed to load topics:', error);
      }
    };

    loadDebateTopics();
  }, []);


  const handleTopicClick = async (topicId: string) => {

    const loadDebateInteractions:any = await debateUpdate({ action: 'loadDebateInteractions', topicId: topicId });

    console.log ('loadDebateInteractions: ' + JSON.stringify(loadDebateInteractions.responseRes));  


    //reset the points
    setAffirmativePoints([]);
    setNegativePoints([]);

    const topicArray = loadDebateInteractions.responseRes;
    for (let i = 0; i < topicArray.length; i++)
    {
      const debateTurn = topicArray[i].round % 2;
      if (debateTurn === 0)
      {
        setAffirmativePoints((prev:any) => [...prev, topicArray[i].msg]);
      }
      else
      {
        setNegativePoints((prev:any) => [...prev, topicArray[i].msg]);
      }
    }

    setDebateFinished (true);

  };

  if (!USER || USER?.userId === '') { //must login to see the content
    const signInUser = async () => {
     // const currentUser = await getCurrentUser();  
      //console.log ('USER: ' + JSON.stringify(currentUser));
      //if (!currentUser)
        
      try {

        
        
        const username:any = process.env.NEXT_PUBLIC_LOGIH_USER;
        const ps = process.env.NEXT_PUBLIC_LOGIH_PS;


        if (username && ps) {

          await signIn({ username: username, password: ps });

          window.location.reload();
        }


      
      } catch (error) {
        console.error('User already sign in');
      }
    };

    signInUser();
    return <div className='flex flex-1 justify-center items-center text-4xl font-extrabold'>Loading...</div>;
  }

  return (
  <main className='flex flex-col flex-1 gap-4 w-full h-full'>
    
    {/* Map through the topics and display them */}
    <div className='fixed top-[100px] right-2 flex flex-col w-[200px] p-4 gap-2 rounded-lg bg-gray-200'>
      <h3>Discussed Topics:</h3>
      {(topics.length > 0 ? (
          topics.map((topic) => (
            <div 
              key={topic.id} 
              className='p-2 rounded mb-4 cursor-pointer hover:bg-gray-300 ' 
              onClick={() => handleTopicClick(topic.id)}
            >
              <h3 className='text-sm font-bold'>{topic.topic}</h3>
              <p className='text-sm'>{new Date(topic.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No topics available.</p>
        )
      )}
    </div>
    
    <div className='flex flex-col flex-1 w-full'>
      <Topic affirmativePoints={affirmativePoints} setAffirmativePoints={setAffirmativePoints} negativePoints={negativePoints} setNegativePoints={setNegativePoints} debateFinished={debateFinished} setDebateFinished={setDebateFinished}/>
    </div>
  </main>  
  );
}
