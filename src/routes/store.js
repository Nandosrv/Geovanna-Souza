import { writable } from 'svelte/store';

export const modalAberto = writable(null);

// @ts-ignore
export const openModal = (desafio) => {
  modalAberto.set(desafio);
};

export const closeModal = () => {
  modalAberto.set(null);
};
