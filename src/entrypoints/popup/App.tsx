import { useState } from 'react';
import { Button } from '@/components/shadcn/button';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>WXT + React = Qualita</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}
