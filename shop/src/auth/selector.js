import { NAME } from './constants';

export const isLogged = state => !!state[NAME].token;
