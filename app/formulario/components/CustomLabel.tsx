type Props = {
  htmlfor: string;
  text: string;
}

export default function CustomLabel({htmlfor, text}: Props) {
  return (
    <label htmlFor={htmlfor} className="label">
      <span className="label-text">{text}</span>
    </label>
  );
}
