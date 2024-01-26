import { atom } from 'recoil';

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