import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";

type StepElement = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

type Props = React.PropsWithChildren<{
  steps: StepElement[];
}>;

export const Stepper = ({ steps }: Props) => {
  const nbStepps = useMemo(() => steps.length, [steps]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = useCallback(() => {
    setCurrentIndex(
      currentIndex === nbStepps - 1 ? currentIndex : currentIndex + 1
    );
  }, [currentIndex, nbStepps]);

  const previous = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  }, [currentIndex, nbStepps]);

  return (
    <>
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {steps.map((step, index) => {
          const isCurrent = index === currentIndex;

          return (
            <li
              className={clsx(
                "flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 ",
                isCurrent ? "text-blue-600 dark:text-blue-500" : ""
              )}
            >
              <span
                className={clsx(
                  "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400",
                  isCurrent ? "border-blue-600" : ""
                )}
              >
                {index + 1}
              </span>
              <span>
                <h3 className="font-medium leading-tight">{step.title}</h3>
                <p className="text-sm">{step.subtitle}</p>
              </span>
            </li>
          );
        })}
      </ol>
      {/* <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
          <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500"></span>
          <span>
            <h3 className="font-medium leading-tight">User info</h3>
            <p className="text-sm">Step details here</p>
          </span>
        </li>
        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          <span>
            <h3 className="font-medium leading-tight">Company info</h3>
            <p className="text-sm">Step details here</p>
          </span>
        </li>
        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          <span>
            <h3 className="font-medium leading-tight">Payment info</h3>
            <p className="text-sm">Step details here</p>
          </span>
        </li>
      </ol> */}
    </>
  );
};
