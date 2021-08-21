import { RoughNotation } from "react-rough-notation";
import Container from "../../components/container/container";

const About = () => {
  return (
    <Container>
      <div className='max-w-3xl mx-auto md:p-5 p-10 min-h-screen'>
        <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-5 text-gray-900 '>
          About
        </h1>{" "}
        <div className='text-md md:text-lg font-light mb-5 text-gray-600'>
          <p className='mb-5'>
            Hey, I’m Hamish. My background is in finance, where I worked in
            investment banking and growth capital. I hold a Bachelors in
            International Business and a Masters in Finance from Maastricht
            University, Netherlands.
          </p>{" "}
          <p className='mb-5'>
            {" "}
            Feeling unfulfilled during my time working in finance, I wanted to
            try out new things. I decided to have a go at coding and it
            immediately captivated me. I should have known coding was for me.
            After all, my favourite exercise when working in finance was
            financial modelling, which involved writing a lot of formulas on
            excel. Since February 2021, I've spent most of my free time learning
            computer science and web development. I am now looking to make the
            switch into a tech career. You can check out my current capabilities
            below:
            <ul className='mt-5'>
              {coding.map((item) => (
                <li key={item.title} className='mb-5'>
                  <div className='flex items-center text-green-700'>
                    <div className='text-gray-900 font-semibold'>
                      <RoughNotation
                        type='highlight'
                        show={true}
                        color={item.color}
                      >
                        {item.title}
                      </RoughNotation>
                    </div>
                  </div>
                  <p class='text-gray-600 ml-2'>
                    <ol className=''>
                      {item.text.map((item) => {
                        return (
                          <li className={`flex items-center text-green-600`}>
                            <svg class='h-4 w-4 mr-2' viewBox='0 0 24 24'>
                              <g
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                <path d='M22 4L12 14.01l-3-3'></path>
                              </g>
                            </svg>
                            <div className='inline-block text-gray-600 '>
                              {item}
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </p>
                </li>
              ))}
            </ul>
          </p>
          <p className='mb-5'>
            Armed with coding skills, I also realised that I can now build
            businesses. The concept of building profitable side projects is very
            appealing to me. I've built two SaaS products that I've released to
            the public so far,{" "}
            <span className='text-blue-500 '>
              <a href='https://www.apscend.com/'>
                {" "}
                <RoughNotation
                  type='underline'
                  show={true}
                  color='#3b81f6'
                  animationDuration={1500}
                >
                  Apscend
                </RoughNotation>
              </a>
            </span>{" "}
            and{" "}
            <span className='text-blue-500'>
              {" "}
              <a href='https://morpher.vercel.app/'>
                {" "}
                <RoughNotation
                  type='underline'
                  show={true}
                  color='#3b81f6'
                  animationDuration={1500}
                >
                  Morpher
                </RoughNotation>
              </a>
            </span>
            . Building these products has taught me about the importance of
            marketing, pricing and customer feedback when building products. As
            of September 2021, I plan on building at least one SaaS business per
            month in the hope of creating successful mini businesses that can
            generate me some side-income.
          </p>
          <p className='mt-5'></p>
          <p className='mb-5'>
            I spend my free time doing sports, watching football and coding
            personal projects. I'm currently in based in Mauritius, but lived in
            the UK, Netherlands and Germany over the last 6 years. I am fluent
            in English and French.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

const coding = [
  {
    title: "Frontend Web Development",
    text: [
      "React",
      "Next.js",
      "Vanilla JS",
      "HTML",
      "CSS (Chakra-UI & TailwindCSS)",
    ],
    color: "#ccff33",
  },
  {
    title: "Backend Web Development",
    text: ["Node.js", "Express", "MongoDB", "SQL(PostgreSQL)", "GraphQL"],
    color: "#0aefff",
  },
  {
    title: "Other Knowledge  ",
    text: [
      "Scripting and Web Scraping (Node.js, Puppeteer.js)",
      "CI/CD (Docker, Travis, Github Actions)",
      "Data Structures & Algorithms",
    ],
    color: "#0aff99",
  },
];
