import React, { ReactNode, FC } from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type Props = {
  label: string;
  control: any;
  name: string;
  rules?: Record<string, any>;
  placeholder: string;
  size: SizeType;
  prefix?: ReactNode;
  type: string;
  addonBefore?: ReactNode;
  isAllowClear?: boolean;
  addonAfter?: ReactNode
  style? : React.CSSProperties
};

export const CoreInput = ({
  type = "text",
  size,
  placeholder = "Enter Response",
  addonBefore,
  addonAfter, 
  isAllowClear,
  ...rest
}: Props) => {
  return (
    <div className="input-container" style = {{width: "100%"}}>
      <Controller
        name={rest.name}
        control={rest.control}
        render={({ field, fieldState }) => (
          <>
            <Input
              size={size}
              type={type}
              placeholder={placeholder}
              addonBefore={addonBefore}
              allowClear = {isAllowClear}
              addonAfter = {addonAfter}
              className={
                fieldState.invalid ? "custom-input error" : "custom-input"
              }
              style = {rest.style}
              status={fieldState.error ? "error" : ""}
              {...field}
            />
            {fieldState.error && (
              <div style={{position: "absolute", color: "red", marginTop: "3px" }}>
                {fieldState.error.message}
              </div>
            )}
            </>
        )}
      />
    </div>
  );
};
