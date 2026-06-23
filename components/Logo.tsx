import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  size?: LogoSize;
  className?: string;
  showMark?: boolean;
};

const sizes = {
  sm: {
    width: 146,
    height: 47,
  },
  md: {
    width: 190,
    height: 61,
  },
  lg: {
    width: 360,
    height: 115,
  },
};

const imageSrc = "/brand/xgenie-primary-logo.png";

export function Logo({ size = "md", className = "", showMark = false }: LogoProps) {
  const dimensions = sizes[size];

  if (showMark) {
    return (
      <div
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: size === "sm" ? 8 : 12,
        }}
        aria-label="xGenie"
      >
        <LogoMark size={size === "lg" ? 44 : size === "md" ? 34 : 28} />
        <LogoWordmark size={size} />
      </div>
    );
  }

  return <LogoWordmark size={size} className={className} width={dimensions.width} height={dimensions.height} />;
}

export function LogoWordmark({
  size = "md",
  className = "",
  width,
  height,
}: {
  size?: LogoSize;
  className?: string;
  width?: number;
  height?: number;
}) {
  const dimensions = sizes[size];

  return (
    <Image
      src={imageSrc}
      alt="xGenie"
      width={width ?? dimensions.width}
      height={height ?? dimensions.height}
      priority={size === "lg"}
      className={className}
      style={{
        width: width ?? dimensions.width,
        height: "auto",
        display: "block",
      }}
    />
  );
}

export function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const height = Math.round(size * (234 / 730));

  return (
    <Image
      src={imageSrc}
      alt="xGenie mark"
      width={size}
      height={height}
      className={className}
      style={{
        width: size,
        height: "auto",
        display: "block",
      }}
    />
  );
}
