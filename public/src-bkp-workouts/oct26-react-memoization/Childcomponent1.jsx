import { memo } from "react";

export default memo( function Childcomponent1(
    
) {
  console.log("Im child 1");

  return (
    <div>
      <div className="heading">
        <p className="">Childcomponent1</p>
        
      </div>
    </div>
  );
});
