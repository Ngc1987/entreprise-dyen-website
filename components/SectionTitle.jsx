export default function SectionTitle({ title, subtitle, id }) {
  return (
    <div className="text-center mb-12">
      <h2 id={id} className="text-3xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
} 