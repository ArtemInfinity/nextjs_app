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
    llm1: "IlyaGusev/mbart_ru_sum_gazeta", // https://huggingface.co/IlyaGusev/mbart_ru_sum_gazeta
    llm2: "csebuetnlp/mT5_multilingual_XLSum", // https://huggingface.co/csebuetnlp/mT5_multilingual_XLSum
    llm3: "cointegrated/rut5-base-absum", // https://huggingface.co/cointegrated/rut5-base-absum
    llm4: "IlyaGusev/rut5_base_sum_gazeta", // https://huggingface.co/IlyaGusev/rut5_base_sum_gazeta
    llm5: "utrobinmv/t5_summary_en_ru_zh_base_2048", // https://huggingface.co/utrobinmv/t5_summary_en_ru_zh_base_2048
  };

  const summarizationResult = await hf.summarization({
    model: models[model],
    inputs: text,
    parameters: {
      max_length: 600,
    },
  });

  return summarizationResult;
}
