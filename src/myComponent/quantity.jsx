import React from "react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { addProduct,removeProduct } from "@/redux/slices/productSlice";
import { useDispatch } from "react-redux";

const Quantity = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div>
      <ButtonGroup>
        <Button size="icon" variant="secondary" onClick={()=>{dispatch(removeProduct(item))}}>
          <Minus />
        </Button>
        <ButtonGroupSeparator />
        <Button variant="secondary">{item.quantity}</Button>
        <ButtonGroupSeparator />
        <Button size="icon" variant="secondary" onClick={()=>{dispatch(addProduct(item))}}>
          <Plus />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Quantity;
