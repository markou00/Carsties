import { Label, TextInput } from "flowbite-react";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";

type InputProps = {
  label: string;
  type?: string;
  showLabel?: boolean;
} & UseControllerProps;

export default function Input(props: InputProps) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });

  return (
    <div className="mb-3">
      {props.showLabel && (
        <div className=",b-2 block">
          <Label htmlFor={field.name} value={props.label} />
        </div>
      )}
      <TextInput
        {...props}
        {...field}
        placeholder={props.label}
        type={props.type || "text"}
        color={
          fieldState.error ? "failure" : !fieldState.isDirty ? "" : "success"
        }
        helperText={fieldState.error?.message}
      />
    </div>
  );
}
