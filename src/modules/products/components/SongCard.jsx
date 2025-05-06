import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";

const { optionsCurrency } = envLoader;

export const SongCard = ({ product }) => {

  console.log (product)

  return (
    <div className=" card border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]">
      <div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <div className="overflow-visible py-2">
              {product.imagen && (
                <img
                  className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                  src={product.imagen}
                  alt={"CD cover"}
                  width={320}
                  height={320}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-white/90">
                  {product.cancion}
                </h3>
                <p className="text-small text-white/90">{product.cd}</p>
                <p className="text-small text-white/70">
                  {formatCurrency(product.precio, optionsCurrency)}
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <div
                aria-label="Music progress"
                className={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-white",
                }}
                color="white"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-white/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <button
                className="data-[hover]:bg-white/10"
                radius="full"
                variant="light"
              >
                <RepeatOneIcon className="text-white/80" />
              </button>
              <button
                className="data-[hover]:bg-white/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon />
              </button>
              <button
                className="w-auto h-auto data-[hover]:bg-white/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={54} />
              </button>
              <button
                className="data-[hover]:bg-white/10"
                radius="full"
                variant="light"
              >
                <NextIcon />
              </button>
              <button
                className="data-[hover]:bg-white/10"
                radius="full"
                variant="light"
              >
                <ShuffleIcon className="text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
