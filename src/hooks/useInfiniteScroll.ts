import { useState, useEffect } from 'react';

export function useInfiniteScroll(max: number, step = 10, delay = 500, threshold = 200) {
    const [visibleCount, setVisibleCount] = useState(step);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        setVisibleCount(step);
    }, [step, max]);


    useEffect(() => {
        const handleScroll = () => {
            const bottomReached =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold;

            if (bottomReached && !isWaiting && visibleCount < max) {
                setIsWaiting(true);

                setTimeout(() => {
                    setVisibleCount((prev) => Math.min(prev + step, max));
                    setIsWaiting(false);
                }, delay);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [max, step, visibleCount, isWaiting, delay, threshold]);

    return visibleCount;
}
