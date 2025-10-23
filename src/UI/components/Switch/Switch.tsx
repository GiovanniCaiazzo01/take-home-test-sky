"use client";

import { useState, useEffect } from "react";
import { SwitchButton, Thumb } from "./Switch.styled";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function ToggleSwitch({
  checked = false,
  onChange,
  className = "",
}: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(checked);

  useEffect(() => {
    setIsOn(checked);
  }, [checked]);

  const handleToggle = () => {
    const next = !isOn;
    setIsOn(next);
    onChange?.(next);
  };

  return (
    <SwitchButton
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={handleToggle}
      $on={isOn}
      className={className}
    >
      <Thumb $on={isOn} />
    </SwitchButton>
  );
}
