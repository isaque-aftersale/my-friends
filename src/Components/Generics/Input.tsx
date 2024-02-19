import { ChangeEventHandler } from 'react';

export type Props = {
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};

export default function Input(props: Props) {
  const { type, className, onChange, disabled, placeholder } = props;

  return (
    <input
      type={type ?? "text"}
      className={`outline-none ${className ?? ""}`}
      disabled={disabled}
      onChange={(e) => (onChange ? onChange(e) : () => {})}
      placeholder={placeholder}
    />
  );
}
