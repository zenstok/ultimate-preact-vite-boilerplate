import { usePopper } from "react-popper";
import { useState } from "react";
import * as SC from "./styles";
import { ChevronDownIcon } from "../../../../assets/icons/chevron-down-icon";

interface Option {
  label: string;
  value: string;
}

interface Props {
  defaultOption: Option;
  options: Option[];
  onSelected(option: Option): void;
}

export function Dropdown({ defaultOption, options, onSelected }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState(defaultOption.label);

  const [referenceRef, setReferenceRef] = useState<HTMLDivElement | null>(null);
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-4, 12],
        },
      },
    ],
  });

  function handleOpen() {
    setIsVisible(!isVisible);
  }

  function handleItemClick(option: Option) {
    setIsVisible(false);
    setLabel(option.label);
    onSelected(option);
  }

  return (
    <SC.MainContainer>
      <SC.TriggerContainer
        ref={setReferenceRef}
        $isVisible={isVisible}
        onClick={handleOpen}
      >
        {label}
        <ChevronDownIcon />
      </SC.TriggerContainer>
      <SC.DropdownItemsContainer
        ref={setPopperRef}
        style={styles.popper}
        {...attributes.popper}
        $isVisible={isVisible}
      >
        {options.map((option) => (
          <SC.DropdownItem
            key={option.value}
            onClick={() => handleItemClick(option)}
            $isSelected={option.label === label}
          >
            {option.label}
          </SC.DropdownItem>
        ))}
      </SC.DropdownItemsContainer>
    </SC.MainContainer>
  );
}
