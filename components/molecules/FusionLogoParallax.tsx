import { useSpring, animated, to } from "react-spring";

import { FusionLogo } from "../atoms/FusionLogo";

// TODO: Fix mouse scope on either side

export const FusionLogoParallax = () => {
  const calc = (x: number, y: number) =>
    typeof window !== "undefined"
      ? [x - window.innerWidth / 2, y - window.innerHeight / 2 + 100]
      : [x, y];

  const translate1 = (x: number, y: number) =>
    `translate3d(${x / 30}px,${y / 30}px,0)`;
  const translate2 = (x: number, y: number) =>
    `translate3d(${x / 24}px,${y / 24}px,0)`;
  const translate3 = (x: number, y: number) =>
    `translate3d(${x / 20}px,${y / 20}px,0)`;
  const translate4 = (x: number, y: number) =>
    `translate3d(${x / 14}px,${y / 14}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 3, tension: 400, friction: 40 },
  }));

  return (
    <div
      className="relative"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onMouseLeave={() => set({ xy: [0, 0] })}
    >
      <animated.div
        className="absolute top-0 w-full h-full"
        style={{ transform: props.xy.to(translate2) }}
      >
        <FusionLogo includePaths={["barBlueBehind"]} />
      </animated.div>

      <animated.div
        className="absolute top-0 w-full h-full"
        style={{ transform: props.xy.to(translate1) }}
      >
        <FusionLogo includePaths={["rectangleFrame"]} />
      </animated.div>

      <animated.div
        className="absolute top-0 w-full h-full"
        style={{ transform: props.xy.to(translate2) }}
      >
        <FusionLogo includePaths={["barBlueInfront"]} />
      </animated.div>

      <animated.div
        className="absolute top-0 w-full h-full"
        style={{ transform: props.xy.to(translate3) }}
      >
        <FusionLogo includePaths={["barPink", "barYellow"]} />
      </animated.div>

      <animated.div
        className="absolute top-0 w-full h-full"
        style={{ transform: props.xy.to(translate4) }}
      >
        <FusionLogo includePaths={["fusionText"]} />
      </animated.div>
    </div>
  );
};