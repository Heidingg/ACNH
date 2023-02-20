import { useState, useEffect } from 'react';
import useSound from 'use-sound';
export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
  
    const [playActive] = useSound(
        '/music/musicbg.mp3',
      { volume: 0.25 }
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
        console.log('✅ Checkbox is checked');
      } else {
        console.log('⛔️ Checkbox is NOT checked');
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