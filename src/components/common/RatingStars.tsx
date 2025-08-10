import { Star } from "lucide-react";

type Props = { rating: number };

const RatingStars = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-1" aria-label={`Valoración ${rating} de 5`}>
      {stars.map((s) => (
        <Star key={s} className={s <= rating ? 'text-accent fill-[hsl(var(--accent))]' : 'text-muted-foreground'} />
      ))}
    </div>
  );
};

export default RatingStars;
