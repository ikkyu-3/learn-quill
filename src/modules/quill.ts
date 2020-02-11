import Quill, { QuillOptionsStatic } from "quill";

import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

export const defaultOptions: QuillOptionsStatic = {
  debug: "info",
  modules: {
    toolbar: [
      [{ size: ["huge", "large", false, "small"] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"]
    ]
  },
  theme: "snow"
};

export default Quill;
