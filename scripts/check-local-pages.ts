const { readFileSync } = require("node:fs") as typeof import("node:fs");
const { resolve } = require("node:path") as typeof import("node:path");

type PageCheck = {
  slug: string;
  url: string;
  errors: string[];
};

void main();

async function main() {
  const baseUrl = getBaseUrl();
  const localLandingSlugs = getLocalLandingSlugs();

  if (localLandingSlugs.length === 0) {
    console.error("ERROR no localLandings slugs found in src/data/site.ts");
    process.exit(1);
  }

  const results: PageCheck[] = [];

  for (const slug of localLandingSlugs) {
    const url = `${baseUrl}/${slug}/`;
    results.push(await checkPage(slug, url));
  }

  const failed = results.filter((result) => result.errors.length > 0);

  for (const result of results) {
    if (result.errors.length === 0) {
      console.log(`OK ${result.url}`);
    } else {
      console.error(`ERROR ${result.url}`);
      for (const error of result.errors) {
        console.error(`  - ${error}`);
      }
    }
  }

  console.log(`Checked ${results.length} local landing pages.`);

  if (failed.length > 0) {
    console.error(`${failed.length} page(s) failed.`);
    process.exit(1);
  }
}

function getBaseUrl() {
  const cliBaseUrl = process.argv.find((arg) => arg.startsWith("--base-url="))?.slice("--base-url=".length);
  const rawBaseUrl = cliBaseUrl || process.env.LOCAL_PAGES_BASE_URL || "http://127.0.0.1:3000";
  return rawBaseUrl.replace(/\/+$/, "");
}

function getLocalLandingSlugs() {
  const siteDataPath = resolve(process.cwd(), "src/data/site.ts");
  const source = readFileSync(siteDataPath, "utf8");
  const start = source.indexOf("export const localLandings");

  if (start === -1) return [];

  const assignmentStart = source.indexOf("=", start);
  if (assignmentStart === -1) return [];

  const arrayStart = source.indexOf("[", assignmentStart);
  if (arrayStart === -1) return [];

  let depth = 0;
  let arrayEnd = -1;

  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "[") depth += 1;
    if (char === "]") depth -= 1;
    if (depth === 0) {
      arrayEnd = index;
      break;
    }
  }

  if (arrayEnd === -1) return [];

  const localLandingsBlock = source.slice(arrayStart, arrayEnd + 1);
  return [...localLandingsBlock.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

async function checkPage(slug: string, url: string): Promise<PageCheck> {
  const errors: string[] = [];

  let response: Response;
  try {
    response = await fetch(url, { redirect: "manual" });
  } catch (error) {
    return {
      slug,
      url,
      errors: [`request failed: ${error instanceof Error ? error.message : String(error)}`],
    };
  }

  if (response.status !== 200) {
    errors.push(`expected status 200, got ${response.status}`);
  }

  if (response.status >= 300 && response.status < 400) {
    errors.push(`unexpected redirect to ${response.headers.get("location") || "(missing location)"}`);
  }

  const html = await response.text();

  if (!/<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']+["']/i.test(html)) {
    errors.push("missing canonical link");
  }

  if (!/<h1\b[^>]*>[\s\S]*?<\/h1>/i.test(html)) {
    errors.push("missing H1");
  }

  if (!/<title>[\s\S]+?<\/title>/i.test(html)) {
    errors.push("missing title");
  }

  if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html)) {
    errors.push("missing meta description");
  }

  return { slug, url, errors };
}
