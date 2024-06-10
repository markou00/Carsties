import { create } from "zustand";

type State = {
  pageNumer: number;
  pageSize: number;
  pageCount: number;
  searchTerm: string;
  searchValue: string;
  orderBy: string;
  filterBy: string;
  seller?: string;
  winner?: string;
};

type Actions = {
  setParams: (params: Partial<State>) => void;
  reset: () => void;
  setSearchValue: (value: string) => void;
};

const initialState: State = {
  pageNumer: 1,
  pageSize: 12,
  pageCount: 1,
  searchTerm: "",
  searchValue: "",
  orderBy: "make",
  filterBy: "live",
  seller: undefined,
  winner: undefined,
};

export const useParamsStore = create<State & Actions>()((set) => ({
  ...initialState,
  setParams: (newParams: Partial<State>) => {
    set((state) => {
      if (newParams.pageNumer) {
        return { ...state, pageNumer: newParams.pageNumer };
      } else {
        return { ...state, ...newParams, pageNumer: 1 };
      }
    });
  },
  reset: () => set(initialState),
  setSearchValue: (value: string) => set({ searchValue: value }),
}));
