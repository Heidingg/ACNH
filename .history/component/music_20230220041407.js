import { useState, useEffect } from 'react';
import useSound from 'use-sound';
export default function Sound() {
    const [isChecked, setIsChecked] = React.useState(
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
      { volume: 0.25 }
    );
  
    return (
      <Checkbox
        name="demo-checkbox"
        checked={isChecked}
        size={24}
        label="I agree to self-isolate"
        onChange={() => setIsChecked(!isChecked)}
        onMouseDown={playActive}
        onMouseUp={() => {
          isChecked ? playOff() : playOn();
        }}
      />
    );
  }