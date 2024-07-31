import React, { Suspense } from 'react';
import LazyLoad from 'react-lazyload';

interface LazyLoadImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
}

const LazyLoadImage = ({ src, alt, className, style }: LazyLoadImageProps) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyLoad height={200} offset={100} once>
                <img src={src} alt={alt} className={className} style={style} />
            </LazyLoad>
        </Suspense>
    );
};

export default LazyLoadImage;