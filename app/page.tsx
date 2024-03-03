import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: "1",
    category: "Apple",
    name: "Apple",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/apple.jpg"],
  },
  {
    id: "2",
    category: "Mango",
    name: "Mango",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/mango.jpg"],
  },
  {
    id: "3",
    category: "Orange",
    name: "Orange",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/orange.jpg"],
  },
  {
    id: "4",
    category: "Banana",
    name: "Banana",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/banana.jpg"],
  },
  {
    id: "5",
    category: "Litchi",
    name: "Litchi",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/litchi.jpg"],
  },
  {
    id: "6",
    category: "Grapes",
    name: "Grapes",
    price: "$Rs. 300.00 per kg",
    images: ["/img/products/grapes.jpg"],
  },
  {
    id: "7",
    category: "Peaches",
    name: "Peach",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/peach.jpg"],
  },
  {
    id: "8",
    category: "Pineapples",
    name: "Pineapple",
    price: "Rs. 300.00 per kg",
    images: ["/img/products/pineapple.jpg"],
  },
];

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/hero.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Featured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <ShoppingBag className="mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
