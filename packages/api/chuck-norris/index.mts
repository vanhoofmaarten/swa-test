import { getChuckNorrisJoke } from "@mrtnvh/swa-test-core";
import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const joke = await getChuckNorrisJoke();

  context.res = {
    body: joke.value,
  };
};

export default httpTrigger;
