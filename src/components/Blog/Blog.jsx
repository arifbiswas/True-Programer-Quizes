import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-purple-400 text-5xl my-12 font-black">Blog</h1>
      <div className="my-12">
        <div class="w-full md:w-2/3 mx-auto p-5 bg-purple-100 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <div class="w-2/3">
              <h2 class="section-heading font-semibold text-3xl text-purple-600 mx-auto">
                Questions and Answer
              </h2>
            </div>
          </div>
           
              {/* blogs start cart 1 */}

          <div class="mt-8 space-y-8">
            <div>
              <div class="flex items-start">
                <div>
                  <span class="inline-flex justify-center items-center w-10 h-10 rounded bg-green-500 text-white font-medium text-sm">
                    Q
                  </span>
                </div>

                <p class="ml-1 md:ml-3 text-2xl">
                What is the purpose of react-router-dom?
                </p>
              </div>

              <div class="flex items-start mt-3">
                <div>
                  <span class="inline-flex justify-center items-center w-10 h-10 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                    A
                  </span>
                </div>

                <p class="ml-4 md:ml-3 text-gray-800 text-1xl mt-2">
                React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.
                </p>
                </div>
                </div>
          </div>

              {/* blogs start cart 2 */}

          <div class="mt-8 space-y-8">
            <div>
              <div class="flex items-start">
                <div>
                  <span class="inline-flex justify-center items-center w-10 h-10 rounded bg-green-500 text-white font-medium text-sm">
                    Q
                  </span>
                </div>

                <p class="ml-1 md:ml-3 text-2xl">
                How does context api work?
                </p>
              </div>

              <div class="flex items-start mt-3">
                <div>
                  <span class="inline-flex justify-center items-center w-10 h-10 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                    A
                  </span>
                </div>

                <p class="ml-4 md:ml-3 text-gray-800 text-1xl mt-2">
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..
                </p>
                </div>
                </div>
          </div>
              {/* blogs start cart 3 */}

          <div class="mt-8 space-y-8">
            <div>
              <div class="flex items-start">
                <div>
                  <span class="inline-flex justify-center items-center w-10 h-10 rounded bg-green-500 text-white font-medium text-sm">
                    Q
                  </span>
                </div>

                <p class="ml-1 md:ml-3 text-2xl">
                What is usehref()?
                </p>
              </div>

              <div class="flex items-start mt-3">
                <div>
                  <span class="inline-flex justify-center items-center w-10 h-10 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                    A
                  </span>
                </div>

                <p class="ml-4 md:ml-3 text-gray-800 text-1xl mt-2">
                The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the component in react-router-dom to see how it uses useHref internally to determine its own href value..
                </p>
                </div>
                </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Blog;
