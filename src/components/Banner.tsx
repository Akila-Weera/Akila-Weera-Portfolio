import { motion } from 'motion/react';

export default function Banner() {
  return (
    <div className="w-full bg-primary overflow-hidden py-10 relative flex items-center justify-center">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex whitespace-nowrap w-fit"
      >
        {/* We double the blocks so it can seamlessly loop at 50% translation */}
        {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
          <div key={index} className="flex items-center">
            <span className="font-giant text-[8vw] leading-none tracking-wider text-dark px-8">
              BUILDING THE FUTURE
            </span>
            <span className="font-giant text-[8vw] leading-none text-dark/30 px-4">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
