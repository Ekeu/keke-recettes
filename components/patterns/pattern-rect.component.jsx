export default function PatternRect({ color, className, id }) {
  return (
    <svg
      className={className}
      width={404}
      height={392}
      fill='none'
      viewBox='0 0 404 392'
    >
      <defs>
        <pattern
          id={id}
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits='userSpaceOnUse'
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={color}
            fill='currentColor'
          />
        </pattern>
      </defs>
      <rect width={404} height={392} fill={`url(#${id})`} />
    </svg>
  );
}

PatternRect.defaultProps = {
  color: 'text-blue-gray-200',
};
