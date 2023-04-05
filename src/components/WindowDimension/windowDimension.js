import { useEffect, useState } from 'react';

function getWindowDimensions() {
    const { innerWidth, innerHeight } = window;
    return {
        innerWidth, innerHeight
    }

};

export default function useWindowDimension() {

    const [windowDimension, setWindowDimension] = useState(getWindowDimensions());

    useEffect(() => {

        function size() {
            setWindowDimension(getWindowDimensions())
        }

        window.addEventListener('resize', size)
        return () => window.removeEventListener('resize', size)

    }, []);

    return windowDimension;
};


