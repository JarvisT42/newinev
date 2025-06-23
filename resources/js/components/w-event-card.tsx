// components/w-event-card.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EventCard({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="text-sm font-semibold text-muted-foreground">{date}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
