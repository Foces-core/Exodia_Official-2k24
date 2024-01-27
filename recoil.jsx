import { atom } from 'recoil';
import { selector } from 'recoil';
export const popup =atom ({
    key: 'popup',
    default: false
})

export const stack =atom ({
    key: 'stack',
    default: ''
})

export const stackdetails =atom ({
    key: 'stackdetails',
    default: {}
})

export const progress=atom({
    key:'progress',
    default: 0
})

export const progressSelector = selector({
    key: 'progressSelector',
    get: ({ get }) => {
      // Get the current selected index from Recoil state (you can modify this logic based on your requirements)
      const selectedIndex = get(progress);
  
      // Map the selected index to progress value
      const progressValues = { 0: 0.3, 1: 0.5, 2: 1 };
  
      return progressValues[selectedIndex] || 0;
    },
  });