import { ArrowRight } from "lucide-react";

export default function ProductCategoryCard(props) {
  return (
    <div className="rounded bg-gray-50 relative">
      <img
        src={props.categoryImage}
        alt={props.categoryName}
        className="w-full object-cover rounded"
      />
      <div className="absolute inset-0 bottom-4 px-3 flex items-end justify-left">
        <h3 className="text-center text-3xl tracking-normal text-white font-extrabold p-2">
          {props.categoryName}
        </h3>
        <ArrowRight color="white" size={45} strokeWidth={1} />
      </div>
    </div>
  );
}
