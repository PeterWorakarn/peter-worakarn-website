import SkeletonsElement from "./SkeletonsElement";

const ArticleSkeleton: React.FC = () => {
  return (
    <article className="flex flex-col gap-2">
      <SkeletonsElement margin="m-0" width="w-full lg:w-[310px] aspect-w-16" height="h-[180px] aspect-h-9" />
      <div className="flex justify-start gap-5 h-auto">
        <SkeletonsElement margin="m-0" width="w-[45px]" height="h-[20px]" />
        <SkeletonsElement margin="m-0" width="w-[70px]" height="h-[20px]" />
      </div>
      <SkeletonsElement margin="m-0" width="w-full lg:w-[310px]" height="h-[20px]" />
      <SkeletonsElement margin="m-0" width="w-2/3 lg:w-[200px]" height="h-[20px]" />
    </article>
  );
};

export default ArticleSkeleton;