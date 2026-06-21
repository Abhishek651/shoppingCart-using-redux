import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/productSlice";

const items = [
  {
    id: nanoid(),
    name: "Wireless Mouse",
    price: 599,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Mechanical Keyboard",
    price: 2499,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Gaming Headset",
    price: 1799,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Laptop Stand",
    price: 899,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "USB-C Hub",
    price: 1299,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Webcam",
    price: 1599,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Monitor",
    price: 8999,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "External SSD",
    price: 3499,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Bluetooth Speaker",
    price: 2199,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Smart Watch",
    price: 4999,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Power Bank",
    price: 1499,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Gaming Mouse Pad",
    price: 499,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Portable Hard Drive",
    price: 4299,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Noise Cancelling Earbuds",
    price: 2999,
    quantity: 0,
  },
  {
    id: nanoid(),
    name: "Laptop Backpack",
    price: 1199,
    quantity: 0,
  },
];

const Products = () => {
  const dispatch = useDispatch();


  return (
    <div className="flex justify-center gap-2 flex-wrap mt-2 my-2 mt-8">
      {items.map((i, idx) => {
        return (
          <Card
            className="relative mx-auto w-full max-w-sm pt-0 mt-8"
            key={idx}
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary" className="bg-amber-300">
                  sale
                </Badge>
              </CardAction>
              <CardTitle className="text-sm sm:text-base md:text-lg">{i.name}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Price : {i.price}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" onClick={() => dispatch(addProduct(i))}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
