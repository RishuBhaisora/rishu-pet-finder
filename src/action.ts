export const PETS_TYPE_FETCH = "PETS_TYPE_FETCH";
export const PETS_TYPE_FETCHED = "PETS_TYPE_FETCHED";

export const petsTypeFetch = () => ({ type: PETS_TYPE_FETCH });
export const petsTypeFetched = (payload: any) => ({
  type: PETS_TYPE_FETCHED,
  payload: payload,
});
