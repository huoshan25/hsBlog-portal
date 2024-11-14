import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <div className="flex gap-[10px] lg:p-[50px_200px] lt-lg:p-[50px_40px]">
        <div className="flex flex-col">
          <Image
            src="/img/avatar.jpg"
            height={100}
            width={100}
            alt="avatar"
            className="rounded-circle mb-[30px] animate-fade-in-up"
          />
          <div
            className="text-text min-h-[1.5em] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center">
              <span className="mr-[5px]">你好</span>
              <Image className="mb-[7px]" src="/gif/Hi.gif" height={12} width={25} alt="hi" />
            </div>
          </div>
          <div
            className="text-text min-h-[1.5em] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            我是火山，一名前端开发攻城🦁。
          </div>
          <div
            className="text-text min-h-[1.5em] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            22年开始从事前端工作，这个选择源于大学期间对网页制作和HTML课程的浓厚兴趣。
          </div>
          <div
            className="text-text min-h-[1.5em] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            在前端开发的道路上，我始终保持着对技术的热爱和对新知识的渴望。
          </div>

          <div
            className="text-text min-h-[1.5em] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            从最初的纯前端项目开发起步，为了实现更多有趣的想法，我开始积极学习和拓展其他技术领域。
          </div>
          {/*技术栈*/}
          <div
            className="flex flex-wrap gap-[10px] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/nest.svg" height={20} width={20} alt="nest" />
                <span>Nest.js</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#E0234E] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/py.svg" height={20} width={20} alt="python" />
                <span>Python</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#3C78AA] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/js.svg" height={20} width={20} alt="python" />
                <span>Javascript</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#F5DD1E] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/ts.svg" height={20} width={20} alt="python" />
                <span>Typescript</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#007ACC] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/vue.svg" height={20} width={20} alt="python" />
                <span>Vue.js</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#41B883] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/nuxt.svg" height={20} width={20} alt="python" />
                <span>Nuxt.js</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#00DC82] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/react.svg" height={20} width={20} alt="python" />
                <span>React.js</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#3ECDFE] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="group flex-center gap-[5px] p-[5px] hover:backdrop-blur-sm transition-all duration-300">
              <div className="flex-center gap-[5px] text-text">
                <Image src="/svg/next.svg" height={20} width={20} alt="python" />
                <span>Next.js</span>
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] blur-[1.5px] bg-[#000000] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-[10px] mb-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.4s' }}
          >
            <div className="text-text min-h-[1.9em]">
              在技术上，我始终保持对前沿技术的追求，并始终在关注和探索新事物。
            </div>
          </div>

          <div
            className="flex text-text gap-[10px] opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.6s' }}
          >
            <div>
              如果你想了解更多，点击
              <Link
                className="text-blue-500 cursor-pointer relative group inline-block mx-1"
                href="http://47.98.158.27"
                target="_blank"
              >
                此处
                <Image
                  src="/svg/wavyLine.svg"
                  width={40}
                  height={6}
                  alt="wavyLine"
                  className="absolute bottom-[-15.5px] left-0 w-full group-hover:animate-wave-flow"
                />
                <div className="absolute opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 -bottom-[170px] left-1/2 -translate-x-1/2 w-[260px] bg-white border border-gray-200 rounded-lg shadow-lg p-2 transition-all duration-200 ease-in-out">
                  <Image
                    src="/img/blogHomepage.png"
                    alt="blogHomepage"
                    width={300}
                    height={200}
                    quality={100}
                    className="w-full h-auto rounded"
                  />
                </div>
              </Link>
              以转到我的博客
            </div>
            <Image src="img/logo.svg" height={15} width={15} alt="blog_logo" />
          </div>
        </div>
      </div>
    </>
  )
}
