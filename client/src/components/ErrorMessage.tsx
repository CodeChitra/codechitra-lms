import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "Something went wrong. Please try again.",
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-center px-4 py-6 rounded-lg border border-destructive/20 bg-destructive/5">
      <AlertTriangle className="w-10 h-10 text-destructive mb-3" />
      <h2 className="text-lg font-semibold text-destructive">
        Oops! An error occurred
      </h2>
      <p className="text-sm text-muted-foreground mt-1 max-w-xs">{message}</p>
    </div>
  );
};

export default ErrorMessage;
