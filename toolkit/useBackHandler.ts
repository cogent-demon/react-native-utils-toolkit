import { DependencyList, EffectCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';

function useBackHandler(effect: EffectCallback, deps?: DependencyList) {
  useEffect(() => {
    const susbcription = BackHandler.addEventListener('hardwareBackPress', effect)
    return () => {
      if (susbcription?.remove) {
        susbcription.remove();
      } else {
        BackHandler.removeEventListener('hardwareBackPress', effect);
      }
    };
  }, deps);
}

export default useBackHandler;