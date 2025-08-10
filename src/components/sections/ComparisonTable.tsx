type Row = {
  feature: string;
  a: string | boolean;
  b: string | boolean;
  c: string | boolean;
};

type Props = {
  rows: Row[];
  products: [string, string, string];
};

const ComparisonTable = ({ rows, products }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border rounded-lg">
        <thead className="bg-secondary/60">
          <tr>
            <th className="p-3 text-left">Característica</th>
            <th className="p-3 text-left">{products[0]}</th>
            <th className="p-3 text-left">{products[1]}</th>
            <th className="p-3 text-left">{products[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.feature} className="border-t">
              <td className="p-3 font-medium">{r.feature}</td>
              <td className="p-3">{typeof r.a === 'boolean' ? (r.a ? 'Sí' : 'No') : r.a}</td>
              <td className="p-3">{typeof r.b === 'boolean' ? (r.b ? 'Sí' : 'No') : r.b}</td>
              <td className="p-3">{typeof r.c === 'boolean' ? (r.c ? 'Sí' : 'No') : r.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
