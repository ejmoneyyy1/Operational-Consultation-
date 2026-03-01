interface StepCircleProps {
  number: number;
}

export function StepCircle({ number }: StepCircleProps) {
  return (
    <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center">
      <span className="text-lg font-medium text-brand-black">{number}</span>
    </div>
  );
}
