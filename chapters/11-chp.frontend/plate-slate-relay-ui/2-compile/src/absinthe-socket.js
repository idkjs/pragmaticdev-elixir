/***
 * Excerpted from "Craft GraphQL APIs in Elixir with Absinthe",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/wwgraphql for more book information.
***/
import * as AbsintheSocket from "@absinthe/socket";
import { Socket as PhoenixSocket } from "phoenix";

export default AbsintheSocket.create(
  new PhoenixSocket("ws://localhost:4000/socket")
);
