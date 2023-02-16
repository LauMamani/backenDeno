import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
const port = 8080;

interface DATABody {
    color: string;
}

let colores: String[] = [];

const handler = async (req: Request): Promise<Response> => {
    if (req.method == "POST") {
      const body: DATABody = await req.json();
      const color = body.color;
      colores.push(color);
      console.log(`Color Agregado: ${color}`);
      console.log(`Array de colores: ${colores}`);
      return new Response ("Color Cargado", {status: 200});
              
    } else {
      return new Response(`<html><body><form method="POST"><h2>Ingresa Color</h2><input type="text" name="color"><input type="submit" value="Agregar Color"></form></body></html>`,
      {headers: {
        "content-type": "text/html; charset=UTF-8",
      },});  
    }
}

await serve (handler, {port});