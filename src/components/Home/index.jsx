import React from "react";
import Layout from "../layout";
import Slider from "../slider/slider";
// import lowerimage from "../../Assets/lowerimage.jpg";

function Home() {
  return (
    <Layout>
      <Slider />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
              Key Benefits
            </h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Industry Leaders as Your Instructors
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Gain practical knowledge and firsthand insights from top
                  experts, bringing their extensive industry experience directly
                  to your learning journey.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Engaging Learning Experience
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our courses incorporate hands-on activities, immersive media,
                  and interactive content to boost involvement and aid in
                  knowledge retention.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Learn on Your Schedule
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  With 24/7 access to our courses, you can study from anywhere
                  and progress at your own pace, making it easy to fit learning
                  into your busy life.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Ongoing Assistance
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Count on our committed support team to guide you throughout
                  your learning journey, providing help whenever you need it for
                  a smooth and enjoyable experience.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
