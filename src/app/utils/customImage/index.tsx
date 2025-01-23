"use client";
import React, { memo, useState } from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray animate-pulse rounded-lg"></div>
      )}
      <Image
        {...props}
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default memo(CustomImage);
