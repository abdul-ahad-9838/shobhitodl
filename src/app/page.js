import AboutUs from "@/components/AboutUs";
import ApprovalLogos from "@/components/ApprovalLogos";
import Blogs from "@/components/Blogs";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQs";
import HeroSlider from "@/components/HeroSlider";
import VisionMission from "@/components/VisionMission";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen ">
      {/* <HeroSlider /> */}
      <AboutUs />
      {/* <VisionMission /> */}
      {/* <ApprovalLogos /> */}
      <Courses />
      {/* <Blogs /> */}
      {/* <FAQ /> */}
    </div>
  );
};

export default page;
