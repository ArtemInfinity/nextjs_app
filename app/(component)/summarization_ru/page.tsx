"use client";
import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

export default function Summarization() {
  const [summaryText, setSummaryText] = useState("");
  const [inputText, setInputText] = useState("");
  const [model, setModel] = useState("llm1");
  const [loading, setLoading] = useState(false);

  function handleModelChange(event: ChangeEvent<HTMLSelectElement>): void {
    setModel(event.target.value);
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setInputText(event.target.value);
  }

  async function fetchSummarization() {
    if (inputText) {
      setLoading(true);
      // send api call
      const res = await axios.post("/api/summarization_ru", {
        model,
        text: inputText,
      });
      setSummaryText(res.data.summary_text);
      setLoading(false);
    }
  }

  function resetHandler() {
    setInputText("");
    setSummaryText("");
  }

  return (
    <section className="sm:max-w-7xl mx-auto px-2 py-3">
      <div className="flex flex-col justify-start">
        <div>
          <label className="leading-loose mx-1">
            Select model AI for summarization:
          </label>
          <select
            onChange={handleModelChange}
            value={model}
            className="p-4 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-cyan-500"
          >
            <option value="llm1">model AI 1</option>
            <option value="llm2">model AI 2</option>
            <option value="llm3">model AI 3</option>
            <option value="llm4">model AI 4</option>
            <option value="llm5">model AI 5</option>
          </select>
        </div>

        <label className="leading-loose">Input Your Text:</label>
        <textarea
          className="border border-blue-300 outline-none block text-sm bg-white bg-transparent"
          placeholder="insert your text"
          rows={15}
          cols={5}
          value={inputText}
          onChange={handleTextareaChange}
        ></textarea>

        <div className="flex gap-2 justify-center">
          <button
            onClick={fetchSummarization}
            className="inline-block outline-none min-w-min border border-[#4da9a9] text-1xl sm:text-2xl text-white font-bold text-semibold bg-teal-500 p-3 my-3 rounded"
          >
            Get Summarization
          </button>
          <button
            onClick={resetHandler}
            className="text-sm sm:text-1xl inline-block outline-none min-w-min border border-[#4da9a9] bg-white text-red-700 p-3 my-3 rounded"
          >
            Clear the text in textarea
          </button>
        </div>
        {loading && renderLoader()}

        <label className="leading-loose">Get Your result:</label>
        <textarea
          className="border border-blue-300 outline-none block text-sm bg-white bg-transparent"
          placeholder="Get your text summarization"
          rows={5}
          cols={5}
          value={summaryText}
        ></textarea>
      </div>
    </section>
  );
  function renderLoader() {
    return (
      <div className="flex flex-row gap-2 items-center justify-center">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#4da9a9", "#4da9a9"]}
        />
      </div>
    );
  }
}
