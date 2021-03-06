import { GET_VIDEOS, CURRENT_VIDEO } from './actionTypes';

export const getVideoData = videos => ({
  type: GET_VIDEOS,
  videos,
});

export const changeCurrentVideo = currentVideo => ({
  type: CURRENT_VIDEO,
  currentVideo,
});