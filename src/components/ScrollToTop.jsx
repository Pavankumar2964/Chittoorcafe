import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navigate = useNavigate();

    // Scroll to top on every route/hash change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    // Special logic: Always go to home on refresh/initial load
    // To detect a refresh vs a normal navigation, we can check if it's the mount
    // and if the path is not '/' or there's a hash.
    useEffect(() => {
        const isFirstMount = !window.sessionStorage.getItem('app_mounted');

        if (isFirstMount) {
            window.sessionStorage.setItem('app_mounted', 'true');
            if (pathname !== '/' || hash !== '') {
                navigate('/', { replace: true });
            }
        }

        // Cleanup on beforeunload to detect refresh as a "new mount"
        // Note: Some browsers might keep sessionStorage, but a hard refresh usually resets it or we can use a more robust check.
        // Actually, PerformanceNavigationTiming is better for "reload" detection.
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries.length > 0 && navEntries[0].type === 'reload') {
            if (pathname !== '/' || hash !== '') {
                navigate('/', { replace: true });
            }
        }
    }, []);

    return null;
};

export default ScrollToTop;
