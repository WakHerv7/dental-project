import { SketchPicker, BlockPicker } from "react-color";
import { useState } from "react";
import Checkbox from "@/components/ui/Checkbox/Checkbox";

type ColorSelectorProps = {
  label?: string,
  size?: number,
  dropdownPosition?: string | 'below' | 'side',
}
function ColorSelector(props:ColorSelectorProps) {
  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  // destructuring rgba from state
  const { r, g, b, a } = sketchPickerColor;

  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");
  const [noColor, setNoColor] = useState<boolean>(false);
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);

  const handleOpenColorPicker = () => {
    setOpenColorPicker(!openColorPicker);
  }

  return (
    <div>
      <div className={`flex gap-2 relative sketchpickergap-4  w-full`}>
        <div className="flex gap-4 w-fit cursor-pointer" onClick={handleOpenColorPicker}>
          <span>{props.label}</span>
          {/* Div to display the color  */}
          <div>
          {noColor?
          <div
            style={{
              position: "relative",
              backgroundColor: `transparent`,
              width: props.size || 20,
              height: props.size || 20,
              border: "2px solid gray",
              borderRadius: "5px",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                content: "",
                position: "absolute",
                bottom: "3px",
                right: `${props.size ? -1 * props.size *1.5 : -1 * 20 *1.5}px`,
                width: "500%",
                height: "1px",
                rotate: "-45deg",
                border: "2px solid red",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          :
          <div
            style={{
              backgroundColor: `rgba(${r},${g},${b},${a})`,
              width: props.size || 20,
              height: props.size || 20,
              border: "2px solid gray",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          ></div>
          }
          </div>
        </div>
        {openColorPicker ?
        <div className={`flex flex-col w-fit${props.dropdownPosition === 'below' ? 'absolute top-[120%] left-0': ''}`}>
          <SketchPicker
            onChange={(color:any) => {
              setSketchPickerColor(color.rgb);
            }}
            color={sketchPickerColor}
          />
          <div className="bg-white rounded-sm p-2 mt-1 shadow-lg w-[220px] rounded-md">
            <Checkbox
            checked={noColor}
            onChange={setNoColor}>Aucune Couleur</Checkbox>
          </div>
        </div>
        : <></>}
        {/* Sketch Picker from react-color and handling color on onChange event */}
        
      </div>
      
    </div>
  );
}

export default ColorSelector;