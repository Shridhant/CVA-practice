import { ChevronRight, Cat } from "lucide-react";

function Card2() {
  return (
    <>
      <div className="w-[90%]] h-[480px] group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
          <div
            style={{
              background:
                "radial-gradient(at 37% 19%, rgb(233, 213, 255) 0, transparent 94%), radial-gradient(at 16% 21%, rgb(168, 162, 158) 0, transparent 64%), radial-gradient(at 16% 23%, rgb(134, 25, 143) 0, transparent 36%), radial-gradient(at 14% 73%, rgb(75, 85, 99) 0, transparent 37%), radial-gradient(at 91% 46%, rgb(91, 33, 182) 0, transparent 77%), radial-gradient(at 76% 75%, rgb(163, 163, 163) 0, transparent 25%)",
            }}
            className="absolute top-0 left-0 w-full h-full  group-hover:opacity-30 opacity-0 transition-all ease-in-out duration-300"
          ></div>

          <img
            src="https://media.istockphoto.com/id/173600743/photo/sitting-cat.jpg?s=1024x1024&w=is&k=20&c=3jpY_uAApo2i_wzZd7DzdYvRqm7c50Icjzl-M3lIB5k="
            alt="shoes"
            width={600}
            height={600}
            className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
          />
        </figure>
        <article className="  p-4 space-y-2">
          <div className="h-8 w-20 bg-gray-200 flex justify-center items-center rounded-md">
            <Cat className="text-gray-600" />
          </div>
          <h1 className="text-xl font-semibold capitalize">
            BEAR IS HIS NAME!
          </h1>
          <p className="text-base leading-[120%]">
            FISH IS HIS GAME! My cat is half punjabi and half naga.
          </p>
          <a
            href="#"
            className=" text-base dark:text-white text-blue-600 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  "
          >
            Learn about STEALING!
            <span>
              <ChevronRight />
            </span>
          </a>
        </article>
      </div>
    </>
  );
}

export default Card2;
