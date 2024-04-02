import LoadingSkeleton from "@/components/LoadingSkeleton";
import { SVGSkeleton, Skeleton } from "@/components/Skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <LoadingSkeleton>
      <>
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid gap-x-5 grid-cols-2">
          <div className="border shadow-sm w-full">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="leading-none tracking-tight">
                <Skeleton className="w-[104px] max-w-full" />
              </h3>
              <div className="border-b">
                <h3 className="flex">
                  <div className="flex flex-1 items-center justify-between py-4">
                    <SVGSkeleton className="shrink-0 w-full h-[150px]" />
                  </div>
                </h3>
              </div>
              <p>
                <Skeleton className="w-full max-w-full" />
                <Skeleton className="w-full max-w-full" />
              </p>
              <p>
                <Skeleton className="w-[216px] max-w-full" />
              </p>
            </div>
          </div>
        </div>
      </>
    </LoadingSkeleton>
  );
}
