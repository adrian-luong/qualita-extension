import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import useZustandStore from '@/stores/zustand.store';

export default function App() {
  const { tiles } = useZustandStore();

  return (
    <div className="min-w-3xl p-4">
      <h1>Default Panel</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div>
          {tiles.map((tile) => (
            <Card className="w-full" key={tile.id}>
              <CardHeader>
                <CardTitle>{tile.name}</CardTitle>
                <CardDescription>
                  <p className="text-muted-foreground text-xs">{tile.createdTS.toDateString()}</p>
                </CardDescription>
                <CardAction><Button variant="link">Edit</Button></CardAction>
              </CardHeader>
              <CardContent><p>{tile.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
