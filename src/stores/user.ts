import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { GridStackOptions, GridStackWidget } from 'gridstack';

const _layoutLocalStorageKey = "kedo/layout";

export const useUser = defineStore('userStore', {
  state: (): IUserStore => ({
    id: -1,
    firstName: "",
    lastName: "",
    avatarUrl: "",
    jwt: "",
    isLayoutInEditMode: false
  }),

  actions: {
    /**
     * Returns current layout.
     * Try load it from the localStorage first, if it empty loading it from a remote storage.
     */
    getLayout(): ILayout {
      // if current layout just return it
      if (this.layout)  return this.layout as ILayout;

      // try load it from local storage
      if (LocalStorage.has(_layoutLocalStorageKey)) {
        this.layout = LocalStorage.getItem<ILayout>(_layoutLocalStorageKey);
        if (this.layout) return this.layout as ILayout;
      }

      // the last chance is try load it from remote storage
      return [];
    },

    setLayout(layout: ILayout): void {
      // LocalStorage.set(_layoutLocalStorageKey, layou/// <reference path="" />t);
      // console.log('saved');
    }
  }
});

interface IUserStore {
  id: number,
  firstName: string,
  lastName: string,
  avatarUrl: string,
  jwt: string,
  isLayoutInEditMode: boolean,
  layout?: ILayout | null
};

type ILayout = GridStackWidget[] | GridStackOptions;