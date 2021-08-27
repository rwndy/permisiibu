import { CustomMeta, Navbar, Footer} from '../../components'
import { useRouter } from 'next/router'

const BlogPostPage = (props) => {
  const router = useRouter()
  return (
    <>
    <CustomMeta
      lang="id"
      title={`${props.blog.title} | Permisiibu`}
      url={`permisiibu.id/blog/${props.blog.slug}`}
      description={props.blog.description}
    />
    <Navbar />
      <article className="article-wrap">
        <div className="container">
          <h1 className="article-title">{props.blog.title}</h1>
          <div className="article-text" dangerouslySetInnerHTML={{ __html: props.blog.content }}>
          </div>
          <div className="back" onClick={() => router.back()}><u>{`< kembali`}</u></div>
        </div>
      </article>
      <Footer />
    </>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/src/post/${slug}.md`;

    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
            blog: {
                ...data,
          content: result.toString(),
            }
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

    const path = `${process.cwd()}/src/post`;
  const files = fs.readdirSync(path, "utf-8");

    const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;