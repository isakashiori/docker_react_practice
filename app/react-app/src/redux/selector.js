import { createSelector } from "@reduxjs/toolkit";

export const countSelector = (state) => state.count.count;