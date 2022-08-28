import http from "http";
import url from "url";
import { getUser } from "./get-user";

const port = 5000;

const requestHandler = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const { query } = url.parse(request.url ?? "", true);
  const id = query["id"];

  if (id) {
    return response
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(getUser({ userId: +id })));
  }

  response.end("Hello!");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
