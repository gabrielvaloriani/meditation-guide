import { useState, useRef, useEffect } from 'react';
import './style.scss';
import meditationAudio from '../audio-guide/audio-meditation.mp3';
import { Helmet } from 'react-helmet';

function Guide() {
  const inputElement = useRef(null);
  const audioRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [minSec, setMinSec] = useState("00:00");
  const [timerRunning, setTimerRunning] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.src= meditationAudio;
  }, []);

  useEffect(() => {
    let interval;
    if (timerRunning && counter > 0) {
      interval = setInterval(() => {
        setCounter(prevCounter => {
          if (prevCounter <= 0) {
            clearInterval(interval);
            setTimerRunning(false);
            pauseAudio();
            return 0;
          }
          return prevCounter - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, counter]);

  const start = () => {
    const minutes = parseInt(inputElement.current.value, 10);
    if (!isNaN(minutes) && minutes > 0) {
      setCounter(minutes * 60);
      setTimerRunning(true);
      startAudio();
    }
  };

  const reset = () => {
    inputElement.current.value = "";
    setCounter(0);
    setMinSec("00:00");
    setTimerRunning(false);
    resetAudio();
  };

  const togglePause = () => {
    setTimerRunning(prevRunning => !prevRunning);
    if (timerRunning) {
      pauseAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setAudioPlaying(false);
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    setMinSec(formatTime(counter));
  }, [counter]);

  return (
    <>
      <Helmet>
        <title>Audio Guide</title>
      </Helmet>
      <div className="guide">
        <h5 className="title">
            - Turn up the volume if you want to be guided -
        </h5>
      </div>
      <div className='timer-container'>
        <audio ref={audioRef} src='./audio-guide/audio-meditation'/>
        <br/><br/>
        <div>
          <div className='input-container'>
            <input
              type='text'
              ref={inputElement}
              placeholder='Enter time in mins'
              className='input'
            />
            <h2 className='time'>{minSec}</h2>
          </div>
          <div className='button-container'>
            <button onClick={start} className='btn'>Let's Meditate!</button>
            <button onClick={reset} className='btn'>Reset</button>
            <button onClick={togglePause} className='btn'>{timerRunning ? 'Pause' : 'Resume'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;
