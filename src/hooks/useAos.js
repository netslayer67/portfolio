import { useEffect } from 'react';
import AOS from 'aos';

const refreshAos = () => requestAnimationFrame(() => AOS.refreshHard());

export const useAosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      offset: 100,
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      startEvent: 'load',
    });

    let isReady = false;
    const markReady = () => {
      if (!isReady) {
        document.documentElement.classList.add('aos-ready');
        isReady = true;
      }
      refreshAos();
    };

    const onLoad = () => markReady();
    const onResize = () => refreshAos();
    const onHash = () => refreshAos();

    window.addEventListener('load', onLoad);
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', onHash);

    if (document.fonts?.ready) {
      document.fonts.ready.then(markReady);
    }

    const images = Array.from(document.images || []);
    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener('load', refreshAos, { once: true });
      }
    });

    const refreshTimeout = setTimeout(markReady, 900);
    const fallbackTimeout = setTimeout(() => {
      document.documentElement.classList.add('aos-fallback');
      refreshAos();
    }, 2000);

    return () => {
      clearTimeout(refreshTimeout);
      clearTimeout(fallbackTimeout);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);
};

export const useAosRefresh = () => {
  useEffect(() => {
    const refreshTimeout = setTimeout(refreshAos, 200);
    return () => clearTimeout(refreshTimeout);
  }, []);
};
