import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.5.0'
import { Configuration, OpenAIApi } from 'https://esm.sh/openai@3.1.0'

console.log("Hello from Indiehacker handbook!")

const router = new Router();

router
  .post("/add_notes", async (context) => {
    const supabase = createClient(
    // Supabase API URL - env var exported by default.
    Deno.env.get('SUPABASE_URL') ?? '',
    // Supabase API ANON KEY - env var exported by default.
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )
    // Change to get data from request body instead of query params
    let content = await context.request.body.text();
    content = JSON.parse(content);
    const author = content.author;
    const word = content.word;
    const line = content.line;
    const note = content.note;
    const version = content.version;
    const book_bodhi_id = content.book_bodhi_id || null;
    
    const { data, error } = await supabase
      .from('indiehacker_book_notes')
      .insert([
        { author, line, word, note, version, book_bodhi_id }
      ])
    console.log(data)
    
    // Add response handling
    if (error) {
      context.response.status = 400;
      context.response.body = { error: error.message };
    } else {
      context.response.status = 201;
      context.response.body = { message: "Note added successfully" };
    }
  })
  .get("/notes", async (context) => {
    const supabase = createClient(
    // Supabase API URL - env var exported by default.
    Deno.env.get('SUPABASE_URL') ?? '',
    // Supabase API ANON KEY - env var exported by default.
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get book_bodhi_id from URL query parameters
    const url = new URL(context.request.url);
    const book_bodhi_id = url.searchParams.get('book_bodhi_id');

    // Querying data from Supabase with conditional filter
    let query = supabase
      .from('indiehacker_book_notes')
      .select('*');
    
    if (book_bodhi_id) {
      query = query.eq('book_bodhi_id', book_bodhi_id);
    } else {
      query = query.is('book_bodhi_id', null);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching data:', error);
      context.response.status = 500;
      context.response.body = "Failed to fetch data";
      return;
    }

    context.response.body = data;
  })


const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());

console.info("CORS-enabled web server listening on port 8000");

await app.listen({ port: 8000 });