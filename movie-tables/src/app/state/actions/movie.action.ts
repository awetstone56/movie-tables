import { createAction, props } from '@ngrx/store';

export const retrievedMoviesList = createAction(
    '[Movies API] Retrieve movies success', props<{ Movie: any; }>()
);