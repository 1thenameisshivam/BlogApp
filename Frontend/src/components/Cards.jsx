import React from "react";

const Cards = ({ title, description, image, date, time, author }) => {
  return (
    <div>
      <article className="flex w-full bg-white transition hover:shadow-xl mb-3 dark:bg-gray-900 dark:shadow-gray-800/25">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            <span>{date}</span>
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>{time}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="user post image"
            src={image}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                {title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
              {description}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Author- {author}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cards;
