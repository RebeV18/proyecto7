import ReactPlayer from "react-player";

export const Podcast = () => {
  return (
    <>
      <div className=" card border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]">
        <ReactPlayer url="https://youtu.be/XFCdNw33nbo?si=lmXhUAs7O1RWviz0" />
      </div>
      <div className=" card border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]">
        <ReactPlayer url="https://youtu.be/LaXEEPbW3nY?si=y2FwpjhLMwxdPCqk" />
      </div>
    </>
  );
};
