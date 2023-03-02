import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

const itemStore = (set, get) => ({
	items: [],
	addItem: (item) => {
		set((state) => ({ items: [item, ...state.items] }));
	},
	subTotal: (item) => {
		const i = get().items.findIndex((items) => items.name === item.name);
		const newTotal = [...get().items];
		newTotal[i].total--;
		set((state) => ({ items: newTotal }));
		console.log(get().items);
	},
	addTotal: (item) => {
		const i = get().items.findIndex((items) => items.name === item);
		const newTotal = [...get().items];
		newTotal[i].total++;
		set((state) => ({ items: newTotal }));
		console.log(get().items);
	},
	removeItem: (item) => {
		set((state) => ({ items: state.items.filter((items) => items.name !== item.name) }));
	},
});

const useItemStore = create(
	persist(itemStore, {
		name: "item-storage", // unique name
		storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
	})
);

export default useItemStore;
