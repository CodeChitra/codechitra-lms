import { Loader2, BookOpenCheck } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4 text-center animate-pulse">
      <div className="relative flex items-center justify-center w-16 h-16">
        <Loader2 className="absolute w-16 h-16 text-primary-700 animate-spin" />
        <BookOpenCheck className="w-8 h-8 text-white z-10" />
      </div>
      <span className="text-xl font-semibold text-muted-foreground">
        Loading your learning journey...
      </span>
      <p className="text-sm text-gray-500 max-w-xs">
        Please hold tight while we set up your next learning adventure 🚀
      </p>
    </div>
  );
};

export default Loading;
