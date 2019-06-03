import { ProfileGetColumnsHead, ProfileGetColumns } from './profile.schema';

export default {
  PROFILE: {
    getColumnsHead: () => ProfileGetColumnsHead(),
    getColumns: () => ProfileGetColumns(),
  },
};
