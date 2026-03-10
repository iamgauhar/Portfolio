import React from 'react'
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
    return (
        <div className="max-h-screen overflow-y-auto relative bg-transparent">
            <a href="https://drive.google.com/uc?export=download&id=1ufcuH0wOJ4DWBcO-bRCfbz8eCyzOFmXe"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-10 right-10 z-50 bg-white rounded-3xl px-4 py-2 flex items-center gap-2"
            >
                <FaFileDownload /> Download PDF
            </a>
            <div className="h-screen bg-transparent">
                <iframe
                    src="https://drive.google.com/file/d/1ufcuH0wOJ4DWBcO-bRCfbz8eCyzOFmXe/preview"
                    width="100%"
                    height="100%"
                    className="bg-transparent"
                    style={{
                        border: "none",
                        background: "transparent",
                    }}
                />
            </div>
        </div>
    )
}

export default Resume
