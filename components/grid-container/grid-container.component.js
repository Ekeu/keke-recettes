export default function GridContainer({ children, className }) {
  return <div className={`mt-12 grid ${className}`}>{children}</div>;
}
