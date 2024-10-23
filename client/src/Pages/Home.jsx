import React, { useEffect } from 'react'
import "../App.css";
import library from "../images/library.png"
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from 'react-speech';

const Home = () => {
   const startListening = () =>{
    console.log('listening');
    

     SpeechRecognition.startListening({continuous: true});
   }
    const navigate = useNavigate();
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      const getLastWord = (transcript) => {
        const words = transcript.trim().split(" ");
        return words[words.length - 1] || "";
      };

      useEffect(()=>{
        let lastword = getLastWord(transcript);
        console.log(lastword);
        
        if(lastword === "speech"){
            navigate('/Voice');
            resetTranscript();
        }
        if(lastword === 'normal'){
            navigate('/Books');
            resetTranscript();
        }
      },[transcript])
  return <>
  
  <Speech text="Welcome to react speech" />
    <div className="container" onClick={startListening}>
        <header>
            {/* <div className="logo" >Anurved</div> */}
            <nav>
                <ul>
                    <li onClick={()=>{navigate('/Home')}}>HOME</li>
                    <li onClick={()=>{navigate('/Books')}}>BOOKS</li>
                    <li onClick={()=>{navigate('/Voice')}}>AUDIO PRODUCTS</li>
                </ul>
            </nav>
        </header>
        <main className="main-content">
            <div className="text-content">
                <h1>E-Library</h1>
                <p>An inclusive eLibrary providing accessible resources for both disabled and non-disabled individuals to enjoy seamless learning and reading.</p>
                <div className="cta-buttons">
                    <a href="Books" className="button primary-button"  >Explore books</a>
                    <a href="Voice" className="button secondary-button" >Try saying 'speech'</a>
                </div>
            </div>
            <div className="image-placeholder" >
                <img src={library} alt="img" 
                 style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}/>
            </div>
        </main>
    </div>

    <div>
      
      <p>{transcript}</p>
    </div>
  
  </>
}

export default Home