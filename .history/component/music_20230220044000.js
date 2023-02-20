import { useState, useEffect } from 'react';
import useSound from 'use-sound';
export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
  
    const [play, { stop }] = useSound("/music/musicbg.mp3");
    const handleChange = event => {
      if (event.target.checked) {
    play()
      } else {
       stop
      }
      setIsChecked(current => !current);
    };
    return (
      <input
      type="checkbox"

        checked={isChecked}
        size={24}
        onChange={handleChange}
        />
      
    );
  }