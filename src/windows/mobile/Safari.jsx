import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Copy,
  Mic,
  Search,
  Share,
} from "lucide-react";
import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";

const MobileSafariContent = () => {
  return (
    <>
      <MobileWindowHeader windowKey="safari" title="Safari" />

      <div className="blog">
        <h2>Featured Video</h2>

        <div className="space-y-8">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2w42oHuptQQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <footer>
        <div className="search">
          <Search className="icon" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="flex-1"
          />
          <Mic className="icon" />
        </div>

        <div>
          <ChevronLeft size={32} className="icon text-gray-500" />
          <ChevronRight size={32} className="icon text-gray-500" />

          <Share size={32} className="icon text-blue-600" />
          <BookOpen size={32} className="icon text-blue-600" />

          <Copy size={32} className="icon text-blue-600" />
        </div>
      </footer>
    </>
  );
};

const MobileSafari = MobileWindowWrapper(MobileSafariContent, "safari");

export default MobileSafari;
