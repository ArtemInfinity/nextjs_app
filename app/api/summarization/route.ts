import { HfInference } from "@huggingface/inference";

let hf: HfInference;

type Models = {
  [key: string]: string;
};

export async function POST(req: Request, res: Response) {
  const { model, text } = await req.json();

  const inferenceResponse = await runInference(model, text);

  return new Response(JSON.stringify(inferenceResponse), { status: 200 });
}

async function runInference(model: string, text: string) {
  if (!hf) {
    hf = new HfInference(process.env.HF_TOKEN);
  }
  const models: Models = {
    llm1: "facebook/bart-large-cnn",
    llm2: "philschmid/bart-large-cnn-samsum",
    llm3: "manojpreveen/distilbart-cnn-v1",
  };

  const model1 = "facebook/bart-large-cnn";
  const summarizationResult = await hf.summarization({
    model: models[model],
    inputs: text,
    parameters: {
      max_length: 500,
    },
  });

  return summarizationResult;
}
