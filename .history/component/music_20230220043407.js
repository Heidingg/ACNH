import { useState, useEffect } from 'react';
import useSound from 'use-sound';
export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
  
    const [playOn] = useSound(
        '/music/musicbg.mp3',
      { volume: 0.25 }
    );
    const [playOff] = useSound(
        '/music/musicbg.mp3',
      { volume: 0 }
    );
    const handleChange = event => {
      if (event.target.checked) {
      playOn();
      } else {
       playOff()
      }
      setIsSubscribed(current => !current);
    };
    return (
      <input
      type="checkbox"

        checked={isChecked}
        size={24}

        onChange={() => handleChange()}
        />
      
    );
  }