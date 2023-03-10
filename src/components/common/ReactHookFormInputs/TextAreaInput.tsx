import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  placeholder: string;
  inputId: Path<T>;
  errorMessage?: string;
};

export default function TextAreaInput<T extends FieldValues>({
  label,
  register,
  placeholder,
  inputId,
  errorMessage,
}: Props<T>) {
  return (
    <InputWrapper label={label} inputId={inputId} errorMessage={errorMessage}>
      <textarea
        className={`w-full rounded-md p-2 ${
          errorMessage ? "border-red-600 border-2" : ""
        }`}
        placeholder={placeholder}
        {...register(inputId)}
      />
    </InputWrapper>
  );
}
