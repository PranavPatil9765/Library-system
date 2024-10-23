import React from 'react';
import philosopher from "../audio/philosopher.mp3";
import chamber from "../audio/chamber.mp3";
import prisoner from "../audio/prisoner.mp3";
import goblet from "../audio/goblet.mp3";
import phoenix from "../audio/phoenix.mp3";
import prince from "../audio/prince.mp3";
import hallows from "../audio/hallows.mp3";
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from 'react-speech';
import { useEffect } from 'react';

const AudioCard = ({ audioSrc, title, date, author }) => {
    
    
    const ID = audioSrc;



    return (
        <div className="audio-card" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s' }}>
            <audio  id={ID}  controls style={{ width: '100%', margin: '15px 0', outline: 'none', borderRadius: '5px', backgroundColor: '#f1f1f1' }}>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="audio-info" style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#1a3e90' }}>{title}</h2>
                <p style={{ margin: '5px 0', fontSize: '16px', color: '#555' }}>Date: {date}</p>
                <p style={{ margin: '5px 0', fontSize: '16px', color: '#555' }}>Author: {author}</p>
            </div>
        </div>
    );
};

const Voice = () => {
    const startListening = () =>{
        console.log('here');
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
            let lastword = getLastWord(transcript).toLowerCase();
            console.log(lastword);
            if(lastword === "home"){
                navigate('/');
                resetTranscript();
            } if(lastword === "stop"){
                stopAllAudio();
            }else if(lastword === "phoenix"){
                document.getElementById("/src/audio/phoenix.mp3").play();
                resetTranscript();
            }else if(lastword === "stone"){
                document.getElementById("/src/audio/philosopher.mp3").play();
                resetTranscript();
            }else if(lastword === "chamber"){
                document.getElementById("/src/audio/chamber.mp3").play();
                resetTranscript();
            }else if(lastword === "prisoner"){
                document.getElementById("/src/audio/prisoner.mp3").play();
                resetTranscript();
            }else if(lastword === "goblet"){
                document.getElementById("/src/audio/goblet.mp3").play();
                resetTranscript();
            }else if(lastword === "deathly"){
                document.getElementById("/src/audio/hallows.mp3").play();
                resetTranscript();
            }else if(lastword === "prince"){
                document.getElementById("/src/audio/prince.mp3").play();
                resetTranscript();
            }
            
            
          },[transcript])


          function stopAllAudio() {
            const audios = document.querySelectorAll('audio');
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // Optionally reset the audio to the start
            });
        }
    return (
        <div  onClick={startListening} style={{ fontFamily: 'Arial, sans-serif', backgroundImage: 'url(https://images.unsplash.com/photo-1541746942954-5e51c41a3ff3)', backgroundSize: 'cover', backgroundPosition: 'center', margin: 0, padding: 0, color: '#333', overflowX: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '60px auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', paddingBottom: '40px' }}>
                <h1 style={{ textAlign: 'center', color: '#1a3e90', marginBottom: '40px', fontSize: '36px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Audio Library</h1>
                <h4 style={{ textAlign: 'center', color: 'red' }}>Say a book name / say stop / say home</h4>

                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <AudioCard audioSrc={philosopher} title="Book 1 – The Philosopher’s Stone" date="2024-12-05" author="J.K. Rowling" />
                    <AudioCard audioSrc={chamber} title="Book 2 – The Chamber of Secrets" date="2024-10-20" author="J.K. Rowling" />
                    <AudioCard audioSrc={prisoner} title="Book 3 – The Prisoner of Azkaban" date="2024-09-15" author="J.K. Rowling" />
                    <AudioCard audioSrc={goblet} title="Book 4 – The Goblet of Fire" date="2024-11-05" author="J.K. Rowling" />
                    <AudioCard audioSrc={phoenix} title="Book 5 – The Order of the Phoenix" date="2024-12-01" author="J.K. Rowling" />
                    <AudioCard audioSrc={prince} title="Book 6 – The Half Blood Prince" date="2024-12-10" author="J.K. Rowling" />
                    <AudioCard audioSrc={hallows} title="Book 7 – The Deathly Hallows" date="2024-12-15" author="J.K. Rowling" />
                </div>
            </div>
        </div>
    );
};

export default Voice;
