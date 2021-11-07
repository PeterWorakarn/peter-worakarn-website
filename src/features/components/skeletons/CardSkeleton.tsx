import SkeletonsElement from "./SkeletonsElement";

const ArticleSkeleton: React.FC = () => {
  return (
    <article className="flex flex-col gap-3 h-96 bg-typo-main p-10">
      <SkeletonsElement margin="m-0" width="w-1/3" height="h-[20px]" />
      <div className="flex flex-col gap-4 mb-8">
        <SkeletonsElement margin="m-0" width="w-full" height="h-[30px]" />
        <SkeletonsElement margin="m-0" width="w-full" height="h-[30px]" />
        <SkeletonsElement margin="m-0" width="w-full" height="h-[30px]" />
        <SkeletonsElement margin="m-0" width="w-2/4" height="h-[30px]" />
        <SkeletonsElement margin="m-0" width="w-1/3" height="h-[30px]" />
      </div>
      <SkeletonsElement margin="m-0" width="w-1/3" height="h-[20px]" />
    </article>
  );
};

export default ArticleSkeleton;