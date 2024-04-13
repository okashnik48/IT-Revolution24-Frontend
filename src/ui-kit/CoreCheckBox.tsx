import React, { ReactNode, FC } from "react";
import { Controller } from "react-hook-form";
import { Checkbox, Radio } from "antd";
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
  addonAfter?: ReactNode;
  style?: React.CSSProperties;
};

export const CoreCheckBox = ({
  type = "text",
  size,
  placeholder = "Enter Response",
  addonBefore,
  addonAfter,
  isAllowClear,
  ...rest
}: Props) => {
  return (
    <div className="input-container" style={{ width: "100%" }}>
      <Controller
        name={rest.name}
        control={rest.control}
        render={({ field, fieldState }) => (
        <>
          <Radio.Group
            defaultValue="parent"
            buttonStyle="solid"
            {...field}
            className={
              fieldState.invalid ? "custom-input error" : "custom-input"
            }
            style={rest.style}
          >
            <Radio.Button value="parent">Parent</Radio.Button>
            <Radio.Button value="child">Child</Radio.Button>
            
          </Radio.Group>
          {fieldState.error && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {fieldState.error.message}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};
