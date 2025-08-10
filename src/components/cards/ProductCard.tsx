import { Button } from "@/components/ui/button";
import RatingStars from "@/components/common/RatingStars";

export type Product = {
  id: string;
  title: string;
  description: string;
  image?: string;
  rating: number;
  ctaLabel: string;
  href: string;
  tag: string;
};

const ProductCard = ({ title, description, image, rating, ctaLabel, href, tag }: Product) => {
  return (
    <article className="group rounded-lg border bg-card p-4 transition-transform hover:shadow-md hover:-translate-y-0.5">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-muted/50">
        {image ? (
          <img src={image} alt={`${title} imagen de producto`} className="h-full w-full object-cover" loading="lazy" />
        ) : null}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="rounded bg-secondary px-2 py-0.5">{tag}</span>
        <RatingStars rating={rating} />
      </div>
      <h3 className="mt-2 font-heading text-lg leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      <div className="mt-3">
        <Button asChild variant="cta" className="w-full">
          <a href={href} target="_blank" rel="nofollow noopener noreferrer">{ctaLabel}</a>
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
