import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const Safari = () => (
  <>
    <div id="window-header">
      <WindowControls target="safari" />

      <PanelLeft className="ml-10 icon" />

      <div className="flex items-center gap-1 ml-5">
        <ChevronLeft className="icon" />
        <ChevronRight className="icon" />
      </div>

      <div className="flex-1 flex-center gap-3">
        <ShieldHalf className="icon" />

        <div className="search">
          <Search className="icon" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="flex-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Share className="icon" />
        <Plus className="icon" />
        <Copy className="icon" />
      </div>
    </div>

    <div className="blog">
      <h2>Featured Video</h2>

      <div className="space-y-8">
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6z09e3tHyI8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </>
);

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;