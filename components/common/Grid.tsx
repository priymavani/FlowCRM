import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
  mdCols?: 1 | 2 | 3 | 4;
  lgCols?: 1 | 2 | 3 | 4;
}

export function Grid({
  children,
  cols = 1,
  mdCols,
  lgCols,
  className,
  ...props
}: GridProps) {
  const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    12: "grid-cols-12",
  };

  const mdColMap = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  const lgColMap = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-6 md:gap-8",
        colMap[cols],
        mdCols && mdColMap[mdCols],
        lgCols && lgColMap[lgCols],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
