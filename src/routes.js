import React from 'react';

import PageHome from './layout/pages/PageHome/PageHome';
import PageExercise from './layout/pages/PageExercise/PageExercise';
import PageExerciseMenu from './layout/pages/PageExerciseMenu/PageExerciseMenu';
import PageExerciseResult from './layout/pages/PageExerciseResult/PageExerciseResult';
import PageProfileAchievements from './layout/pages/PageProfileAchievements/PageProfileAchievements';
import PageForum from './layout/pages/PageForum/PageForum';
import PagePost from './layout/pages/PagePost/PagePost';
import PageNewPost from './layout/pages/PageNewPost/PageNewPost';
import PageShop from './layout/pages/PageShop/PageShop';
import PageTutors from './layout/pages/PageTutors/PageTutors';
import PageTutorDetail from './layout/pages/PageTutorDetail/PageTutorDetail';

export const routes = [
  {
    path: '/exercise',
    component: PageExercise
  },
  {
    path: '/exercise/result',
    component: PageExerciseResult
  },
  {
    path: '/learn',
    component: PageExerciseMenu
  },
  {
    path: '/profile/achievements',
    component: PageProfileAchievements
  },
  {
    path: '/forum',
    component: PageForum
  },
  {
    path: '/post/:id',
    component: PagePost
  },
  {
    path: '/new-post',
    component: PageNewPost
  },
  {
    path: '/',
    component: PageHome
  },
  {
    path: '/shop',
    component: PageShop
  },
  {
    path: '/tutors',
    component: PageTutors
  },
  {
    path: '/tutors/123',
    component: PageTutorDetail
  },
];