import type { GetStaticProps, NextPage } from "next";

import { BlogPost } from "../types/cms/Blog";
import { FusionEvent } from "../types/cms/FusionEvent";
import { getBlogPosts, getNextFusionEvent } from "../lib/cms/queries";
import { Layout } from "../components/organisms/Layout";
import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";
import { BlogPostsOverview } from "../components/homepage/BlogPostsOverview";
import { AboutFusion } from "../components/homepage/AboutFusion";
import { NextEvent } from "../components/homepage/NextEvent";

interface HomePageProps {
  nextEvent: FusionEvent | undefined;
  blogPosts: BlogPost[];
}

const HomePage: NextPage<HomePageProps> = ({ nextEvent, blogPosts }) => (
  <Layout withHero>
    <div className="container mx-auto flex flex-col gap-20 px-4 py-4">
      <NextEvent nextEvent={nextEvent} />

      <AboutFusion />

      <div>
        <Heading level={2}>Fusion Blog</Heading>
        <BlogPostsOverview blogPosts={blogPosts} />
      </div>

      <div>
        <Heading level={3} className="pb-4 text-center">
          Temporary Links
        </Heading>

        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <Button href="/events">Events</Button>

          <Button href="/blog" color="pink">
            Blog
          </Button>

          <Button href="/about" color="yellow">
            About
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [nextEvent, blogPosts] = await Promise.all([
    getNextFusionEvent(),
    getBlogPosts(),
  ]);

  return {
    props: {
      nextEvent,
      blogPosts,
    },
  };
};

export default HomePage;
