interface Props {
  specifications: Record<string, string | number | undefined>;
}

export function ProductSpecs({ specifications }: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Specifications</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
        {Object.entries(specifications).map(([key, value]) => (
          <li key={key} className="flex justify-between">
            <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
            <span className="font-medium text-right">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
