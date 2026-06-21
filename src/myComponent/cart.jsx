import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { useSelector, useDispatch } from "react-redux";
import { calculateDiscount } from "@/redux/slices/productSlice";
import CartItem from "./cartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const products = useSelector((state) => state.product.productList);
  const discount = useSelector((state) => state.product.discount);
  const totalProduct = products.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // reduce loops over every product. runs - discount on every iteration.
  // So if you have 3 products, discount gets subtracted 3 times.
  // reduce first sums all prices → gives you one number → then subtracts discount once from that final sum
  const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const totalDiscount = (discount / 100) * subTotal;
  const totalPrice = subTotal - totalDiscount;
  const error = useSelector((state) => state.product.error);

  return (
    <div className="mx-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            onClick={console.log(products)}
            className="relative"
          >
            Cart
            {totalQuantity != 0 ? (
              <p className="rounded-full absolute -right-2 -top-2 bg-purple-500 text-white w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </p>
            ) : (
              ""
            )}
          </Button>
        </DialogTrigger>
        <DialogContent showCloseButton={true}>
          <DialogHeader>
            <DialogTitle className="font-bold text-xl sm:text-2xl">
              Cart
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Product Details
            </DialogDescription>
          </DialogHeader>
          <div>
            {products.length == 0 ? (
              "No Product available"
            ) : (
              <>
                <ScrollArea className="max-h-96 sm:max-h-96 md:max-h-64 overflow-y-auto">
                  {products.map((product, idx) => (
                    <CartItem item={product} key={idx} />
                  ))}
                </ScrollArea>
                <div className="flex">
                  <Field data-invalid={error ? true : undefined}>
                    <FieldLabel htmlFor="coupon-input">Coupon Code</FieldLabel>
                    <div className="flex">
                      <Input
                        id="coupon-input"
                        placeholder="10OFF"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        aria-invalid={error ? true : undefined}
                      />
                      <Button
                        onClick={() => dispatch(calculateDiscount(code))}
                        className="p-4"
                      >
                        Apply
                      </Button>
                    </div>
                    {error && (
                      <FieldDescription className="text-red-500">
                        {error}
                      </FieldDescription>
                    )}
                  </Field>
                </div>
                <div>
                  <hr className="w-full my-4 bg-gray-200" />
                  <h3 className="font-semibold text-xl sm:text-2xl text-center">
                    Order Summary
                  </h3>
                  <div className="flex justify-between text-sm sm:text-base my-2">
                    <p>Total Items </p>
                    <p>{totalProduct}</p>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base my-2">
                    <p>sub total </p>
                    <p>{subTotal}</p>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base my-2">
                    <p>Discount</p>
                    <p>{totalDiscount}</p>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base font-semibold my-2">
                    <p>Total </p>
                    <p>{totalPrice}</p>
                  </div>
                </div>
                <Button className="w-full mt-4">Checkout now</Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;
