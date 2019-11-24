/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const SET_USER = 'SET_USER';
export const SET_USER_DATA = 'SET_USER_DATA';

export const SET_USER_ACTIVITIES = 'SET_USER_ACTIVITIES';
export const SET_USER_ACTIVITIES_LIBRARY = 'SET_USER_ACTIVITIES_LIBRARY';
export const SET_USER_ACTIVITY_COMPLETIONS = 'SET_USER_ACTIVITY_COMPLETIONS';
export const SET_USER_MEASURES = 'SET_USER_MEASURES';
export const SET_USER_MEASURE_LIBRARY = 'SET_USER_MEASURE_LIBRARY';
export const SET_USER_STRUCTURE = 'SET_USER_STRUCTURE';

export const SET_USER_FIRESTORE_DB = 'SET_USER_FIRESTORE_DB';

export const reportMeasure = (completedMeasure: Object) => {};

export const reportCompletion = (activityCompletion: Object) => {};

export const setUser = (user: Object) => {
  return {
    type: SET_USER,
    user
  };
};

export const setUserData = (userData: Object) => {
  return { type: SET_USER_DATA, userData };
};

export const setUserActivities = (userActivities: Object) => {
  return { type: SET_USER_ACTIVITIES, userActivities };
};

export const setUserActivitiesLibrary = (userActivitiesLibrary: Object) => {
  return { type: SET_USER_ACTIVITIES_LIBRARY, userActivitiesLibrary };
};

export const setUserActivityCompletions = (userActivityCompletions: Object) => {
  return { type: SET_USER_ACTIVITY_COMPLETIONS, userActivityCompletions };
};

export const setUserMeasures = (userMeasures: Object) => {
  return { type: SET_USER_MEASURES, userMeasures };
};

export const setUserMeasuresLibrary = (userMeasureLibrary: Object) => {
  return { type: SET_USER_MEASURE_LIBRARY, userMeasureLibrary };
};

export const setUserStructure = (userStructure: Object) => {
  return { type: SET_USER_STRUCTURE, userStructure };
};

export const setUserFirestoreDB = (userFirestoreDB: Object) => {
  return { type: SET_USER_FIRESTORE_DB, userFirestoreDB };
};


