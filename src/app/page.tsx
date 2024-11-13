import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-[50px] h-[50px] bg-primary">test</div>
      <Image src="/img/avatar.jpg" height={100} width={100} alt="avatar" className="rounded-circle"/>
      <div className="bg-background text-text">
        <button className="bg-primary">按钮</button>
      </div>

      <div className="bg-white dark:bg-gray-800">
        <button className="bg-blue-500 dark:bg-blue-700">黑暗主题按钮</button>
      </div>
    </div>
  );
}
