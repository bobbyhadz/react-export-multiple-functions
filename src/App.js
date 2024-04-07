import './App.css';

// 👇️ named imports
import {SmallButton, BigButton} from './Buttons';

export default function App() {
  return (
    <div>
      <SmallButton />
      <BigButton />
    </div>
  );
}
