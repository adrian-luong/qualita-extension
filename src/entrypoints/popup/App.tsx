import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Badge } from '@/components/shadcn/badge';

import useZustandStore from '@/stores/zustand.store';

export default function App() {
  const { tiles, panel } = useZustandStore();
  const getTilesByStatus = (status: string) => {
    return tiles.filter(tile => tile.status == status);
  }

  return (
    <div className="min-w-3xl p-4">
      <h1>{panel.name}</h1>
      <div className="grid gap-4 p-4 grid-cols-3 grid-rows-1">
        {panel.tileStatuses.map((status, statusIndex) => (
          <div key={statusIndex}>
            <h5>{status}</h5>
            <div className='my-2'>
              {getTilesByStatus(status).map((tile) => (
                <Card className="w-full" key={tile.id}>
                  <CardHeader>
                    <CardTitle>{tile.name}</CardTitle>
                    <CardDescription>
                      <p className="text-muted-foreground text-xs">{tile.createdTS.toDateString()}</p>
                    </CardDescription>
                    <CardAction><Button variant="link">Edit</Button></CardAction>
                  </CardHeader>
                  <CardContent>
                    <p>{tile.desc}</p>
                    <div className="flex flex-col items-center gap-2 my-1">
                      <div className="flex w-full flex-wrap gap-2">
                        {tile.tags.map((tag, tagIndex) => (<Badge key={tagIndex}>{tag}</Badge>))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
