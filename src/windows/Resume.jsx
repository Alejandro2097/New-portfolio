import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const Resume = () => (
  <>
    <div id="window-header">
      <WindowControls target="resume" />
      <h2>Resume.pdf</h2>

      <a
        href="files/resume.pdf"
        download
        className="cursor-pointer"
        title="Download resume"
      >
        <Download className="icon" />
      </a>
    </div>

    <Document className="resume-pdf" file="files/resume.pdf">
      <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
    </Document>
  </>
);

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
