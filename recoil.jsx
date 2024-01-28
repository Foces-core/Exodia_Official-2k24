import { atom } from 'recoil';

export const popup = atom({
    key: 'popup',
    default: false,
});

export const stack = atom({
    key: 'stack',
    default: '',
});

export const stackdetails = atom({
    key: 'stackdetails',
    default: {},
});

export const progress = atom({
    key: 'progress',
    default: localStorage.getItem('progress'),
});

// export const progressSelector = selectorFamily({
//     key: 'progressSelector',
//     get: () => ({ get }) => {
//       const progressValue = localStorage.getItem('progress');
//       return progressValue !== null ? parseFloat(progressValue) : 0;
//     },
//   });

