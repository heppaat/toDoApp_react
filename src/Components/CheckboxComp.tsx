import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxComp = (props: { checked: boolean; onChange: () => void }) => {
  const { checked, onChange } = props;
  return (
    <RadixCheckbox.Root
      checked={checked}
      onCheckedChange={onChange}
      className="w-6 h-6 flex items-center justify-center rounded-md border-2 border-gray-300 shadow-sm transition-colors
               bg-gray-200 hover:bg-gray-300 focus:ring focus:ring-teal-500 focus:outline-none"
    >
      {checked && (
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      )}
    </RadixCheckbox.Root>
  );
};

export default CheckboxComp;
