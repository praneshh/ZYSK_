import { GoArrowUpRight } from "react-icons/go";

function Blog() {
  return (
    <div className="px-4 sm:px-0 mb-20">
      {/* Blog Header Section */}
      <div className="max-w-[1216px] mx-auto mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <span className="text-base font-semibold text-textPurple mb-2 sm:mb-0">
            Our blog
          </span>
          <button className="bg-buttonbg px-5 py-3 text-white font-semibold text-base rounded-md">
            View all posts
          </button>
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold leading-[32px] sm:leading-[44px] text-headingFont mb-2">
          Latest blog posts
        </h2>
        <p className="text-subText text-base sm:text-xl">
          Tools and strategies modern teams need to help their companies grow.
        </p>
      </div>

      {/* Blog Posts Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-[1216px] mx-auto">
        {/* Post 1 */}
        <section className="w-full sm:w-[384px]">
          <img
            src="Image (4).png"
            alt="blog img"
            className="mb-3 w-full h-auto object-cover"
          />
          <h5 className="text-textPurple font-semibold text-sm leading-[20px] mb-1">
            Design
          </h5>
          <div className="flex justify-between items-center">
            <h2 className="text-headingFont font-semibold text-lg sm:text-2xl leading-[24px] sm:leading-[32px] mb-2">
              UX review presentations
            </h2>
            <GoArrowUpRight className="text-xl" />
          </div>
          <p className="text-subText text-sm sm:text-base leading-[20px] sm:leading-[24px] mb-4">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="flex items-center gap-4">
            <img
              src="Avatar (3).png"
              alt="profile"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <h5 className="text-sm text-headingFont font-semibold">
                Olivia Rhye
              </h5>
              <p className="text-subText text-sm">20 Jan 2024</p>
            </div>
          </div>
        </section>

        {/* Post 2 */}
        <section className="w-full sm:w-[384px]">
          <img
            src="Image (5).png"
            alt="blog img"
            className="mb-3 w-full h-auto object-cover"
          />
          <h5 className="text-textPurple font-semibold text-sm leading-[20px] mb-1">
            Product
          </h5>
          <div className="flex justify-between items-center">
            <h2 className="text-headingFont font-semibold text-lg sm:text-2xl leading-[24px] sm:leading-[32px] mb-2">
              Migrating to Linear 101
            </h2>
            <GoArrowUpRight className="text-xl" />
          </div>
          <p className="text-subText text-sm sm:text-base leading-[20px] sm:leading-[24px] mb-4">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get started.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="Avatar (2).png"
              alt="profile"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <h5 className="text-sm text-headingFont font-semibold">
                Phoenix Baker
              </h5>
              <p className="text-subText text-sm">19 Jan 2024</p>
            </div>
          </div>
        </section>

        {/* Post 3 */}
        <section className="w-full sm:w-[384px]">
          <img
            src="Image (6).png"
            alt="blog img"
            className="mb-3 w-full h-auto object-cover"
          />
          <h5 className="text-textPurple font-semibold text-sm leading-[20px] mb-1">
            Software Engineering
          </h5>
          <div className="flex justify-between items-center">
            <h2 className="text-headingFont font-semibold text-lg sm:text-2xl leading-[24px] sm:leading-[32px] mb-2">
              Building your API stack
            </h2>
            <GoArrowUpRight className="text-xl" />
          </div>
          <p className="text-subText text-sm sm:text-base leading-[20px] sm:leading-[24px] mb-4">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="Avatar (1).png"
              alt="profile"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <h5 className="text-sm text-headingFont font-semibold">
                Lana Steiner
              </h5>
              <p className="text-subText text-sm">18 Jan 2024</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
