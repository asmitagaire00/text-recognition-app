import { useEffect, useState } from "react";
import FileUpload from "./FileUpload/FileUpload";
import Tesseract from "tesseract.js";

function App() {
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [recognizedText, setRecognizedText] = useState(null);

  useEffect(() => {
    const recognizeText = async () => {
      if (selectedUrl) {
        const result = await Tesseract.recognize(selectedUrl);
        setRecognizedText(result.data.text);
      }
    };
    recognizeText();
  }, [selectedUrl]);

  console.log("selectedUrl", selectedUrl);
  console.log("recognizedText", recognizedText);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FileUpload setSelectedUrl={setSelectedUrl} />
    </div>
  );
}

export default App;
