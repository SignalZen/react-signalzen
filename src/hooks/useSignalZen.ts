import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

type SignalZenAPI = {
  pushUserData: (data: Record<string, any>) => void;
  setChatIcon: (data: Record<string, any>) => void;
  setLayout: (data: Record<string, any>) => void;
  setColors: (data: Record<string, any>) => void;
  setHideOnMobile: (data: boolean) => void;
  show: () => void;
  hide: () => void;
  expand: () => void;
  suspend: () => void;
};

declare global {
  interface Window {
    SignalZen: any;
  }
}

const whenAvailable = (callback: (klass: any) => void) => {
  const t = setInterval(() => {
    if (window.SignalZen) {
      clearInterval(t);
      callback(window.SignalZen);
    }
  }, 10);
};

export const useSignalZen = (
  appId: string,
  options: Record<string, any> = {},
): SignalZenAPI => {
  const [instance, setInstance] = useState<any>(null);
  const load = async () => {
    if (instance) return;

    const element = document.createElement('script');
    element.src = options.src || 'https://cdn.signalzen.com/signalzen.js';
    element.setAttribute('async', 'true');
    document.documentElement.firstChild?.appendChild(element);
    whenAvailable((SignalZen) => {
      const instance = new SignalZen({ ...options, appId });
      setInstance(instance);
      instance.load();
    });
  };

  const pushUserData = (data: Record<string, any>) => {
    whenAvailable((SignalZen) => {
      SignalZen.pushUserData(data);
    });
  };

  const setChatIcon = (data: Record<string, any>) => {
    whenAvailable((SignalZen) => {
      SignalZen.setChatIcon(data);
    });
  };

  const setLayout = (data: Record<string, any>) => {
    whenAvailable((SignalZen) => {
      SignalZen.setLayout(data);
    });
  };

  const setColors = (data: Record<string, any>) => {
    whenAvailable((SignalZen) => {
      SignalZen.setColors(data);
    });
  };

  const setHideOnMobile = (value: boolean) => {
    whenAvailable((SignalZen) => {
      SignalZen.setHideOnMobile(value);
    });
  };

  const show = () => {
    whenAvailable((SignalZen) => {
      SignalZen.show();
    });
  };

  const hide = () => {
    whenAvailable((SignalZen) => {
      SignalZen.hide();
    });
  };

  const expand = () => {
    whenAvailable((SignalZen) => {
      SignalZen.expand();
    });
  };

  const suspend = () => {
    whenAvailable((SignalZen) => {
      SignalZen.suspend();
    });
  };

  useEffect(() => {
    load();
  }, []);

  return {
    pushUserData,
    setChatIcon,
    setLayout,
    setColors,
    setHideOnMobile,
    show,
    hide,
    expand,
    suspend,
  };
};

useSignalZen.PropTypes = {
  token: PropTypes.string.isRequired,
  options: PropTypes.object,
};

useSignalZen.defaultProps = {};
