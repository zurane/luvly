import { ArrowRight } from "lucide-react";

export default function ProductCategoryCard(props) {
  return (
    <div className="rounded bg-gray-50 relative h-full">
      <img
        src={props.categoryImage}
        alt={props.categoryName}
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bottom-2 px-3 flex items-end justify-between  bg-opacity-70">
        <h3 className="text-center text-xl tracking-normal text-white font-extrabold p-2">
          {props.categoryName}
        </h3>
        <div className="bg-black p-2 rounded-full">
          <ArrowRight color="white" size={30} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
